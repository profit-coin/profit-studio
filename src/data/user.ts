import { useMutation, useQuery } from '@tanstack/react-query';
import { InternalUser } from './auth';
import { post, get } from '@/http/http';

export const useCreateUserMutation = () => {
  return useMutation<InternalUser | null>({
    mutationFn: async () => {
      const user = await post<InternalUser | null>('v1/studio/user', {});
      return user;
    }
  });
}

export const useUserBalance = () => {
  return useQuery({
    queryKey: ['balance'],
    queryFn: async () => {
      let balance = 0;
      try {
        balance = await get<number>('v1/studio/user/balance');
      } catch (error) {
        console.log(error);
        return 0;
      }

      return balance;
    },
    refetchInterval: 3000
  });
}
