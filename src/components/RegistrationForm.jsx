import React, { useState } from 'react';

function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!name.trim()) {
      formErrors.name = 'Name is required';
      isValid = false;
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = 'Valid email is required';
      isValid = false;
    }

    if (password.length < 6) {
      formErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    if (password !== confirmPassword) {
      formErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSuccessMessage('Registration successful!');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>User Registration</h2>

      <div style={{ marginBottom: '15px' }}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: '100%', padding: '8px' }}
        />
        {errors.name && <small style={{ color: 'red' }}>{errors.name}</small>}
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '100%', padding: '8px' }}
        />
        {errors.email && <small style={{ color: 'red' }}>{errors.email}</small>}
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', padding: '8px' }}
        />
        {errors.password && <small style={{ color: 'red' }}>{errors.password}</small>}
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={{ width: '100%', padding: '8px' }}
        />
        {errors.confirmPassword && (
          <small style={{ color: 'red' }}>{errors.confirmPassword}</small>
        )}
      </div>

      <div style={{ marginBottom: '15px' }}>
        <button
          type="submit"
          style={{
            padding: '10px',
            width: '100%',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Register
        </button>
      </div>

      {successMessage && (
        <p style={{ color: 'green', marginTop: '10px' }}>{successMessage}</p>
      )}
    </form>
  );
}

export default RegistrationForm;