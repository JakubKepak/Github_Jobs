import styled from "styled-components";

export const MainContainer = styled.div`
  width: 80%;
  max-width: 1440px;
  min-height: calc(100vh - 8rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

export const ContentContainer = styled.div`
  width: 100%;
  margin-top: 6rem;
  margin-bottom: 2rem;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 350px));
  grid-gap: 2rem;
  justify-content: center;
`;

// export const ButtonContainer = styled.button``;
