import React from "react";
import TableComponent from "./Table/Table";

const SampleTable: React.FC = () => {
  const columns = [
    { key: "name", label: "Name" },
    { key: "reason", label: "Reason Suggested" },
    { key: "owner", label: "Owner" },
    { key: "location", label: "Location" },
  ];

  const rows = [
    {
      name: "COSMO DHD 2024 Timesheet.xlsx",
      reason: "You edited • 19 Nov 2024",
      owner: "michecemenda@gmail.com",
      location: "Shared with...",
    },
    {
      name: "Loan Application for Winter Farming Irrigation",
      reason: "You opened • 12 Nov 2024",
      owner: "me",
      location: "My Drive",
    },
    // Add more rows as needed
  ];

  return <TableComponent columns={columns} rows={rows} />;
};

export default SampleTable;
