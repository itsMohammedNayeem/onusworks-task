import { Formik, Form, Field, ErrorMessage } from "formik";
import { AddPersonModalProps, Person } from "../types/types";

export const AddPersonModal = ({
  open,
  onClose,
  onSave,
}: AddPersonModalProps) => {
  const validate = (values: Person) => {
    const errors: { name?: string } = {};

    if (!values.name) {
      errors.name = "Required";
    }

    return errors;
  };

  return (
    <div
      className={`${
        open ? "fixed inset-0 bg-black bg-opacity-50 z-50" : "hidden"
      }`}
    >
      <div className="flex justify-center items-center h-full">
        <div className="rounded-lg p-5 bg-white shadow-xl">
          <Formik
            initialValues={{ name: "", age: 0, profession: "" }}
            validate={validate}
            onSubmit={(values, { setSubmitting }) => {
              onSave(values);
              setSubmitting(false);
              onClose();
            }}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col space-y-4">
                <div>
                  <label className="block">Name:</label>
                  <Field
                    type="text"
                    name="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block">Age:</label>
                  <Field
                    type="number"
                    name="age"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                  />
                  <ErrorMessage
                    name="age"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block">Profession:</label>
                  <Field
                    type="text"
                    name="profession"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                  />
                  <ErrorMessage
                    name="profession"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                  >
                    Save
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
