/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from '@prisma/client';
import bcrypt from 'bcryptjs';
import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import ApiError from '../../../errors/ApiError';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import prisma from '../../../shared/prisma';
import { IAuth, ILoginUser, ILoginUserResponse } from './auth.interface';
import { profileService } from '../user/user.service';

const signup = async (data: User): Promise<IAuth> => {
  const emailexit = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });
  if (emailexit) {
    throw new Error('Email already exist');
  }
  if (data.password.length < 6) {
    throw new Error('Password must be at least 6 characters long');
  }

  const passwordHash = await bcrypt.hash(
    data.password,
    Number(config.bcrypt_salt as string)
  );
  data.password = passwordHash;
  data.defaultpassword = '1';

  const result = await prisma.user.create({
    data: {
      ...data,
      password: passwordHash,
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  await profileService.insertprofike(result.id);
  return result;
};

const login = async (payload: ILoginUser): Promise<ILoginUserResponse> => {
  const { email, password } = payload;

  const isuserExist = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (!isuserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist');
  }
  const isPasswordMatch = await bcrypt.compare(password, isuserExist.password);

  if (!isPasswordMatch) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect');
  }

  const accessToken = jwtHelpers.createToken(
    {
      userId: isuserExist.id,
      role: isuserExist.role,
    },
    config.jwt_secret as Secret,
    config.jwt_expires_in as string
  );

  // const refreshToken = jwtHelpers.createToken(
  //   { email, role: isuserExist.role },
  //   config.jwt_refresh_secret as Secret,
  //   config.jwt_refresh_expires_in as string
  // );

  return {
    accessToken,
    isuserExist,
  };
};


export const authService = {
  signup,
  login,
};
