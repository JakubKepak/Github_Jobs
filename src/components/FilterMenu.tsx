import React, { useState } from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const MainContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 4rem;
  color: ${(props) => props.theme.colors.fontColorLight};

  background-color: ${(props) => props.theme.colors.backgroundColorItem};
  border-radius: ${(props) => props.theme.borderRadius};

  display: flex;
`;

const SearchBarContainer = styled.div`
  width: 40%;
  border-radius: 5px 0 0 5px;
  background-color: inherit;
  display: flex;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 2rem;
  color: ${(props) => props.theme.colors.primary};
  font-size: 1.3rem;
`;

const InputField = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 5px 0 0 5px;
  background-color: inherit;
`;

const FilterLocationContainer = styled.div`
  background-color: inherit;
  width: 30%;
  display: flex;
  border-left: 1px solid ${(props) => props.theme.colors.secondaryLight};
`;

const FullTimeToggleContainer = styled.div`
  width: 15%;
  border-left: 1px solid ${(props) => props.theme.colors.secondaryLight};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchButtonContainer = styled.div`
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CheckBoxContainer = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  /* margin-bottom: 12px; */
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  & span {
    position: absolute;
    top: -10px;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #eee;
    border-radius: ${(props) => props.theme.borderRadius};
  }

  &:hover input ~ span {
    background-color: #ccc;
  }

  & input:checked ~ span {
    background-color: ${(props) => props.theme.colors.primary};
  }

  span:after {
    content: "";
    position: absolute;
    display: none;
  }

  & input:checked ~ span:after {
    display: block;
  }

  & span:after {
    left: 7px;
    top: 4px;
    width: 4px;
    height: 7px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

const ButtonContainer = styled.button``;

const FilterMenu: React.FC<{ setPayload: any }> = (props) => {
  const [searchBarValue, setSearchBarValue] = useState<string>("");
  const [filterLocationValue, setFilterLocationValue] = useState<string>("");
  const [fullTimeOnly, setFullTimeOnly] = useState<boolean>(false);

  const triggerSearch = () => {
    props.setPayload({
      description: searchBarValue,
      location: filterLocationValue,
      full_time: fullTimeOnly,
    });
  };

  return (
    <MainContainer>
      <SearchBarContainer>
        <IconContainer>
          <FontAwesomeIcon icon={faSearch} />
        </IconContainer>
        <InputField
          placeholder="Filter by title, companies, expertise..."
          value={searchBarValue}
          onChange={(e) => {
            setSearchBarValue(e.target.value);
          }}
        />
      </SearchBarContainer>
      <FilterLocationContainer>
        <IconContainer>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </IconContainer>
        <InputField
          placeholder="Filter by location"
          onChange={(e) => {
            setFilterLocationValue(e.target.value);
          }}
        />
      </FilterLocationContainer>
      <FullTimeToggleContainer>
        <CheckBoxContainer>
          <input
            type="checkbox"
            defaultChecked={fullTimeOnly}
            onChange={() => {
              setFullTimeOnly(!fullTimeOnly);
            }}
          />
          <span></span>
        </CheckBoxContainer>
        <span>Full time only</span>
      </FullTimeToggleContainer>
      <SearchButtonContainer>
        <ButtonContainer onClick={triggerSearch}>Search</ButtonContainer>
      </SearchButtonContainer>
    </MainContainer>
  );
};

export default FilterMenu;
