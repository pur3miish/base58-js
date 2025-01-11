import { equal } from "assert";
import { base58_to_binary, binary_to_base58 } from "base58-js";

it("base58 to binary", () => {
  const str = "Thequickbrownfoxjumpedoverthea1zydog";
  const array = base58_to_binary(str);
  binary_to_base58(array);
  equal(binary_to_base58(array), str);
});
