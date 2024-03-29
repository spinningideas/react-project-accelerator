import { act, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Application from "Application";

test("renders get-started-message element", async () => {
  await act(async () =>
    render(
      <Router>
        <Application />
      </Router>
    )
  );

  const container = document.querySelector("#application-container");

  expect(container).toBeDefined();
});
