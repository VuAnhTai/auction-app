import { useEffect, useMemo } from 'react';
import createSocket from '../utils/socket';
import { LocalStorageUtils } from '../utils';
import { ACCESS_TOKEN_KEY } from '@/env/constants';
import { type EventValues } from '../constants';
import { useToast } from './useToast';
import { useProfile } from '@/auth/useProfile';

type Socket = {
  on?: (event: EventValues, data: any) => void;
};

export const useSocket = ({ on }: Socket) => {
  const { toastInfo } = useToast();
  const { email } = useProfile();
  const token = useMemo(() => LocalStorageUtils.get(ACCESS_TOKEN_KEY), []);
  useEffect(() => {
    const socket = createSocket(token as string);
    socket.on('connect', () => {
      console.log('connected');
    });

    return () => {
      socket.disconnect();
    };
  }, [email, on, toastInfo, token]);
};
