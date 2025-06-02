import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRectangleList, faList, faTimes } from "@fortawesome/free-solid-svg-icons";
import { ToggleWrapper, ToggleButton, FeedbackButton } from "./styles/Toggle.jsx";
import {
  SidebarContainer,
  ProfileSection,
  AvatarImage,
  ProfileText,
  Greeting,
  SubText,
  Card,
  Heading,
  Icon,
  CloseButton,
} from "./styles/SidebarStyle.jsx";
import Img from "../images/Ellipse.jpg";

// Component
const Sidebar = ({ setShowFeedback, showFeedback, viewMode, setViewMode, isOpen, toggleSidebar }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      {/* Close Button for Mobile */}
      <CloseButton onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faTimes} />
      </CloseButton>

      <ProfileSection>
        <AvatarImage src={Img} alt="User Avatar" />
        <ProfileText>
          <Greeting>Hi Reader,</Greeting>
          <SubText>Here's your NEWS!</SubText>
        </ProfileText>
      </ProfileSection>

      {!showFeedback && (
        <Card>
          <Heading>View Toggle</Heading>
          <ToggleWrapper>
            <ToggleButton
              active={viewMode === "grid"}
              onClick={() => {
                setViewMode("grid");
                if (window.innerWidth < 768) toggleSidebar(); // Close sidebar on mobile
              }}
            >
              <Icon>
                <FontAwesomeIcon icon={faRectangleList} />
              </Icon>
            </ToggleButton>
            <ToggleButton
              active={viewMode === "list"}
              onClick={() => {
                setViewMode("list");
                if (window.innerWidth < 768) toggleSidebar(); // Close sidebar on mobile
              }}
            >
              <Icon>
                <FontAwesomeIcon icon={faList} />
              </Icon>
            </ToggleButton>
          </ToggleWrapper>
        </Card>
      )}

      <Card>
        <Heading>Have a Feedback?</Heading>
        <FeedbackButton
          onClick={() => {
            setShowFeedback(true);
            if (window.innerWidth < 768) toggleSidebar(); // Close sidebar on mobile
          }}
          active={showFeedback}
        >
          We're Listening!
        </FeedbackButton>
      </Card>
    </SidebarContainer>
  );
};

export default Sidebar;