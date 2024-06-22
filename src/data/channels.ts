import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import appConfig from '@/config/appConfig';
import axios from 'axios';

export interface ChannelListItem {
  id: number;
  total: number;
  slug: string;
  name: string;
  image: string;
  subscribers: number;
  description: string;
}

export interface Channel extends ChannelListItem {
  stats: {
    series: number[];
    labels: number[];
  }
}

export const useChannels = (userTelegramId?: number) => useQuery({
  queryKey: ['channels'],
  queryFn: async () => {
    if (!userTelegramId) {
      return [];
    }

    let response = null;
    try { 
      response = await axios.get<InternalChannel[]>(`${appConfig.apiBaseUrl}/v1/studio/channels/user?userTelegramId=${userTelegramId}`);
    } catch (error) {
      console.log(error);
      return [];
    }

    if (typeof response.data === 'string') {
      return [];
    }

    return response.data;
  },
  enabled: !!userTelegramId,
});

export const useChannelByTelegramId = (channelTelegramId: number, userTelegramId?: number) => useQuery({
  queryKey: ['channel', channelTelegramId],
  queryFn: async () => {
    let response = null;
    try {
      response = await axios.get<InternalChannel>(`${appConfig.apiBaseUrl}/v1/studio/channels/${channelTelegramId}?userTelegramId=${userTelegramId}`);
    } catch (error) {
      console.log(error);
      return null;
    }

    if (typeof response.data === 'string') {
      return null;
    }

    return response.data;
  },
  enabled: !!userTelegramId,
});

interface AddChannelPayload {
  channelSlug: string;
  userTelegramId: number;
}

export interface InternalChannel {
  telegramId: number;
  slug: string;
  title: string;
  description: string | null;
  avatar: string;
  members: number;
  balance: number;
  stats?: {
    series: number[];
    labels: number[];
  };
}

export const useAddChannelMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<unknown, unknown, AddChannelPayload>({
    mutationFn: async (data) => {
      try {
        const response = await axios.post<InternalChannel | null>(
          `${appConfig.apiBaseUrl}/v1/studio/channels`,
          data,
        )
        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['channels']});
    }
  });
}

