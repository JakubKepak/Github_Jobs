import React, { useState } from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faMapMarkerAlt,
  faFilter,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

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

  @media (max-width: 580px) {
    width: 100%;
  }
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

  @media (max-width: 580px) {
    display: none;
  }
`;

const FilterLocationContainerModal = styled.div`
  background-color: inherit;
  width: 100%;
  padding-bottom: 1rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.secondaryLight};
  color: ${(props) => props.theme.colors.fontColorDark};

  & input {
    margin-right: 2rem;
  }

  & input::placeholder {
    color: ${(props) => props.theme.colors.fontColorLight};
  }
`;

const FullTimeToggleContainer = styled.div`
  width: 15%;
  border-left: 1px solid ${(props) => props.theme.colors.secondaryLight};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 580px) {
    display: none;
  }
`;

const FullTimeToggleContainerModal = styled.div`
  width: 100%;
  border-left: 1px solid ${(props) => props.theme.colors.secondaryLight};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 1rem 0;
  padding-left: 1.2rem;
  color: ${(props) => props.theme.colors.fontColorDark};
`;

const SearchButtonContainer = styled.div`
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
`;

const CheckBoxContainer = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-left: 10px;
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
    background-color: ${(props) => props.theme.colors.checkBoxBackground};
    border-radius: ${(props) => props.theme.borderRadius};
  }

  &:hover input ~ span {
    background-color: ${(props) => props.theme.colors.checkBoxBackgroundHover};
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

const ButtonContainerSearchSmall = styled.button`
  @media (min-width: 581px) {
    display: none;
  }
`;

const ButtonContainerSearchLarge = styled.button`
  @media (max-width: 580px) {
    display: none;
  }
`;

const FilterButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;

  @media (min-width: 581px) {
    display: none;
  }
`;

const FilterModalContainer = styled.div`
  z-index: 3000;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const FilterModalContainerInner = styled.div`
  z-index: 3500;
  width: 90%;
  max-width: 300px;
  padding: 1rem 0;
  background-color: ${(props) => props.theme.colors.backgroundColorItem};
  border-radius: ${(props) => props.theme.borderRadius};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ButtonContainerSearchModal = styled.button`
  width: 80%;
`;

const CloseButton = styled.div`
  z-index: 3600;
  position: absolute;
  right: 1rem;
  top: 1rem;
  color: ${(props) => props.theme.colors.primary};
`;

const FilterMenu: React.FC<{ setPayload: any }> = (props) => {
  const [searchBarValue, setSearchBarValue] = useState<string>("");
  const [filterLocationValue, setFilterLocationValue] = useState<string>("");
  const [fullTimeOnly, setFullTimeOnly] = useState<boolean>(false);
  const [filterModalOpened, setFilterModalOpened] = useState<boolean>(false);

  const triggerSearch = () => {
    setFilterModalOpened(false);
    props.setPayload({
      description: searchBarValue,
      location: filterLocationValue,
      full_time: fullTimeOnly,
    });
  };

  return (
    <>
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
          <span>Full time</span>
        </FullTimeToggleContainer>
        <FilterButtonContainer>
          <FontAwesomeIcon
            icon={faFilter}
            onClick={() => {
              setFilterModalOpened(true);
            }}
          />
        </FilterButtonContainer>
        <SearchButtonContainer>
          <ButtonContainerSearchLarge onClick={triggerSearch}>
            Search
          </ButtonContainerSearchLarge>
          <ButtonContainerSearchSmall onClick={triggerSearch}>
            <FontAwesomeIcon icon={faSearch} />
          </ButtonContainerSearchSmall>
        </SearchButtonContainer>
      </MainContainer>
      {filterModalOpened && (
        <FilterModalContainer>
          <FilterModalContainerInner>
            <CloseButton>
              <FontAwesomeIcon
                icon={faTimes}
                onClick={() => {
                  setFilterModalOpened(false);
                }}
              />
            </CloseButton>
            <FilterLocationContainerModal>
              <IconContainer>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </IconContainer>
              <InputField
                placeholder="Filter by location"
                onChange={(e) => {
                  setFilterLocationValue(e.target.value);
                }}
              />
            </FilterLocationContainerModal>
            <FullTimeToggleContainerModal>
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
            </FullTimeToggleContainerModal>
            <ButtonContainerSearchModal onClick={triggerSearch}>
              Search
            </ButtonContainerSearchModal>
          </FilterModalContainerInner>
        </FilterModalContainer>
      )}
    </>
  );
};

export default FilterMenu;
