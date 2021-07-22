interface IPartialUser {
  id?: string;
  username?: string;
  email?: string;
  password?: string;
  avatarURL?: string;
}

interface IFullUser extends IPartialUser {
  id: string;
  username: string;
  email: string;
  password: string;
}

type IPasswordlessUser = Omit<IFullUser, "password">;
