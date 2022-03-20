import fs from "fs";

export const getFileContents = (filePath: string) => {
  const file = fs.readFileSync(filePath, { encoding: "utf-8" });

  return file;
};
