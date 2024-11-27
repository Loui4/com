import React, { FC, useEffect, useState } from "react";

import { IonInput, IonItem, IonDatetime, IonLabel, IonIcon } from "@ionic/react";
import { useFormikField } from "../../hooks/UseFormikField";
import { calendarOutline } from 'ionicons/icons';

type Prop = {
  id: string;
  name: string;
  width?: any;
  type?: "password" | "text" | "date" | "number";
  placeholder?: string;
  rows?: number;
  getValue?: (value: any) => void;
  size?: "small" | "medium";
  showHelperText?: boolean;
  disabled?: boolean;
  multiline?: boolean;
  unitOfMeasure?: string;
  inputIcon?: any;
  helperTextWidth?: string;
  handleBlurEvent?: (value: any) => void;
};

export const DateInputField: FC<Prop> = ({
  id,
  name,

  type,
  placeholder = "",
  size = "medium",
  rows,
  getValue,
  showHelperText = true,
  disabled = false,
  multiline = false,
  inputIcon,
  unitOfMeasure,
  helperTextWidth = "25ch",
  handleBlurEvent,
}) => {
  const { value, handleChange, hasError, errorMessage, handleBlur } =
    useFormikField(name);

    const [showPicker, setShowPicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');
  
    const handleDateChange = (e: any) => {
      setSelectedDate(e.detail.value); // Update selected date
      setShowPicker(false); // Hide picker
    };

  useEffect(() => {
    getValue && getValue(value);
  }, [value]);

  return (
    <>
      {/* <IonItem>
        <IonLabel>Date of Birth</IonLabel>
        <IonDatetime
          onBlur={handleBlur}
          name={name}
          onIonChange={handleChange}
          value={value}
        ></IonDatetime>
      </IonItem> */}

        <IonItem>
          <IonLabel position="floating">Select Date</IonLabel>
          <IonIcon slot="end" icon={calendarOutline} />
          <IonInput
            value={selectedDate}
            readonly
            onClick={() => setShowPicker(!showPicker)} // Toggle picker
            style={{ marginTop: "20px" }}
          />
          
        </IonItem>
        {showPicker && (
          <IonDatetime
            presentation="date"
            onIonChange={handleDateChange}
            value={selectedDate}
          />
        )}
    </>
  );
};
