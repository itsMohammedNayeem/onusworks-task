import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";

const LoginPage = () => {
  const navigate = useNavigate();
  const [loginFailed, setLoginFailed] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const username = params.get("initialUsername");
    const password = params.get("initialPassword");
    if (username && password) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      // Clear URL search parameters
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  const handleSubmit = (
    values: { username: string; password: string },
    {
      setSubmitting,
      setFieldError,
    }: FormikHelpers<{ username: string; password: string }>
  ) => {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (
      values.username === storedUsername &&
      values.password === storedPassword
    ) {
      localStorage.setItem("loggedIn", "true");
      navigate("/home", { replace: true });
    } else {
      setLoginFailed(true);

      // Set field-specific errors
      setFieldError("username", " ");
      setFieldError("password", "Invalid username or password");

      setSubmitting(false);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>

      <Formik
        initialValues={{ username: "", password: "" }}
        validate={(values) => {
          const errors: { username?: string; password?: string } = {};
          if (!values.username) {
            errors.username = "Required";
          }
          if (!values.password) {
            errors.password = "Required";
          }
          return errors;
        }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="username">Username</label>
              <Field type="text" name="username" />
              <ErrorMessage name="username" component="div" />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
            </div>

            {loginFailed && (
              <div className="error">
                Invalid login details. Please try again.
              </div>
            )}

            <button type="submit" disabled={isSubmitting}>
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
