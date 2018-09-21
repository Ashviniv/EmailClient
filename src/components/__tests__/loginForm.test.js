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

  it("Must have email and password fields along with submit button", () => {
  })

  it("Must display validation error if empty email", () => {
    const handleLoginUser = jest.fn();
    const component = shallow(<LoginForm handleLoginUser={handleLoginUser} />);

    component
      .find("Input[type='email']")
      .simulate("change", { target: { value: "", name: "email" } });

    expect(component.state("errors")).toEqual({
      email: "Must enter an email address.",
      password: ""
    });
  })

  it("Must display invalid format error if entered invalid email", () => {
    const handleLoginUser = jest.fn();
    const component = shallow(<LoginForm handleLoginUser={handleLoginUser} />);

    component
       .find("Input[type='email']")
       .simulate("change", { target: { value: "test", name: "email" } });

    expect(component.state("errors")).toEqual({
      email: "Must enter a valid email address.",
      password: ""
    });
  })

  it.only("Must login user if enetered correct email and password", () => {
    const handleLoginUser = jest.fn();
    const component = shallow(<LoginForm handleLoginUser={handleLoginUser} />);

    component
      .find("Form")
      .simulate("submit", { preventDefault: jest.fn() });

    expect(handleLoginUser).not.toBeCalledWith()
  })
})