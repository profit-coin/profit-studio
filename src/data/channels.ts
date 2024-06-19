import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {CHANNELS_MOCK, CHANNEL_1_MOCK, CHANNEL_2_MOCK, CHANNEL_3_MOCK} from './__mocks__/channels';
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

export const useChannels = () => useQuery({
  queryKey: ['channels'],
  queryFn: async () => {
    const data: ChannelListItem[] = CHANNELS_MOCK;
    return data;
  },
});

export const useChannelBySlug = (slug: string) => useQuery({
  queryKey: ['channel', slug],
  queryFn: async () => {
    if (slug === 'ruArt') {
      return CHANNEL_1_MOCK;
    }
    if (slug === 'java-job') {
      return CHANNEL_2_MOCK;
    }
    return CHANNEL_3_MOCK;
  },
});

interface VerifyChannelOwnershipPayload {
  slug: string;
  userId: number;
}

export const useVerifyChannelOwnershipMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<unknown, unknown, VerifyChannelOwnershipPayload>({
    mutationFn: async (data) => {
      try {
        const response = await axios.get(
          `${appConfig.apiBaseUrl}/telegram/channels?slug=all_best_films_in_the_world&username=manfies`, {
          headers: {
            'ngrok-skip-browser-warning': true
          }
        })
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
  });
}

