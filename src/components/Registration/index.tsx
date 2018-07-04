import React, { Component, MouseEvent } from "react";
import RegistrationForm from "./registration_form";
import "./styles.scss";

const initialState = {
  formData: {
    email: "",
    password: "",
    name: "",
  },
};

type State = Readonly<typeof initialState>;

class RegistrationContainer extends Component<object, State> {

  readonly state: State = initialState;

  private setFormData = (fieldName: string, value: any): void => {
    this.setState((prevState: State) => ({
      ...prevState,
      formData: {
        ...prevState.formData,
        [fieldName]: value
      }
    }));
  }

  private handlePassword = (e: any): void => {
    const password = e.target.value;
    this.setFormData("password", password);
  }

  private handleEmail = (e: any): void => {
    const email = e.target.value;
    this.setFormData("email", email);
  }

  private handleName = (e: any): void => {
    const name = e.target.value;
    this.setFormData("name", name);
  }

  private submit = (e: MouseEvent<HTMLElement>): void => {
    e.preventDefault();
  }

  render() {
    return (
      <RegistrationForm
        formData={this.state.formData}
        handleEmail={this.handleEmail}
        handlePassword={this.handlePassword}
        handleName={this.handleName}
        submit={this.submit}
      />
    );
  }
}

export default RegistrationContainer;
