import styled from "styled-components";
import spinner from "../assets/spinner.svg";

const LaderContainer = styled.div`
  height: calc(100vh - 12rem);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SpinnerIage = styled.img`
  width: 5rem;
`;

export default function Loader() {
  return (
    <LaderContainer>
      <SpinnerIage src={spinner} alt="spinner" />
    </LaderContainer>
  );
}
