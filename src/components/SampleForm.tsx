import { FormikInit, SelectInputField, TextInputField } from "./form";
import * as Yup from "yup";

const schema = Yup.object().shape({
  name: Yup.string(),
  test: Yup.string(),
  data: Yup.string(),
});

export const SampleForm = () => {
  return (
    <FormikInit
      onSubmit={(values: any) => console.log({ values })}
      initialValues={{ name: "", test: "" }}
      validationSchema={schema}
    >
      <TextInputField name="name" id="name" label="Name" />
      <TextInputField name="test" id="test" label="Test" />
      <SelectInputField
        name="data"
        label="Test Data"
        selectItems={[
          { label: "op1", value: "op1" },
          { label: "op2", value: "op2" },
        ]}
      />
    </FormikInit>
  );
};
//isPlatform
