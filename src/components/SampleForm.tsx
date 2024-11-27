import {
  FormDatePicker,
  FormikInit,
  RadioGroupInput,
  SelectInputField,
  TextInputField,
} from "./form";
import * as Yup from "yup";
import { postData } from "../services/apiService"; //Import the service

const schema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  gender: Yup.string(),
  dob: Yup.date().required(),
  hasDisability: Yup.string().required(),
});

const handleSubmit = async (formData: any) => {
  console.log("form data>>>", formData);
  try {
    const response = await postData("/groups", formData);
    // setMessage('Data submitted successfully!');
    console.log("Response:", response);
  } catch (error) {
    // setMessage('Failed to submit data.');
  }
};

export const SampleForm = () => {
  return (
    <FormikInit
      onSubmit={(values: any) => handleSubmit(values)}
      initialValues={{
        id: "",
        firstName: "",
        lastName: "",
        gender: "",
        dob: "",
        hasDisability: "",
      }}
      validationSchema={schema}
    >
      <TextInputField name="firstName" id="first_name" label="First Name" />
      <TextInputField name="lastName" id="last_name" label="Last Name" />
      <SelectInputField
        name="gender"
        label="Gender"
        selectItems={[
          { label: "op1", value: "op1" },
          { label: "op2", value: "op2" },
          { label: "op3", value: "op3" },
          { label: "MALE", value: "M" },
          { label: "FEMALE", value: "F" },
        ]}
      />
      <FormDatePicker name="dob" label="Date of birth" />
      <RadioGroupInput
        label="Has Disability"
        name="hasDisability"
        options={[
          { label: "YES", value: "YES" },
          { label: "NO", value: "No" },
        ]}
      />
    </FormikInit>
  );
};
//isPlatform
