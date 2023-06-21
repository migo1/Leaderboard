const validateStringInput = (inputValue) => typeof inputValue === "string";

const validateIntegerInput = (inputValue) => typeof inputValue === "number" && Number.isInteger(inputValue);

export { validateStringInput, validateIntegerInput };