import type { User } from '@/common/types';
import { LocalStorageUtils } from '@/packages/common/utils';
import { ACCESS_TOKEN_KEY, API_URI } from '@/packages/env/constants';
import { RestApis } from '../apis';

const token = LocalStorageUtils.get(ACCESS_TOKEN_KEY);

export const depositApi = async (data: Partial<User>): Promise<any> => {
  try {
    const res = await RestApis.patch(`${API_URI}/users/deposit`, data);
    return res.data;
  } catch (e) {
    console.log('depositApi error: ', e);
    return null;
  }
};
