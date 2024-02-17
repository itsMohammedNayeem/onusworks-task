import { FormEvent, useState } from "react";
import { AddPersonModalProps } from "../types/types";

export const AddPersonModal = ({
  open,
  onClose,
  onSave,
}: AddPersonModalProps) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [profession, setProfession] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSave({ name, age: Number(age), profession });

    setName("");
    setAge("");
    setProfession("");
  };

  const dialogStyles = open
    ? "fixed inset-0 bg-black bg-opacity-50 z-50"
    : "hidden";

  return (
    <div className={dialogStyles}>
      <div className="flex justify-center items-center h-full">
        <dialog open={open} className="rounded-lg p-5 bg-white shadow-xl">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <label className="block">
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
            </label>

            <label className="block">
              Age:
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
            </label>

            <label className="block">
              Profession:
              <input
                type="text"
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
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
                className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
              >
                Save
              </button>
            </div>
          </form>
        </dialog>
      </div>
    </div>
  );
};
