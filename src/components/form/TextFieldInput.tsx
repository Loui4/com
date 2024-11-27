import React, { FC, useEffect } from "react";

import { IonInput, IonItem } from "@ionic/react";
import { useFormikField } from "../../hooks/UseFormikField";

type Prop = {
  id: string;
  name: string;
  label: string;
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

export const TextInputField: FC<Prop> = ({
  id,
  name,
  label,

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

  useEffect(() => {
    getValue && getValue(value);
  }, [value]);

  return (
    <>
      <IonItem>
        <IonInput
          onBlur={handleBlur}
          errorText={errorMessage}
          name={name}
          onIonInput={handleChange}
          value={value}
          label={label}
          labelPlacement="floating"
          placeholder={placeholder}
        ></IonInput>
      </IonItem>
    </>
  );
};
