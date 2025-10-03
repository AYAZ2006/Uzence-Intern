import { useState } from "react";
import { InputField } from "./components/InputField/InputField";
import { DataTable } from "./components/DataTable/DataTable";
import type { Column } from "./components/DataTable/DataTable";
import "./App.css";

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

const sampleData: User[] = [
  { id: 1, name: "Alice", email: "alice@example.com", age: 25 },
  { id: 2, name: "Bob", email: "bob@example.com", age: 30 },
  { id: 3, name: "Charlie", email: "charlie@example.com", age: 28 },
];

const columns: Column<User>[] = [
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "email", title: "Email", dataIndex: "email", sortable: false },
  { key: "age", title: "Age", dataIndex: "age", sortable: true },
];

export default function App() {
  const [selectedRows, setSelectedRows] = useState<User[]>([]);
  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Component Testing</h1>
      <section className="bg-white p-4 rounded shadow">
        <InputField />
      </section>
      <section className="bg-white p-4 rounded shadow">
        <DataTable data={sampleData} columns={columns} onRowSelect={setSelectedRows} selectable />
      </section>
      <section className="bg-white p-4 rounded shadow">
        <h2 className="font-medium text-lg">Selected Rows:</h2>
        <pre className="bg-gray-100 p-2 rounded">{JSON.stringify(selectedRows, null, 2)}</pre>
      </section>
    </div>
  );
}
