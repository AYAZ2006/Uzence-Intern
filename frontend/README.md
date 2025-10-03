
# React Data Table Application

A clean, professional, and reusable React application that features an interactive input form and a dynamic data table with sortable columns and row selection. Built with **TypeScript** and **Tailwind CSS**, this project demonstrates best practices for component-driven development, state management, and UI design.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Approach & Architecture](#approach--architecture)
- [Future Improvements](#future-improvements)

---

## Project Overview

This application allows users to interact with a clean and organized data table. Users can input data, view it in a structured table format, sort columns, and select specific rows. The selected rows are displayed clearly for easy reference.

The project is designed with a **component-first approach**, ensuring modularity and reusability. It is suitable for integration into larger projects or as a standalone feature for admin dashboards, data management systems, and business analytics tools.

---

## Features

- **Reusable InputField Component** — For consistent input handling across the app.
- **Dynamic DataTable Component** — Supports sorting and selection.
- **Row Selection** — Allows selecting rows and viewing selected data.
- **TypeScript Support** — Ensures type safety and better developer experience.
- **Tailwind CSS Styling** — For responsive and modern UI design.
- **Clean and Modular Code** — Easy to extend and maintain.

---

## Tech Stack

- **Frontend Framework**: React (with TypeScript)
- **Styling**: Tailwind CSS
- **State Management**: React `useState`
- **Build Tool**: Vite or Create React App (depending on setup)
- **Version Control**: Git

---

## Folder Structure

```
src/
├── components/
│   ├── InputField/
│   │   └── InputField.tsx
|   |   |__InputField.Stories.tsx
│   └── DataTable/
│       └── DataTable.tsx
|       |__DataTable.Stories.tsx
├── App.tsx
├── index.tsx
├── types/
│   └── index.ts
├── styles/
│   └── tailwind.css
```

---

## Setup Instructions

### Prerequisites

Make sure you have **Node.js (v18 or later)** and **npm or yarn** installed.

---

### 1. Clone the repository

```bash
git clone https://github.com/AYAZ2006/Uzence-Intern
cd frontend
```

---

### 2. Install dependencies

```bash
npm install
```
or
```bash
yarn install
```

---

### 3. Run the application

```bash
npm start
```
or
```bash
yarn start
```

The application will run locally at:  
[http://localhost:3000](http://localhost:3000)

---

### 4. Build for production

```bash
npm run build
```
or
```bash
yarn build
```

---

## Usage

Once running:

1. **Enter a name** in the input field.
2. **View the data table** containing sample user data.
3. **Select rows** to see the chosen entries displayed below the table.

---

## Approach & Architecture

### Design Philosophy

The application follows a **component-driven design** to ensure scalability and reusability. Each UI element is self-contained, and logic is separated from presentation wherever possible.

### Component Breakdown

- **`InputField`**  
  A reusable component for text input with label and helper text. It supports custom styling and flexible props for various use cases.

- **`DataTable`**  
  A dynamic table component that receives `data` and `columns` as props. Supports:
  - Sorting
  - Row selection
  - Custom column rendering

### State Management

The project uses React's `useState` for state management:
- `inputValue` holds the current value of the input field.
- `selectedRows` stores the rows selected by the user.

For larger projects, this can be expanded using **Context API**, **Redux**, or **React Query** for data fetching.

### Styling

Tailwind CSS was chosen for:
- Rapid development with utility classes.
- Clean, responsive, and consistent styling.
- Ease of customization without writing custom CSS.

### Workflow

1. **Render the InputField** component with appropriate props.
2. **Render the DataTable** with data and column configuration.
3. **Handle row selection** and display selected rows in a JSON format.

---

## Future Improvements

- Add **pagination** for large datasets.
- Implement **column filtering** and search functionality.
- Connect to a backend API for dynamic data fetching.
- Add unit and integration tests with Jest and React Testing Library.
- Enhance UI with Tailwind UI or Material UI components.
- Implement **drag-and-drop reordering** of columns.

---


---

## Author

Created by **AYAZ** — feel free to use, adapt, and extend this project.
