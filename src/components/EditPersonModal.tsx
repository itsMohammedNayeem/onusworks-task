import { useState } from "react";
import { EditPersonModalProps } from "../types/types";

const EditPersonModal = ({ person, onClose, onSave }: EditPersonModalProps) => {
  const [age, setAge] = useState<number>(person.age);
  const [profession, setProfession] = useState<string>(person.profession);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSave({ ...person, age, profession });
  };

  return (
    <dialog open>
      <form onSubmit={handleSubmit}>
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
          />
        </label>

        <label>
          Profession:
          <input
            type="text"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
          />
        </label>

        <button type="submit">Save</button>

        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </dialog>
  );
};

export default EditPersonModal;
