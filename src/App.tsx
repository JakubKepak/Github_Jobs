import React, { useState } from "react";
import styled, {
  createGlobalStyle,
  DefaultTheme,
  ThemeProvider,
} from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import Header from "./components/Header/Header";
import JobDetail from "./components/JobDetail/JobDetail";

import JobsListingsContainer from "./components/JobListingContainer/JobListingContainer";

import { lightTheme, darkTheme } from "./themes";

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.colors.backgroundColor};
    font-family: 'Kumbh Sans', sans-serif;
  }

  a, a:visited {
    text-decoration: none;
    color: inherit;
    font-family: inherit;
  }

  input{
    border: none;
    color: inherit;
    font-family: inherit;

    &:focus{
      outline: none;
    }

    &::placeholder {
      color: inherit;
      font-family: inherit;
    }
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  margin-top: -2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const App: React.FC<{}> = () => {
  const [theme, setTheme] = useState<DefaultTheme>(lightTheme);

  const toggleThemes = (isDarkTheme: boolean): void => {
    isDarkTheme ? setTheme(darkTheme) : setTheme(lightTheme);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header toggleThemes={toggleThemes} />
        <Switch>
          <ContentContainer>
            <Route exact path="/">
              <JobsListingsContainer />
            </Route>
            <Route path="/:id">
              <JobDetail />
            </Route>
          </ContentContainer>
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default App;
