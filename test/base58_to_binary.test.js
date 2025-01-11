import { ok, throws } from "assert";

import base58_to_binary from "../base58_to_binary.js";

it("base58 to binary", () => {
  ok(
    Buffer.from(
      base58_to_binary("6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV")
    ).toString("hex") ==
      "02c0ded2bc1f1305fb0faac5e6c03ee3a1924234985427b6167ca569d13df435cfeb05f9d2",
    "Expected output"
  );
  ok(
    Buffer.from(base58_to_binary("111z")).toString("hex") == "00000039",
    "leading 1s"
  );
  throws(() => base58_to_binary(), "expected throw - undefined base58 string");
  throws(
    () => base58_to_binary("0L"),
    "expected throw - invalid base58 string"
  );
});
