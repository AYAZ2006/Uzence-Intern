import { useState, useMemo } from "react";

export interface Column<T> {
  key: string;
  title: string;
  dataIndex: keyof T;
  sortable?: boolean;
}

export interface DataTableProps<T extends { id: string | number }> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
}

export function DataTable<T extends { id: string | number }>({data,columns,loading = false,selectable = false,onRowSelect,}: DataTableProps<T>) {
  const [sortConfig, setSortConfig] = useState<{ key: keyof T | null; direction: "asc" | "desc" }>({key: null,direction: "asc",});
  const [selectedIds, setSelectedIds] = useState<Set<string | number>>(new Set());

  const sortedData = useMemo(() => {
    if (!sortConfig.key) return data;
    return [...data].sort((a, b) => {
      const aValue = a[sortConfig.key!];
      const bValue = b[sortConfig.key!];
      if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [data, sortConfig]);

  const toggleSort = (key: keyof T) =>
    setSortConfig((prev) => ({key,direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",}));

  const handleSelect = (row: T) => {
    const newSelected = new Set(selectedIds);
    newSelected.has(row.id) ? newSelected.delete(row.id) : newSelected.add(row.id);
    setSelectedIds(newSelected);
    onRowSelect?.(data.filter((d) => newSelected.has(d.id)));
  };

  const [loadingState, setLoadingState] = useState(loading);
  const [selectableState, setSelectableState] = useState(selectable);
  const [tableData, setTableData] = useState<T[]>(data);

  return (
    <div className="space-y-6">
      <div className="p-4 border rounded-xl shadow-lg bg-white max-w-full">
        <h2 className="font-bold text-lg text-gray-800 border-b pb-2">DataTable Controls</h2>
        <div className="flex flex-wrap gap-6 mt-4">
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-700 mb-1">Loading State</label>
            <select className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" value={loadingState ? "true" : "false"} onChange={(e) => setLoadingState(e.target.value === "true")}>
              <option value="false">Off</option>
              <option value="true">On</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-700 mb-1">Selectable Rows</label>
            <select className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" value={selectableState ? "true" : "false"} onChange={(e) => setSelectableState(e.target.value === "true")}>
              <option value="false">Off</option>
              <option value="true">On</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-700 mb-1">Table Data</label>
            <select className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" onChange={(e) => {if (e.target.value === "empty") setTableData([]);else setTableData(data);}}>
              <option value="full">Full Data</option>
              <option value="empty">Empty Table</option>
            </select>
          </div>
        </div>
      </div>
      <div className="w-full overflow-auto border rounded-lg shadow bg-white">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              {selectableState && <th className="px-4 py-2">Select</th>}
              {columns.map((col) => (
                <th key={col.key} className="px-4 py-2 text-left text-sm font-semibold text-gray-700 cursor-pointer hover:text-blue-500" onClick={() => col.sortable && toggleSort(col.dataIndex)}>
                  {col.title}
                  {col.sortable && sortConfig.key === col.dataIndex && (
                    <span className="ml-1 text-xs">{sortConfig.direction === "asc" ? "▲" : "▼"}</span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loadingState ? (
              <tr>
                <td colSpan={columns.length + (selectableState ? 1 : 0)} className="text-center py-6 text-gray-500">Loading...</td>
              </tr>
            ) : tableData.length === 0 ? (
              <tr>
                <td colSpan={columns.length + (selectableState ? 1 : 0)} className="text-center py-6 text-gray-500">No data available</td>
              </tr>
            ) : (
              sortedData.map((row) => (
                <tr key={row.id} className="border-t hover:bg-gray-50 transition-colors duration-200">
                  {selectableState && (
                    <td className="px-4 py-2">
                      <input type="checkbox" checked={selectedIds.has(row.id)} onChange={() => handleSelect(row)} className="cursor-pointer"/>
                    </td>
                  )}
                  {columns.map((col) => (
                    <td key={col.key} className="px-4 py-2 text-sm text-gray-700">
                      {String(row[col.dataIndex])}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
