import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectPersonByName, updatePerson } from "./PersonsSlice";
import { RootState } from "../../store";
import EditPersonModal from "../../components/EditPersonModal";

const ProfileScreen = () => {
  const navigate = useNavigate();
  const { personName } = useParams<{ personName: string }>();
  const person = useSelector((state: RootState) =>
    selectPersonByName(state, personName ?? "")
  );

  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleSaveEdit = (updatedPerson: any) => {
    dispatch(updatePerson(updatedPerson));
    setIsEditModalOpen(false);
  };

  if (!person) {
    return <div>Person not found</div>;
  }

  const handleBack = () => {
    navigate("/home");
  };

  return (
    <div>
      <h1>ProfileScreen</h1>

      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <p>Profession: {person.profession}</p>

      <button onClick={() => setIsEditModalOpen(true)}>Edit Person</button>

      {isEditModalOpen && (
        <EditPersonModal
          person={person}
          onClose={() => setIsEditModalOpen(false)}
          onSave={handleSaveEdit}
        />
      )}

      <button onClick={handleBack}>Go to Home</button>
    </div>
  );
};

export default ProfileScreen;
