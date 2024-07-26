import { render } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "./mocks/RestrauntListData.json";
import { act } from "react-dom/test-utils";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => MOCK_DATA,
  });
});

it("should load the body component", async () => {
  await act(() => render(<Body />));
});
