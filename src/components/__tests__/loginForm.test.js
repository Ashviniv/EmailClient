import React from "react";

import { shallow } from "../../enzyme.js";
import  LoginForm  from "../loginForm.js";

describe("<LoginForm />", () => {
  it("Must render loginForm component", () => {
    const component = shallow( <LoginForm />)

    expect(component).toMatchSnapshot();

    expect(component.find("Input[type='email']").length).toEqual(1)
    expect(component.find("Input[type='password']").length).toEqual(1);
    expect(component.find("Button").length).toEqual(1);
  })

  it("Must have email and password fields along with submit button")
  it("Must display validation error if empty email or password")
  it("Must display invalid format error if entered invalid email")
  it("Must login user if enetered correct email and password")
})