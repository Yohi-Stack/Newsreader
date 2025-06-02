import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  text-align: center;
  margin: 20px 0;
`;

export const Heading = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const ToggleWrapper = styled.div`
  display: flex;
  border-radius: 12px;
  overflow: hidden;
  width: fit-content;
  margin: 0 auto;
  background: #f1f4f9;
`;

export const ToggleButton = styled.button`
  padding: 10px 24px;
  font-size: 24px;
  background: ${({ active }) => (active ? '#5eddc8' : '#c4c8cb')};
  color: ${({ active }) => (active ? '#000' : '#777')};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s ease;

  @media (max-width: 768px) {
    padding: 6px 10px;
  }
`;


export const FeedbackButton = styled.button`
  background-color: ${(props) => (props.active ? "#FFAFAF" : "#5eddc8")};
  color: white;
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.active ? "#5eddc8" : "#FFAFAF")};
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 0.9rem;
  }
`;
