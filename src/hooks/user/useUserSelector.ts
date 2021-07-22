import { useSelector } from "react-redux";

import { IStore } from "../../store";

export default function useUserSelector(
  property: keyof IPasswordlessUser
): IPasswordlessUser[keyof IPasswordlessUser] | undefined {
  return useSelector((state: IStore) => state.user?.[property]);
}
