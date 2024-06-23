import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import appConfig from '@/config/appConfig';
import axios from 'axios';
import { get, post } from '../http/http';

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

export const useChannels = () => useQuery({
  queryKey: ['channels'],
  queryFn: async () => {
    let data = null;
    try { 
      data = await get<InternalChannel[]>('v1/studio/channels/user')
    } catch (error) {
      console.log(error);
      return [];
    }

    if (typeof data === 'string') {
      return [];
    }

    return data;
  },
  refetchInterval: 3000
});

export const useChannelByTelegramId = (channelTelegramId: number) => useQuery({
  queryKey: ['channel', channelTelegramId],
  queryFn: async () => {
    let data = null;
    try {
      data = await get<InternalChannel>(`v1/studio/channels/${channelTelegramId}`);
    } catch (error) {
      console.log(error);
      return null;
    }

    if (typeof data === 'string') {
      return null;
    }

    return data;
  }
});

interface AddChannelPayload {
  channelSlug: string;
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
        const channel = await post<InternalChannel | null, AddChannelPayload>('v1/studio/channels', data);
        return channel;
      } catch (error) {
        console.log(error);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['channels']});
    }
  });
}

