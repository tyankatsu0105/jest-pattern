import * as BuildSetting from "./buildSetting";

jest.mock("./config", () => {
  return {
    getConfig: jest
      .fn()
      .mockImplementationOnce(() => {
        return {
          tabs: true,
        };
      })
      .mockImplementationOnce(() => {
        return {
          tabs: false,
        };
      }),
  };
});

describe("buildsetting", () => {
  describe("getSpaceChar", () => {
    it("when tabs is true, then return tab character", () => {
      const result = BuildSetting.getSpaceChar();

      expect(result).toBe("\t");
    });

    it("when tabs is false, then return shitespace character", () => {
      const result = BuildSetting.getSpaceChar();

      expect(result).toEqual(" ");
    });
  });
});
