interface IPost {
  id: string;
  url: string;
  name?: string;
  favoritedBy?: string[];
  tags?: {
    id: string;
    name: string;
  }[];
  createdAt: string;
  updatedAt: string;
}
