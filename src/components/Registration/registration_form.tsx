import React, { SFC, MouseEvent } from "react";

type FormData = {
  name: string,
  email: string,
  password: string,
};

type Props = {
  formData: FormData,
  handleEmail(e: any): void,
  handlePassword(e: any): void,
  handleName(e: any): void,
  submit(e: MouseEvent<HTMLElement>): void,
};

const RegistrationForm: SFC<Props> = ({
  formData,
  handleEmail,
  handlePassword,
  handleName,
  submit,
}) => (
  <form className="registration-form">
    <div className="form-group">
      <label className="label">
        Name
      </label>
      <input
        className="form-input"
        type="text"
        value={formData.name}
        onChange={handleName}
      />
    </div>

    <div className="form-group">
      <label className="label">
        Email
      </label>
      <input
        className="form-input"
        type="text"
        value={formData.email}
        onChange={handleEmail}
      />
    </div>

    <div className="form-group">
      <label className="label">
        Password
      </label>
      <input
        className="form-input"
        type="password"
        value={formData.password}
        onChange={handlePassword}
      />
    </div>

    <div className="form-group">
      <a
        href="#"
        onClick={submit}
        className="submit-btn"
      >
        Sign Up
      </a>
    </div>
  </form>
);

export default RegistrationForm;
