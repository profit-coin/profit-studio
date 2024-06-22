import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import appConfig from '@/config/appConfig';

interface CreateUserPayload {
  telegramId: number;
  username: string;
  firstName?: string;
  lastName?: string;
  language?: string;
}

export const useCreateUserMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<unknown, unknown, CreateUserPayload>({
    mutationFn: async (data) => {
      const response = await axios.post(`${appConfig.apiBaseUrl}/v1/studio/user`, data);
      console.log(response);
    }
  });
}
