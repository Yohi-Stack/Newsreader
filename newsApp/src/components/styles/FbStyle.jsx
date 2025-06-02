import styled from "styled-components";

// Styled components for the FeedbackForm
export const FormContainer = styled.div`
  background-color: #ebf2f7;
  padding: 20px;
  border-radius: 8px;
  width: calc(100% - 750px); /* Full width minus sidebar width */
  max-width: 700px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  position: fixed;
  top: 0;
  left: 290px; /* Align with the right edge of the sidebar */
  height:100vh ;
  z-index: 1000;
  animation: slideIn 0.5s ease-in-out forwards;
  overflow-y: auto; /* Allow scrolling if content overflows */

  @keyframes slideIn {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
  }
  @media (max-width: 1050px) {
    width: 650px;
    padding: 15px;
    
  }
    @media (max-width: 950px) {
    width: 600px
    padding: 15px;
    
  }
     @media (max-width: 768px) {
    width: 450px;
    padding: 15px;
    left: 50px; 
  }

  @media (min-width: 401px) and (max-width: 500px) {
    width: 300px;
    left: 50px; 
    padding: 15px;
  }
     @media (min-width: 320px) and (max-width: 400px) {
    width: 250px;
    padding: 15px;
    left: 50px; 
  }
`;

export const FormTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0 0 5px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (min-width: 401px) and (max-width: 500px) {
    font-size: 12px;
  }
  @media (min-width: 320px) and (max-width: 400px) {
    font-size: 12px;
  }
`;

export const FormSubtitle = styled.p`
  font-size: 14px;
  color: #555;
  margin: 0 0 20px;
  text-align: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 15px;
  border: 1px solid #fff;
  border-radius: 4px;
  font-size: 14px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    outline: none;
    border-color: #00c4cc;
    box-shadow: 0 0 5px rgba(0, 196, 204, 0.2);
  }

  @media (min-width: 401px) and (max-width: 500px) {
    width: 95%;
  }
  @media (min-width: 320px) and (max-width: 400px) {
    width: 95%;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px 15px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 14px;
  resize: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    outline: none;
    border-color: #00c4cc;
    box-shadow: 0 0 5px rgba(0, 196, 204, 0.2);
  }

  @media (min-width: 401px) and (max-width: 500px) {
    width: 95%;
  }
  @media (min-width: 320px) and (max-width: 400px) {
    width: 95%;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  width: 95% 
  flex-direction: column;
  
  @media (min-width: 950px) and (max-width: 1024px) {
    display: flex;
    // flex-direction: column;
    width:90% 
  }

  @media (max-width: 900px) {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
    flex-direction: column;
  }
  @media (max-width: 500px) {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
    flex-direction: column;
  }
`;

export const MobileInput = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const InputRow = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;

  & > div {
    flex: 1;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #555;
  margin-bottom: 5px;
  display: block;
`;

export const ErrorMessage = styled.p`
  font-size: 12px;
  color: #ff4d4f;
  margin: 0 0 10px;
`;

export const SubmitButton = styled.button`
  width: 50%;
  background-color: #00c4cc;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #00b0b9;
  }

  &:disabled {
    background-color: #ebf2f7;
    cursor: not-allowed;
  }
`;
export const ButtonContainer = styled.button`
  display: flex;
  justify-content: end;
  width: 95%;
  border: none;
  background-color: #ebf2f7;
`;
export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #f5f5f5;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }
`;

export const InputWrapper = styled.div`
  margin-bottom: 10px;
  width: 90%;
`;

export const InputWrap = styled.div`
  margin-bottom: 10px;
  width: 95%;
`;
