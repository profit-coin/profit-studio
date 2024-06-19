import { InternalUser, useInternalAuth } from '@/data/auth';
import React, { createContext, useContext, useState, useEffect, PropsWithChildren } from 'react';

interface AuthContextProps {
  user: InternalUser | null;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextProps>({ user: null, isLoading: true });

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<InternalUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initData = typeof window !== 'undefined' ? window.Telegram.WebApp.initData : '';

    if (initData) {
      setIsLoading(true);
      useInternalAuth(initData)
        .then(user => {
          setUser(user);
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
