import Head from 'next/head';
import { type Children } from '../common/types';
import Navbar from '../navbar';
import { useSocket } from '@/common/hooks/useSocket';
import { EVENT_SOCKET, type EventValues } from '@/common/constants';
import { useCallback } from 'react';

type Props = {
  onSuccess?: () => void;
};

const PrivateLayout = ({ children, onSuccess }: Props & Children) => {
  const on = useCallback(
    (event: EventValues, data: any) => {
      switch (event) {
        case EVENT_SOCKET.NOTIFICATION:
          onSuccess?.();
          break;
        default:
          break;
      }
    },
    [onSuccess]
  );

  useSocket({ on });

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/images/favicon.ico' />
      </Head>
      <Navbar onSuccess={onSuccess} />
      <main className='flex-grow'>{children}</main>
    </>
  );
};

export default PrivateLayout;
