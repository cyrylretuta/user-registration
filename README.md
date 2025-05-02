# 📝 User Registration Form with Validation

This is a React-based user registration form that uses controlled components and real-time form validation to ensure data correctness.

## Live Demo

[Live Project](https://cyrylretuta.github.io/user-registration/)

## 📂 GitHub Repository

[GitHub Repo](https://github.com/yourusername/your-repo-name)

## Technologies Used

- React (Functional Components)
- JavaScript (ES6+)
- HTML/CSS

## Features

- Controlled form inputs using `useState`
- Real-time input validation
- Success message on valid submission
- Error messages for invalid fields
- Responsive and clean layout

## Form Validation & State Management

- **State Management:** All form fields (`name`, `email`, `password`, `confirmPassword`) are managed using React's `useState`.
- **Validation Strategy:**
  - Realtime validation is triggered on every input change.
  - Email must match a standard regex pattern.
  - Password must be at least 6 characters.
  - Confirm Password must match Password.
  - Validation results are stored in a separate `errors` state object.
