import { useState, ChangeEvent, ReactNode } from "react";
import axios from "axios";
import { v4 } from "uuid";
import Modal from "components/Modal/Modal";
import Input from "components/Input/Input";
import Button from "components/Button/Button";

import { Lesson10Wrapper, StyledCard, CardsWrapper, BoldText } from "./styles";
import { University, FullUniversity } from "./types";

function Lesson_10() {
  const [searchInputCountry, setSearchInputCountry] = useState<string>("");
  const [error, setError] = useState<string | undefined>(undefined);
  const [universities, setUniversities] = useState<University[]>([]);
  const [isModalOpen, setisModalOpen] = useState<boolean>(false);

  const GET_UNIVERSITIES_URL: string = `http://universities.hipolabs.com/search?country=${searchInputCountry}`;

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInputCountry(event.target.value);
  };

  const openModal = () => {
    setisModalOpen(true);
  };
  const closeModal = () => {
    setisModalOpen(false);
  };

  const getUniversities = async () => {
    setError(undefined);
    setUniversities([]);
    try {
      const response = await axios.get(GET_UNIVERSITIES_URL);
      if (response.data.length === 0) {
        setError("Введите корректное значение для страны");
        openModal();
      }
      response.data.forEach((value: FullUniversity, index: number) => {
        if (index <= 14) {
          return setUniversities((prevValue) => [
            ...prevValue,
            {
              name: value.name,
              country: value.country,
              web_pages: value.web_pages,
            },
          ]);
        }
      });
    } catch (error: any) {
      setError("Some Network Error");
      openModal();
    }
  };

  const uniCards: ReactNode = universities.map((university: University) => {
    return (
      <StyledCard key={v4()}>
        <p>
          <BoldText>Name:</BoldText> {university.name}
        </p>
        <p>
          <BoldText>Country:</BoldText> {university.country}
        </p>
        <p>
          <BoldText>Web pages:</BoldText>
          {university.web_pages && (
            <a href={university.web_pages[0]}>{university.web_pages[0]}</a>
          )}
        </p>
      </StyledCard>
    );
  });

  return (
    <Lesson10Wrapper>
      <Input
        id="search-input"
        label="Country"
        name="Search"
        placeholder="Enter a country"
        value={searchInputCountry}
        onChange={onChange}
      />
      <Button name="Get Universities" onClick={getUniversities} />

      <CardsWrapper>
        {universities && <>{uniCards}</>}
        <Modal open={isModalOpen} onClose={closeModal}>
          {error && <p>{error}</p>}
        </Modal>
      </CardsWrapper>
    </Lesson10Wrapper>
  );
}

export default Lesson_10;
