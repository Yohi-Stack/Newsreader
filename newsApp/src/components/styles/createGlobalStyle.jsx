import styled from "styled-components";

// Styled components for the App
export const AppContainer = styled.div`
  display: flex;
  min-height: 95vh;
  background-color: #f0f4f8;
  overflow: hidden; 
`;

export const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  transition: filter 0.3s ease;
  filter: ${(props) => (props.blur ? "blur(5px)" : "none")};
  overflow: hidden;
  max-height: 95vh;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;

  ${({ blur }) => blur && `
    filter: blur(5px);
    pointer-events: none;
  `}
`;


export const ErrorMessage = styled.div`
  color: #ff4d4f;
  text-align: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const LoadMoreButton = styled.button`
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;