export type UserLogin = {
  email: string;
  password: string;
};

export type LoginResponse = {
  token: string;
  user: {
    email: string;
  };
};

export type Profile = {
  email: string;
};
