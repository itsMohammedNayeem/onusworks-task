import { ReactElement } from "react";

export interface Person {
  name: string;
  age: number;
  profession: string;
}

export interface PersonsState {
  value: Person[];
}

export interface EditPersonModalProps {
  person: Person;
  onClose: () => void;
  onSave: (person: Person) => void;
}

export interface AddPersonModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (person: { name: string; age: number; profession: string }) => void;
}

export interface ProtectedRouteProps {
  element: ReactElement;
}
