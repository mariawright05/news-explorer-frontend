/* eslint-disable no-shadow */
import { useState } from 'react';

const useForm = (callback) => {
  const [values, setValues] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    callback();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return {
    onSubmit,
    onChange,
    values,
  };
};

export default useForm;
