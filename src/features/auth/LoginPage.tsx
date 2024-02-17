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
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 font-mono">
      <h1 className="text-xl font-semibold mb-4">Login Page</h1>

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
          <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Username
              </label>
              <Field
                type="text"
                name="username"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-500 text-xs italic mb-4"
              />
            </div>

            <div className="mb-4s">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <Field
                type="password"
                name="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-xs italic mb-4"
              />
            </div>

            {loginFailed && (
              <div
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
                role="alert"
              >
                Invalid login details. Please try again.
              </div>
            )}

            <div className="flex items-center justify-between">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Login
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
