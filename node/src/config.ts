import { getFileContents } from "./file";
import path from "path";

const CONFIG_NAME = "sample.config.js";

/**
 * Base Prettier config
 */
export type BaseConfig = {
  printWidth: number;
  tabWidth: number;
  tabs: boolean;
  semi: boolean;
  singleQuote: boolean;
};

export type Config = Partial<BaseConfig> & {
  [key: PropertyKey]: any;
};

const initialConfig: Config = {
  printWidth: 80,
  semi: true,
  singleQuote: true,
  tabWidth: 4,
  tabs: false,
};

export const getConfig = () => {
  const config =
    (getFileContents(
      path.resolve(__dirname, CONFIG_NAME)
    ) as unknown as Config) || initialConfig;

  Object.keys(config).forEach((key) => {
    if (initialConfig[key] === undefined)
      throw new Error(`${key} is not supported`);
  });

  return config;
};
