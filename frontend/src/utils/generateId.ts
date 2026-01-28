/**
 * Produces a string in GUID (Globally Unique Identifier) format
 * of {XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX}
 *
 * Returns {string} in GUID format.
 */
export const generateId = (): string => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return (
    s4() +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    s4() +
    s4()
  );
};
