import React, { useState, useMemo } from "react";
import {
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
  IonIcon,
  IonCard,
  IonCardHeader,
  IonCardContent,
} from "@ionic/react";
import { documentTextOutline, peopleOutline } from "ionicons/icons";

interface Column {
  key: string;
  label: string;
}

interface TableProps {
  columns: Column[];
  rows: Array<Record<string, any>>;
  pageSize?: number;
}

const StyledTable: React.FC<TableProps> = ({ columns, rows, pageSize = 5 }) => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredRows = useMemo(
    () =>
      rows.filter((row) =>
        Object.values(row)
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase())
      ),
    [rows, search]
  );

  const paginatedRows = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredRows.slice(start, start + pageSize);
  }, [filteredRows, currentPage, pageSize]);

  const totalPages = Math.ceil(filteredRows.length / pageSize);

  return (
    <IonCard
      style={{ background: "#fff", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)" }}
    >
      <IonCardHeader>
        <IonInput
          value={search}
          onIonChange={(e) => setSearch(e.detail.value!)}
          placeholder="Search files"
          style={{
            marginBottom: "16px",
            padding: "12px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          }}
        />
      </IonCardHeader>
      <IonCardContent>
        <IonGrid>
          {/* Header Row */}
          <IonRow
            style={{
              background: "#f9f9f9",
              color: "#333",
              fontWeight: "bold",
              borderBottom: "1px solid #ddd",
            }}
          >
            {columns.map((col, index) => (
              <IonCol
                key={index}
                style={{ padding: "10px", fontSize: "14px", color: "#555" }}
              >
                {col.label}
              </IonCol>
            ))}
          </IonRow>

          {/* Data Rows */}
          {paginatedRows.map((row, rowIndex) => (
            <IonRow
              key={rowIndex}
              style={{
                background: rowIndex % 2 === 0 ? "#fff" : "#f6f6f6",
                color: "#333",
                borderBottom: "1px solid #ddd",
                alignItems: "center",
              }}
            >
              {columns.map((col, colIndex) => (
                <IonCol
                  key={colIndex}
                  style={{
                    padding: "10px",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "14px",
                    color: "#555",
                  }}
                >
                  {/* Add icons based on the key */}
                  {col.key === "name" && (
                    <IonIcon
                      icon={documentTextOutline}
                      style={{ marginRight: "8px", color: "#999" }}
                    />
                  )}
                  {col.key === "owner" && (
                    <IonIcon
                      icon={peopleOutline}
                      style={{ marginRight: "8px", color: "#999" }}
                    />
                  )}
                  {row[col.key]}
                </IonCol>
              ))}
            </IonRow>
          ))}

          {/* Pagination */}
          <IonRow
            style={{ justifyContent: "space-between", marginTop: "16px" }}
          >
            <IonCol size="auto">
              <IonInput
                value={`Page ${currentPage} of ${totalPages}`}
                readonly
                style={{
                  background: "#f9f9f9",
                  color: "#555",
                  borderRadius: "8px",
                  padding: "8px",
                  textAlign: "center",
                  border: "1px solid #ddd",
                }}
              />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  );
};

export default StyledTable;
