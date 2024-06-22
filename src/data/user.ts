import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import appConfig from '@/config/appConfig';
import { InternalUser } from './auth';

interface CreateUserPayload {
  telegramId: number;
  username: string;
  firstName?: string;
  lastName?: string;
  language?: string;
}

export const useCreateUserMutation = () => {
  return useMutation<InternalUser | null, unknown, CreateUserPayload>({
    mutationFn: async (data) => {
      const response = await axios.post(`${appConfig.apiBaseUrl}/v1/studio/user`, data);
      return response.data;
    }
  });
}

export const useUserBalance = (userTelegramId?: number) => {
  return useQuery({
    queryKey: ['user', 'balance', userTelegramId],
    queryFn: async () => {
      if (!userTelegramId) {
        return undefined;
      }
      let response = null;
      try {
        response = await axios.get<number>(`${appConfig.apiBaseUrl}/v1/studio/user/balance?userTelegramId=${userTelegramId}`);
      } catch (error) {
        console.log(error);
        return 0;
      }

      return response.data;
    },
    enabled: !!userTelegramId,
    refetchInterval: 3000
  });
}
