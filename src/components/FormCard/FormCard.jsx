import { useState } from "react";
import { useInput } from "../../hooks";
import { Card, Input, Modal, Button, Form } from "../UI";

// DEMO: How to work with different UI components and hooks, you can delete this component if you wish.

const FormCard = () => {
  const [nameProps, nameValid, resetName] = useInput("", (value) => value.length > 2);
  const [emailProps, emailValid, resetEmail] = useInput("", (value) => value.includes("@"));
  const [passwordProps, passwordValid, resetPassword] = useInput("", (value) => value.length > 7);
  const [formData, setFormData] = useState({});
  const [showSubmitData, setShowSubmitData] = useState(false);

  let isFormValid = false;
  if (nameValid.valueIsValid && emailValid.valueIsValid && passwordValid.valueIsValid) {
    isFormValid = true;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();

    setFormData({
      name: nameProps.value,
      email: emailProps.value,
      password: passwordProps.value,
    });
    setShowSubmitData(true);

    resetName();
    resetEmail();
    resetPassword();
  };
  return (
    <Card variant="light">
      {showSubmitData && (
        <Modal onClick={() => setShowSubmitData(false)}>
          <Card variant="">
            <p>Name: {formData.name}</p>
            <p>Email: {formData.email}</p>
            <p>Password: {formData.password}</p>
          </Card>
        </Modal>
      )}
      <Form onSubmit={formSubmitHandler}>
        <Input label="Name" isInValid={nameValid.inputIsInvalid} input={{ id: "fName", type: "text", ...nameProps }} />
        <Input label="Email" isInValid={emailValid.inputIsInvalid} input={{ id: "email", type: "email", ...emailProps }} />
        <Input label="Password" isInValid={passwordValid.inputIsInvalid} input={{ id: "password", type: "password", ...passwordProps }} />
        <Button variant="secondary" type="submit" disabled={!isFormValid}>
          Submit
        </Button>
      </Form>
    </Card>
  );
};

export default FormCard;
