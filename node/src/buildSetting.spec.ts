import * as BuildSetting from "./buildSetting";
import * as Config from "./config";

jest.mock("./config");

const getConfigMock = Config.getConfig as jest.Mock;

describe("buildsetting", () => {
  describe("getSpaceChar", () => {
    it("when tabs is true, then return tab character", () => {
      getConfigMock.mockImplementation(() => {
        return {
          tabs: true,
        };
      });

      const result = BuildSetting.getSpaceChar();

      expect(result).toBe("\t");
    });

    it("when tabs is false, then return whitespace character", () => {
      getConfigMock.mockImplementation(() => {
        return {
          tabs: false,
        };
      });

      const result = BuildSetting.getSpaceChar();

      expect(result).toEqual(" ");
    });
  });
});
