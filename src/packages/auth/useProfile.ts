import type { Profile } from '@/common/types';
import { getProfileApi } from '@/rest/private/users';
import useSWR from 'swr';

export function useProfile() {
  const { data: profile } = useSWR<Profile>(`/profile`, () => {
    return getProfileApi();
  });

  return profile;
}
