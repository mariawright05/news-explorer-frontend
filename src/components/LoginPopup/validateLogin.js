const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Enter a valid email address';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 5) {
    errors.password = 'Password needs to be at least 6 characters';
  }
  return errors;
};

export default validate;
