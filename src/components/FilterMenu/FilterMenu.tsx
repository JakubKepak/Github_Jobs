import React, { useState } from "react";
import * as S from "./Styles";

import Button from "../UI/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faMapMarkerAlt,
  faFilter,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

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
    setSearchBarValue("");
    setFilterLocationValue("");
  };

  return (
    <>
      <S.MainContainer>
        <S.SearchBarContainer>
          <S.IconContainer>
            <FontAwesomeIcon icon={faSearch} />
          </S.IconContainer>
          <S.InputField
            placeholder="Filter by title, companies, expertise..."
            value={searchBarValue}
            onChange={(e) => {
              setSearchBarValue(e.target.value);
            }}
          />
        </S.SearchBarContainer>
        <S.FilterLocationContainer>
          <S.IconContainer>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </S.IconContainer>
          <S.InputField
            placeholder="Filter by location"
            onChange={(e) => {
              setFilterLocationValue(e.target.value);
            }}
          />
        </S.FilterLocationContainer>
        <S.FullTimeToggleContainer>
          <S.CheckBoxContainer>
            <input
              type="checkbox"
              defaultChecked={fullTimeOnly}
              onChange={() => {
                setFullTimeOnly(!fullTimeOnly);
              }}
            />
            <span></span>
          </S.CheckBoxContainer>
          <span>Full time</span>
        </S.FullTimeToggleContainer>
        <S.FilterButtonContainer>
          <FontAwesomeIcon
            icon={faFilter}
            onClick={() => {
              setFilterModalOpened(true);
            }}
          />
        </S.FilterButtonContainer>
        <S.SearchButtonContainer>
          <S.ButtonContainerSearchLarge>
            <Button variant="primary" onClick={triggerSearch}>
              Search
            </Button>
          </S.ButtonContainerSearchLarge>
          <S.ButtonContainerSearchSmall>
            <Button variant="primary" onClick={triggerSearch} size="small">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </S.ButtonContainerSearchSmall>
        </S.SearchButtonContainer>
      </S.MainContainer>
      {filterModalOpened && (
        <S.FilterModalContainer>
          <S.FilterModalContainerInner>
            <S.CloseButton>
              <FontAwesomeIcon
                icon={faTimes}
                onClick={() => {
                  setFilterModalOpened(false);
                }}
              />
            </S.CloseButton>
            <S.FilterLocationContainerModal>
              <S.IconContainer>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </S.IconContainer>
              <S.InputField
                placeholder="Filter by location"
                onChange={(e) => {
                  setFilterLocationValue(e.target.value);
                }}
              />
            </S.FilterLocationContainerModal>
            <S.FullTimeToggleContainerModal>
              <S.CheckBoxContainer>
                <input
                  type="checkbox"
                  defaultChecked={fullTimeOnly}
                  onChange={() => {
                    setFullTimeOnly(!fullTimeOnly);
                  }}
                />
                <span></span>
              </S.CheckBoxContainer>
              <span>Full time only</span>
            </S.FullTimeToggleContainerModal>
            <Button variant="primary" onClick={triggerSearch} size="max-width">
              Search
            </Button>
          </S.FilterModalContainerInner>
        </S.FilterModalContainer>
      )}
    </>
  );
};

export default FilterMenu;
