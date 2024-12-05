export type UserResponse = {
  results: User[];
};
export type UserName = {
  title: string;
  first: string;
  last: string;
};

export type User = {
  gender: string;
  name: UserName;
  email: string;
  id: {
    value: string;
  };
};
