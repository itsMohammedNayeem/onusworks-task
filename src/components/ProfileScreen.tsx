import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectPersonByName,
  updatePerson,
} from "../features/persons/PersonsSlice";
import { RootState } from "../store";
import EditPersonModal from "./EditPersonModal";
import { Person } from "../types/types";

const ProfileScreen = () => {
  const navigate = useNavigate();
  const { personName } = useParams<{ personName: string }>();
  const person = useSelector((state: RootState) =>
    selectPersonByName(state, personName ?? "")
  );

  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleSaveEdit = (updatedPerson: Person) => {
    dispatch(updatePerson(updatedPerson));
    setIsEditModalOpen(false);
  };

  if (!person) {
    return <div className="text-center mt-20 font-mono">Person not found</div>;
  }

  const handleBack = () => {
    navigate("/home");
  };

  return (
    <div className="max-w-4xl mx-auto p-5 font-mono">
      <h1 className="text-3xl font-semibold text-center mb-6">Profile</h1>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <p className="text-xl mb-2">
          <span className="font-bold">Name:</span> {person.name}
        </p>
        <p className="text-xl mb-2">
          <span className="font-bold">Age:</span> {person.age}
        </p>
        <p className="text-xl">
          <span className="font-bold">Profession:</span> {person.profession}
        </p>
      </div>

      <div className="flex justify-between items-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => setIsEditModalOpen(true)}
        >
          Edit
        </button>

        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleBack}
        >
          Go home
        </button>
      </div>

      {isEditModalOpen && (
        <EditPersonModal
          person={person}
          onClose={() => setIsEditModalOpen(false)}
          onSave={handleSaveEdit}
        />
      )}
    </div>
  );
};

export default ProfileScreen;
