import api from "./api";
import User from "dtos/User";

interface SignInData {
  email: string;
  password: string;
}

interface SignInResponse {
  data: User;
}

interface SignUpData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const UsersService = {
  signUp: ({ name, email, password, password_confirmation }: SignUpData) =>
    api.post<void>("/auth/v1/users", {
      name,
      email,
      password,
      password_confirmation,
    }),
  signIn: ({ email, password }: SignInData) =>
    api.post<SignInResponse>("auth/v1/users/sign_in", {
      email,
      password,
    }),
    update(user: User) {
      return api.put(`/admin/v1/users/${user.id}`, { user: user });
    },
};

export default UsersService;
