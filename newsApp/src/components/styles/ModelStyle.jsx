import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 20px;
`;

export const ModalCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  width: 90%;
  height:70vh;
  padding: 30px;
  max-height: 90vh;
  overflow-y: auto;
  z-index: 10000;

  /* Mobile View */
  @media (max-width: 768px) {
    width: 95%;
    max-height: 85vh;
    border-radius: 8px;
  }
`;

export const ModalCardImg=styled.img`
  width: 100%;
  height: 300px; /* or 50% */
  object-fit: cover;
  border-radius: 8px 8px 0 0;

  /* Mobile View */
  @media (max-width: 768px) {
    height: 150px;
  }
`