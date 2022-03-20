import * as Config from "./config";
import * as File from "./file";

describe("fconfigile", () => {
  describe("getConfig", () => {
    it("when run, then return config properties", () => {
      const config: Config.Config = {
        printWidth: 120,
        semi: true,
        tabWidth: 2,
        tabs: true,
      };
      jest
        .spyOn(File, "getFileContents")
        .mockImplementation(() => config as unknown as string);

      const result = Config.getConfig();

      expect(result).toStrictEqual(config);
    });

    it("when found unexpected config key, then throw error", () => {
      jest.spyOn(File, "getFileContents").mockImplementation(
        () =>
          ({
            foo: "foo",
          } as unknown as string)
      );

      try {
        Config.getConfig();
      } catch (error) {
        if (error instanceof Error) {
          expect(error.message).toBe("foo is not supported");
        }
      }
    });
  });
});
