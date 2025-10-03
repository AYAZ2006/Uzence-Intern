import type { Meta, StoryObj } from "@storybook/react";
import { DataTable } from "./DataTable";
import type { DataTableProps,Column } from "./DataTable";

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
  { key: "age", title: "Age", dataIndex: "age", sortable: true }
];


const meta: Meta<DataTableProps<User>> = {
  title: "Components/DataTable",
  component: DataTable,
};
export default meta;

type Story = StoryObj<DataTableProps<User>>;

export const Default: Story = { args: { data: sampleData, columns } };

export const Loading: Story = { args: { data: [], columns, loading: true } };

export const Empty: Story = { args: { data: [], columns } };

export const Selectable: Story = {
  args: {
    data: sampleData,
    columns,
    selectable: true,
    onRowSelect: (rows) => console.log("Selected:", rows),
  },
};
