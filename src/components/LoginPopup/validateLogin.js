const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'An email address is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Please enter a valid email address';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password needs to be at least 8 characters';
  }
  return errors;
};

export default validate;
