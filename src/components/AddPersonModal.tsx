import { FormEvent, useState } from "react";

interface AddPersonModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (person: { name: string; age: number; profession: string }) => void;
}

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

  return (
    <dialog open={open} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <label>
          Name:{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Age:{" "}
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>

        <label>
          Profession:{" "}
          <input
            type="string"
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
