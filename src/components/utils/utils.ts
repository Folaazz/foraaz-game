import { decodeJwt } from "jose";

export const decodeToken = (token: string) => {
  return decodeJwt(token);
};

export const hashPassword = async (password: string) => {
  // Реализация хэширования паролей
};