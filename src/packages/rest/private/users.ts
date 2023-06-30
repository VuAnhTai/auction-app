import type { User } from '@/common/types';
import { API_URI } from '@/packages/env/constants';
import { RestApis } from '../apis';

export const getProfileApi = async (): Promise<any> => {
  try {
    const res = await RestApis.get(`${API_URI}/users/profile`);
    return res;
  } catch (e) {
    return null;
  }
};

export const depositApi = async (data: Partial<User>): Promise<any> => {
  try {
    const res = await RestApis.patch(`${API_URI}/users/deposit`, data);
    return res.data;
  } catch (e) {
    console.log('depositApi error: ', e);
    return null;
  }
};
