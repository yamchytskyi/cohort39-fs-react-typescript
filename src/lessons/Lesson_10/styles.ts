import styled from "@emotion/styled";

export const Lesson10Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 30px;
  margin: 40px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const InputButtonControl = styled.div`
  display: flex;
  width: 600px;
  gap: 30px;
`;

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 50px;
  width: 430px;
  border: 1px solid black;
  
  border-radius: 8px;
  padding: 10px;
  gap: 7px;
  box-shadow: 10px 5px 5px black;
  background-color: ivory;
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
`;

export const BoldText = styled.p`
font-weight: bold;
`;