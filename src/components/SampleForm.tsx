import { DateInputField, FormikInit, RadioInputField, SelectInputField, TextInputField } from "./form";
import * as Yup from "yup";
import { postData } from '../services/apiService'; //Import the service
// import { useState } from "react";

// const [message, setMessage] = useState('');

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
    const response = await postData('/groups', formData);
    // setMessage('Data submitted successfully!');
    console.log('Response:', response);
  } catch (error) {
    // setMessage('Failed to submit data.');
  }
};

export const SampleForm = () => {
  return (
    <FormikInit
      onSubmit={(values: any) => handleSubmit(values)}
      initialValues={{ id: "", firstName: "", lastName: "", gender: "", dob: "", hasDisability: "" }}
      validationSchema={schema}
    >
      <TextInputField name="firstName" id="first_name" label="First Name" />
      <TextInputField name="lastName" id="last_name" label="Last Name" />
      <SelectInputField
        name="gender"
        label="Gender"
        selectItems={[
          { label: "MALE", value: "M" },
          { label: "FEMALE", value: "F" },
        ]}
      />
      <DateInputField name="dob" id="dob" />
      <RadioInputField name="hasDisability" id="hasDisability" label="Are you Disabled?" />
    </FormikInit>
  );
};
//isPlatform
