import * as Original from "../user";

export const getUser = jest.fn<ReturnType<typeof Original.getUser>, []>(() => ({
  age: 20,
  name: "tyankatsu",
  id: "FF00B9E6-2BDF-4CA0-9CF2-C1BF91E0E8B8",
}));
