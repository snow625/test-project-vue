const checkFields = (values, fields) => {
  for (const key in values) {
    if (Object.hasOwnProperty.call(values, key)) {
      if (fields[key]?.required && values[key] === "") {
        return false;
      }
    }
  }
  return true;
};

export default checkFields;
