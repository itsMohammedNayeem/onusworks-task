import { Formik, Form, Field, ErrorMessage } from "formik";
import { EditPersonModalProps } from "../types/types";

const EditPersonModal = ({ person, onClose, onSave }: EditPersonModalProps) => {
  return (
    <dialog open className="rounded-lg p-5 bg-white shadow-xl">
      <Formik
        initialValues={person}
        onSubmit={(values, { setSubmitting }) => {
          onSave(values);
          setSubmitting(false);
          onClose();
        }}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col space-y-4">
            <label className="block">
              Age:
              <Field
                type="number"
                name="age"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
              <ErrorMessage
                name="age"
                component="div"
                className="text-red-500 text-xs italic"
              />
            </label>

            <label className="block">
              Profession:
              <Field
                type="text"
                name="profession"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
              <ErrorMessage
                name="profession"
                component="div"
                className="text-red-500 text-xs italic"
              />
            </label>

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
    </dialog>
  );
};

export default EditPersonModal;
