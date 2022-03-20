import * as File from "./file";
import path from "path";
import fs from "fs";
import { jest } from "@jest/globals";

describe("file", () => {
  describe("getFileContents", () => {
    it("when input file path, then return contents of file", () => {
      jest.spyOn(fs, "readFileSync").mockImplementation(() => "file contents");

      const filePath: Parameters<typeof File.getFileContents>[0] = path.resolve(
        path.join("src", "mock.json")
      );

      const result = File.getFileContents(filePath);

      expect(result).toBe("file contents");
    });
  });
});
