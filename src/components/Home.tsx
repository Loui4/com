import { IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import { FormikInit, TextInputField } from "./form";

export const Home = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Header Toolbar</IonTitle>
        </IonToolbar>
      </IonHeader>

      <FormikInit
        onSubmit={(values: any) => console.log({ values })}
        initialValues={{ name: "", test: "" }}
        validationSchema={{}}
      >
        <TextInputField name="name" id="name" label="Name" />
        <TextInputField name="Test" id="test" label="Test" />
      </FormikInit>
    </>
  );
};
