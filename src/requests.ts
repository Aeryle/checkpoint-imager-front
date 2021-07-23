import axios from "axios";

export const posts = {
  getAll: (page = 0): Promise<IPost[]> =>
    axios
      .get<IPost[]>(
        `${
          import.meta.env.VITE_API_URL
        }/images?page=${page}&favoritedBy=true&tags=true`
      )
      .then((res) => res.data),
};
