const validate = (values) => {
  const errors = {};
  if (!values.query) {
    errors.query = 'Please enter a topic';
  }
  return errors;
};

export default validate;
