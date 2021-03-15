import { differenceBetweenDates, paramsToString } from "./helpers";

// TODO: write tests to helper functions
// differenceBetweenDates
test("difference is in hours", () => {
  expect(
    differenceBetweenDates((Date.now() - (Date.now() - 60000)).toString())
  ).toBe("foo");
});

// paramsToString
test("create a querystring from a payload object", () => {
  expect(
    paramsToString({ description: "React", location: "Brno", full_time: true })
  ).toBe("?description=React&location=Brno&full_time=true&");
});
