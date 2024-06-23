import { post } from '@/http/http';

export interface InternalUser {
  id: number;
  telegramId: number;
  username: string;
  firstName: string;
  lastName: string;
  balance: number;
}

interface VerifyTelegramUserPayload {
  initData: string;
}

const verifyTelegramUser = async (initData: string) => {
  const user = await post<InternalUser | null, VerifyTelegramUserPayload>('v1/studio/auth', { initData });
  return user;
};

export const useInternalAuth = (initData: string) => {
  return verifyTelegramUser(initData);
};
