type User = {
  id: string;
  name: string;
  age: number;
};

export const getUser = (params: { users: User[]; id: User["id"] }) => {
  const user = params.users.find((user) => user.id === params.id);
  if (user === undefined) throw new Error("There isn't user.");

  return user;
};
