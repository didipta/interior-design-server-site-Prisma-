// import { AdminRole } from '../Admin/admin.interface';
// import { IRole } from '../Users/User.interface';

import { User } from '@prisma/client';

export type ILoginUser = {
  email: string;
  password: string;
};

export type ILoginUserResponse = {
  accessToken: string;
  isuserExist: User;
  // refreshToken?: string;
};

export type IRefreshTokenResponse = {
  accessToken: string;
};

export type IAuth = {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
};
// export type IVerifiedLoginUser = {
//   userId: string;
//   role: IRole;
// };
// export type IVerifiedLoginAdmin = {
//   userId: string;
//   role: AdminRole;
// };
