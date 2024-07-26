import RestrauntCard from "../RestrauntCard";

import { screen, render } from "@testing-library/react";
import data from "./mocks/RestrauntCardMock.json";
import "@testing-library/jest-dom";
import { withPromoted } from '../RestrauntCard'

describe("", () => {
  it("should render", () => {
    render(<RestrauntCard data={data} />);
    const restrauntName = screen.getByText("La Pino'z Pizza");
    expect(restrauntName).toBeInTheDocument();
  });

  it("should render restrauntCard with promoted label and data", () => {
    const PromotedRestrauntCard = withPromoted(RestrauntCard);
    render(<PromotedRestrauntCard data={data} />);
    const promotedLabel = screen.getByText("Promoted");
    // const restrauntName = screen.getByText(data.RestrauntName);
    expect(promotedLabel).toBeInTheDocument();
    // expect(restrauntName).toBeInTheDocument();
  });
});
