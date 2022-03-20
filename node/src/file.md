fs に依存しているので、fs をモック化してテストするべき。
fs の機能自体は fs を提供している側がテストしているはずで、fs を利用する機能自身では fs が正常の処理を返す体でテストするべき。

# mock

```ts
jest.mock("fs", () => {
  return {
    readFileSync: () => {
      return "file contents";
    },
  };
});
```

でモック化すると fs のテストが可能。
jest の`__mocks__`はテスト対象のモックなので、パッケージのモック化が`__mocks__`ではできない。

jest.mock はテストファイルのトップレベルで書かないといけないので、一度 mock を使うと、違うテストケースでのモック化ができない。

# spyOn

jest.spyOn だと、テストケース毎にオブジェクトのモック化が可能なので、

```ts
import fs from "fs";

// inside describe > it
jest.spyOn(fs, "readFileSync").mockImplementation(() => "file contents");
```

でモック化したほうがいい。
