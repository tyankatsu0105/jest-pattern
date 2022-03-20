import * as User from "./user";

describe("user", () => {
  describe("getUser", () => {
    it("when param's id is matched param's user id, then return user matched id ", () => {
      const params: Parameters<typeof User.getUser>[0] = {
        id: "EE298169-4241-47B0-8FF0-7938602A18D0",
        users: [
          {
            age: 10,
            name: "user1",
            id: "EE298169-4241-47B0-8FF0-7938602A18D0",
          },
          {
            age: 20,
            id: "7D28FA86-12CF-4692-B14A-94ADAF9318D7",
            name: "user2",
          },
        ],
      };
      const result = User.getUser(params);

      expect(result).toStrictEqual({
        age: 10,
        name: "user1",
        id: "EE298169-4241-47B0-8FF0-7938602A18D0",
      });
    });

    it("when param's id is not matched every user's id, then throw error", () => {
      const params: Parameters<typeof User.getUser>[0] = {
        id: "CD6BAC59-3344-4897-8575-2E16E192F363",
        users: [
          {
            age: 10,
            name: "user1",
            id: "EE298169-4241-47B0-8FF0-7938602A18D0",
          },
          {
            age: 20,
            id: "7D28FA86-12CF-4692-B14A-94ADAF9318D7",
            name: "user2",
          },
        ],
      };

      expect(() => {
        User.getUser(params);
      }).toThrow("There isn't user.");
    });
  });
});
