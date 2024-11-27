"use client";
import { FC, useEffect, useRef, useState } from "react";
import { IonPopover, IonDatetime, IonItem, IonInput } from "@ionic/react";
import { useFormikField } from "../../hooks/UseFormikField";

type Prop = {
  name: string;
  label: string;
  width?: string;
  placeholder?: string;
  getValue?: (value: any) => void;
  size?: "small" | "medium";
  disabled?: boolean;
};

export const FormDatePicker: FC<Prop> = ({
  name,
  label,
  width = "100%",
  getValue,
  disabled = false,
}) => {
  const { value, setFieldValue, initialValues, errorMessage } =
    useFormikField(name);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);
  const [popoverEvent, setPopoverEvent] = useState<Event | undefined>(
    undefined
  );

  const inputRef = useRef<HTMLIonInputElement>(null);

  useEffect(() => {
    if (value) {
      setSelectedDate(value); // Initialize with form value if available
    }
  }, [value]);

  useEffect(() => {
    if (getValue && selectedDate) {
      getValue(selectedDate);
    }
  }, [selectedDate]);

  let initialDate = "";

  if (typeof initialValues === "object" && initialValues !== null) {
    //@ts-ignore
    initialDate = initialValues[name] as string;
  }

  const handleDateChange = (e: any) => {
    const newDate = e.detail.value;
    setSelectedDate(newDate);
    setFieldValue(name, newDate);
    setIsPopoverOpen(false); // Close popover after selection
  };

  const openPopover = (event: Event) => {
    setPopoverEvent(event);
    setIsPopoverOpen(true);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", width }}>
      <label
        htmlFor={name}
        style={{
          marginBottom: "8px",
          fontSize: "0.76rem",
          color: "#6b7280", // Tailwind's `text-gray-500`
        }}
      >
        {label}
      </label>
      <IonItem
        lines="none"
        style={{
          backgroundColor: "white",
          borderRadius: "5px",
          marginBottom: "8px",
        }}
        onClick={(e: any) => openPopover(e)}
      >
        <IonInput
          ref={inputRef}
          value={selectedDate || ""}
          placeholder="Select a date"
          disabled={disabled}
          readonly // Prevent typing in the input
        />
      </IonItem>
      <IonPopover
        isOpen={isPopoverOpen}
        event={popoverEvent}
        onDidDismiss={() => setIsPopoverOpen(false)}
      >
        <IonDatetime
          value={selectedDate || initialDate}
          onIonChange={handleDateChange}
          presentation="date" // Use date presentation
        />
      </IonPopover>
      {errorMessage && (
        <span style={{ color: "red", fontSize: "12px", marginTop: "4px" }}>
          {errorMessage}
        </span>
      )}
    </div>
  );
};
