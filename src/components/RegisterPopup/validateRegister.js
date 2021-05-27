const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Enter a valid email address';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password needs to be at least 8 characters';
  }
  if (!values.name) {
    errors.name = 'name is required';
  } else if (values.name.length < 3) {
    errors.name = 'name needs to be at least 3 characters';
  }
  return errors;
};

export default validate;
