import { useState } from 'react';

export default function Form() {
  const [values, setValues] = useState({ username: '', email: '' });
  const [errors, setErrors] = useState({ username: '', email: '' });
  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    for (const key in values) {
      isValid &= validateField(key, values[key]);
    }
    if (!isValid) return;

    console.log(values);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    name in values && setValues({ ...values, [name]: value });
  };

  const validateField = (fieldName, fieldValue) => {
    const formErrors = {};
    let isValid = true;
    switch (fieldName) {
      case 'username':
        if (fieldValue.trim() === '') {
          formErrors[fieldName] = 'Username is Required!';
          isValid = false;
        } else formErrors[fieldName] = '';
        break;
      case 'email':
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (fieldValue.trim() === '') {
          formErrors[fieldName] = 'Email is Required!';
          isValid = false;
        } else if (!regex.test(fieldValue)) {
          formErrors[fieldName] = 'Invalid Email!';
          isValid = false;
        } else formErrors[fieldName] = '';

        break;
    }

    setErrors((prev) => {
      return { ...prev, ...formErrors };
    });
    return isValid;
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  return (
    <div className="container">
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.username && <p className="text-danger">{errors.username}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && <p className="text-danger">{errors.email}</p>}
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
