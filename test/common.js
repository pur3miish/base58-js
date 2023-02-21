(async function () {
  const { base58_to_binary, binary_to_base58 } = await import("base58-js");

  console.log(
    binary_to_base58(base58_to_binary("Thequickbrownfoxjumpedoverthea1zydog"))
  );
})();
