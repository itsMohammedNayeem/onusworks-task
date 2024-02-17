# React Redux Application with Authentication and CRUD

This project demonstrates a React application utilizing Redux for global state management, Tailwind CSS for styling, Formik for handling forms, and React Router for navigation between different components. It includes a login system, protected routes, and CRUD operations for managing persons.

## Features

- **User Authentication**: Login system that validates credentials against values stored in `localStorage`.
- **Protected Routes**: Ensures certain pages are accessible only after successful authentication.
- **CRUD Operations**: Allows adding, viewing, editing, and deleting persons via a Redux-managed global state.
- **Modern UI**: Utilizes Tailwind CSS for a responsive and modern interface.
- **Form Handling**: Uses Formik to manage form states and validations.

## Getting Started

### Prerequisites

- Node.js installed on your system.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/itsMohammedNayeem/onusworks-task.git
cd onusworks-task
```

2. Install the dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

### Usage

- Open your browser and navigate to `http://localhost:3000`.
- Use the following url to save username and password in local storage:
  - sample credentials: `http://localhost:3000/login?initialUsername=johndoe&initialPassword=12345
- Enter same credentials to login and If authentication is successful, you will be redirected to the home page.
- You can add, view details (by clicking the person), and edit the persons.

### Key components

- **`src/auth/LoginPage.tsx`**: Handles user authentication.
- **`src/components/HomeScreen.tsx`**: Displays a list of persons and allows adding a new person.
- **`src/components/ProfileScreen.tsx`**: Shows detailed information for a selected person and allows editing.
- **`src/components/AddPersonModal.tsx`/`EditPersonModal.tsx`**: Modal components for adding and editing persons, respectively.
- **`src/store`**: Contains the Redux store.
- **`src/persons/PersonsSlice.ts`**: Actions, and reducers for managing the global state.
- **`src/types/types.ts`**: Defines TypeScript types used throughout the application.

### Technologies used

- **React**: A JavaScript library for building user interfaces.
- **Redux**: A predictable state container for JavaScript apps.
- **Formik**: A small library for building forms in React.
- **React Router**: A collection of navigational components that compose declaratively with your application.
- **Tailwind CSS**: A utility-first CSS framework for quickly building custom designs.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.

### Screenshots

<img width="1049" alt="Screenshot 2024-02-18 at 12 41 44 AM" src="https://github.com/itsMohammedNayeem/onusworks-task/assets/127741549/490b0691-040d-4a1d-8a35-ca6d10ce9aaa">

<img width="1049" alt="Screenshot 2024-02-18 at 12 42 02 AM" src="https://github.com/itsMohammedNayeem/onusworks-task/assets/127741549/60ab5e82-b673-4397-8de3-5c4f9aa36e2c">

<img width="1049" alt="Screenshot 2024-02-18 at 12 42 11 AM" src="https://github.com/itsMohammedNayeem/onusworks-task/assets/127741549/63b8a4c8-7368-4e10-a214-cf012148ec3f">

<img width="1049" alt="Screenshot 2024-02-18 at 12 42 32 AM" src="https://github.com/itsMohammedNayeem/onusworks-task/assets/127741549/bb6b0562-12cc-4494-8a37-79d9b4dec807">
