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
    <div>
      <h1>Home Screen</h1>

      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {persons.map((person, index) => (
              <tr key={index} onClick={() => handleRowClick(person.name)}>
                <td>{person.name}</td>
                <td>{person.age}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <button onClick={() => setIsModalOpen(true)}>Add New Person</button>

        <AddPersonModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleAddPerson}
        />
      </div>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default HomeScreen;
