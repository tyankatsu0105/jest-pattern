import * as Original from "../config";

export const getConfig = jest
  .fn<Original.BaseConfig, []>()
  .mockImplementation(() => {
    return {
      printWidth: 120,
      semi: true,
      tabWidth: 2,
      tabs: true,
      singleQuote: true,
    };
  });
