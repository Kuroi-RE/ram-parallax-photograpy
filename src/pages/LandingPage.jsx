import React from "react";
import Wrapper from "../components/Section";
import Button from "../components/Button";

function LandingPage() {
  return (
    <>
      <Wrapper>
        <h1>Testing</h1>
        <Button variant={"danger"}>Danger!</Button>
      </Wrapper>
      <Wrapper>
        <h1>Testing</h1>
      </Wrapper>
    </>
  );
}

export default LandingPage;
