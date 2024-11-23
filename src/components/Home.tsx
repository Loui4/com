import { IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import { FormikInit, TextInputField } from "./form";
import * as Yup from "yup";

const schema = Yup.object().shape({
  name: Yup.string(),
  test: Yup.string(),
});

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
        validationSchema={schema}
      >
        <TextInputField name="name" id="name" label="Name" />
        <TextInputField name="test" id="test" label="Test" />
      </FormikInit>
    </>
  );
};
