import { FC, useEffect } from "react";
import { useFormikField } from "../../hooks/UseFormikField";
import {
  IonItem,
  IonLabel,
  IonList,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";

type ISelectItem = { label: string | number; value: string | number };

type Prop = {
  name: string;
  label: string;
  width?: string;
  selectItems: Array<ISelectItem>;

  getValue?: (value: any) => void;
  size?: "small" | "medium";
};
export const SelectInputField: FC<Prop> = ({
  name,

  label,
  selectItems,
  getValue,
  size = "medium",
  width = "100%",
}) => {
  const { value, handleChange, hasError } = useFormikField(name);

  useEffect(() => {
    getValue && getValue(value);
  }, [value]);

  return (
    <IonList>
      <IonItem>
        <IonLabel>{label}</IonLabel>
        <IonSelect
          interface="popover"
          name={name}
          value={value}
          onIonChange={(e) => handleChange(e.detail.value)}
        >
          {selectItems.map((item) => (
            <IonSelectOption value={item.value}>{item.label}</IonSelectOption>
          ))}
        </IonSelect>
      </IonItem>
    </IonList>
  );
};
