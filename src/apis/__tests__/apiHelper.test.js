import { get, post } from "../apiHelper.js";
import fetch from "jest-fetch-mock";

describe("get", () => {
  it("Must return promise object on get API call", () => {

    fetch.mockRejectOnce("Failed to fetch");

    get("/session")
    .then((jsonResponse) => {
      expect(jsonResponse.data).toEqual({a: 1})
    }).catch(errorResponse => {
      expect(errorResponse).toEqual("Failed to fetch")
    })
  })
})