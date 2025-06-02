import styled from "styled-components";

export const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 15px;
  position: relative;
  height: ${(props) => (props.viewMode === "list" ? "80px" : "300px")};
  display: ${(props) => (props.viewMode === "list" ? "flex" : "block")};
  align-items: ${(props) => (props.viewMode === "list" ? "center" : "normal")};
  gap: ${(props) => (props.viewMode === "list" ? "15px" : "0")};

  /* Animation on mount */
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.4s ease-out forwards;

  /* Hover effect */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

   @media (max-width: 950px) {
   display: ${(props) => (props.viewMode === "list" ? "flex" : "block")};
    width: ${(props) => (props.viewMode === "list" ? "400px" : "300px")};
    heigth:90vh;
    padding: 15px;
    gap:5px;
  }
 @media (min-width: 769px) and (max-width: 850px) {
    width: ${(props) => (props.viewMode === "list" ? "600px" : "800px")};
    
    margin-bottom: 15px;
  }

  @media (min-width: 500px) and (max-width: 768px) {
    width: ${(props) => (props.viewMode === "list" ? "700px" : "300px")};
    margin-bottom: 15px;
  }

    @media (min-width: 401px) and (max-width: 499px) {
    width: ${(props) => (props.viewMode === "list" ? "350px" : "300px")};
    padding: 15px;
  }
    @media (min-width: 300px) and (max-width: 400px) {
    width: ${(props) => (props.viewMode === "list" ? "250px" : "250px")};
    padding: 10px;
    
  }
`;

export const Image = styled.div`
  width: ${(props) => (props.viewMode === "grid" ? "100%" : "100px")};
  height: ${(props) => (props.viewMode === "grid" ? "150px" : "70px")};
  background-color: #ccc; /* Placeholder for image */
  border-radius: 6px;
  background-image: ${(props) =>
    props.imageUrl ? `url(${props.imageUrl})` : "none"};
  background-size: cover;
  background-position: center;
  margin-bottom:  ${(props) => (props.viewMode === "grid" ? "10px" : "0px")};

  // /* Mobile View */
  // @media (max-width: 768px) {
  //   height: 120px; /* Smaller image height */
  //   width: 100%; /* Full width in mobile */
  // }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  color: #ff4d4f;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #ff4d4f;
    color: #fff;
    transform: scale(1.1);
  }

  /* Mobile View */
  @media (max-width: 768px) {
    font-size: 18px;
    top: 8px;
    right: 8px;
  }
`;

export const NewsContent = styled.div`
  flex: 1;
  padding: 15px;

  /* Mobile View */
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const NewsDescription = styled.div`
  font-size: 14px;
  color: #444;
  display: -webkit-box;
  -webkit-line-clamp:${(props) => (props.viewMode === "list" ? "1" : "2")};/* Number of lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  /* Mobile View */
  @media (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 8px;
  }

  @media (min-width: 401px) and (max-width: 600px) {
   display: ${(props) => (props.viewMode === "grid" ? "block" : "none")};
  }
  @media (min-width: 300px) and (max-width: 400px) {
   display: ${(props) => (props.viewMode === "grid" ? "block" : "none")};
  }
`;

export const NewsTitle = styled.h2`
  font-size: 14px;
  margin: 0 0 0 0;
  color: #333;

  /* Mobile View */
  @media (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 8px;
    display: -webkit-box;
  -webkit-line-clamp:${(props) => (props.viewMode === "list" ? "1" : "1")};/* Number of lines */
  // -webkit-box-orient: vertical;
 
  }

  @media (min-width: 300px) and (max-width: 400px) {
   font-size:10px;
  }
`;

export const NewsDate = styled.p`
  font-size: 12px;
  color: #666;
  margin-bottom:10px;

  /* Mobile View */
  @media (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 8px;
  }
 
  @media (min-width: 300px) and (max-width: 400px) {
    font-size: 9px;
    margin-bottom: 8px;
    
  }
`;

export const Icon = styled.span`
 
  font-size: 12px;
  margin-right: 5px;

  /* Mobile View */
  @media (max-width: 768px) {
    font-size: 12px;
    margin-right: 4px;
  }
`;

//modal-design
export const ModalContent = styled.div`
  margin-top: 15px;
  font-size: 15px;
  line-height: 1.6;
  color: #333;

  /* Mobile View */
  @media (max-width: 768px) {
    font-size: 13px;
    margin: 8px 0;
  }
`;

export const Author = styled.p`
  margin-top: 20px;
  font-size: 13px;
  font-style: italic;
  color: #555;

  /* Mobile View */
  @media (max-width: 768px) {
    font-size: 12px;
    margin: 4px 0;
  }
  
  @media (min-width: 401px) and (max-width: 600px) {
   display:none;
    
  }
  @media (min-width: 300px) and (max-width: 400px) {
   display:none;
    
  }
`;

export const Source = styled.p`
  margin-top: 5px;
  font-size: 13px;
  color: #777;

  /* Mobile View */
  @media (max-width: 768px) {
    font-size: 12px;
    margin: 4px 0;
  }
    @media (min-width: 401px) and (max-width: 600px) {
   display:none;
    
  }
  @media (min-width: 300px) and (max-width: 400px) {
   display:none;
    
  }

`;

