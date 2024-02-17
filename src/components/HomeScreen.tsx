import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addPerson, selectPersons } from "../features/persons/PersonsSlice";
import { useState } from "react";
import { AddPersonModal } from "./AddPersonModal";

const HomeScreen = () => {
  const persons = useSelector(selectPersons);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Clear the loggedIn flag from localStorage
    localStorage.removeItem("loggedIn");

    // Redirect the user to the login page
    navigate("/login");
  };
  const handleAddPerson = (person: {
    name: string;
    age: number;
    profession: string;
  }) => {
    dispatch(addPerson(person));
    setIsModalOpen(false); // Close modal after saving
  };

  const handleRowClick = (personName: string) => {
    navigate(`/profile/${personName}`);
  };

  return (
    <div className="p-8 font-mono bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-semibold text-gray-800">Home Screen</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
        >
          Logout
        </button>
      </div>

      <div className="overflow-hidden rounded-lg shadow-lg mb-8">
        <table className="min-w-full leading-normal">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
                Name
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
                Age
              </th>
            </tr>
          </thead>
          <tbody>
            {persons.map((person, index) => (
              <tr
                key={index}
                onClick={() => handleRowClick(person.name)}
                className="cursor-pointer hover:bg-gray-100"
              >
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {person.name}
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {person.age}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
      >
        Add New Person
      </button>

      <AddPersonModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddPerson}
      />
    </div>
  );
};

export default HomeScreen;
