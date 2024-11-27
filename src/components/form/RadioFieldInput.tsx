import React, { FC, useEffect } from "react";

import { IonInput, IonItem, IonList, IonRadio, IonRadioGroup } from "@ionic/react";
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

export const RadioInputField: FC<Prop> = ({
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

    interface Radio {
        id: number;
        name: string;
    }

    const radioList: Radio[] = [
        {
          id: 1,
          name: 'Yes',
        },
        {
          id: 2,
          name: 'No',
        },
      ];

const compareWith = (o1: Radio, o2: Radio) => {
    return o1.id === o2.id;
};

  useEffect(() => {
    getValue && getValue(value);
  }, [value]);

  return (
    <>
        <IonList>
        <IonRadioGroup
            compareWith={compareWith}
            onIonChange={(ev) => console.log('Current value:', JSON.stringify(ev.detail.value))}
        >
            {radioList.map((item) => (
            <IonItem>
                <IonRadio key={item.id} value={item}>
                  {item.name}
                </IonRadio>
            </IonItem>
            ))}
        </IonRadioGroup>
        </IonList>
    </>
  );
};
