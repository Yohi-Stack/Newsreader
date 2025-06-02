import styled from 'styled-components';

// Sidebar Container
export const SidebarContainer = styled.div`
  border-radius: 20px 35px 30px 35px;
  width: 250px;
  background-color: #EBF2F7;
  padding: 20px;
  border-right: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 95vh;
  z-index: 1000;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.03);

  /* Mobile View */
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    width: 100%;
    max-width: 300px;
    height: 100vh;
    z-index: 1200;
    transition: left 0.3s ease-in-out;
  }

    @media (min-width: 300px) and (max-width: 600px){
    position: fixed;
    top: 0;
    left: ${({ isOpen }) => (isOpen ? "0" : "-1000%")};
    width: 100%;
    max-width: 300px;
    height: 100vh;
    z-index: 1200;
    transition: left 0.3s ease-in-out;
  }
`;

// Close Button for Mobile
export const CloseButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 15px;
  color: #333;

  @media (max-width: 768px) {
    display: block;
  }
`;

// Profile section
export const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 10px 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

// Avatar styling
export const AvatarImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

// Profile text styling
export const ProfileText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Greeting = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const SubText = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

// Styled container blocks for cards like 'View Toggle' and 'Feedback'
export const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  text-align: center;
`;

export const Heading = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Icon = styled.span`
  font-size: 28px;
`;

export const ToggleIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;