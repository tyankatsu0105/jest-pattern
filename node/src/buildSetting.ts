import * as Config from "./config";

export const getSpaceChar = () => {
  const config = Config.getConfig();

  let char = " ";
  const isTab = config.tabs;

  if (isTab) char = "\t";

  return char;
};
