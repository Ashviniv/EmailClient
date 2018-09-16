import React from "react";
import { shallow } from "../../enzyme.js";
import { EmailList } from "../emailList.js";

const emailList = [
  {
    title: "monit alert -- Exists delayed_job",
    id: 1,
    body: <h6>monit alert -- Exists delayed_job</h6>
  },
  {
    title: "monit alert -- Exists delayed_job 2",
    id: 2,
    body: <h6>monit alert -- Exists delayed_job 2</h6>
  },
  {
    title: "monit alert -- Exists delayed_job 3",
    id: 3,
    body: "<h1>monit alert -- Exists delayed_job 3</h1>"
  },
  {
    title: "monit alert -- Exists delayed_job 4",
    id: 4,
    body: "<h1>monit alert -- Exists delayed_job 4</h1>"
  }
];

const onClickRow = jest.fn()

describe("<EmailList />", () => {
  it("Must render emailList component", () => {

    const component = shallow(<EmailList
      emails={emailList}
      onClickRow={onClickRow}
    />)

    expect(component).toMatchSnapshot()
  })
})