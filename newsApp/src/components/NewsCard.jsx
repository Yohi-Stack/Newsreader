import React from "react";
import styled from "styled-components";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ModalCard, ModalCardImg } from "./styles/ModelStyle";
import {
  Card,
  Image,
  CloseButton,
  NewsContent,
  NewsDescription,
  NewsTitle,
  NewsDate,
  Icon,
  ModalContent,
  Author,
  Source,
} from "./styles/NewsCardStyle";

const CardWrapper = styled.div`
  cursor: ${(props) => (props.clickable ? "pointer" : "default")};
`;

const NewsCard = ({ article, viewMode, onClose, onClick, isModal = false }) => {
  const CardComponent = isModal ? ModalCard : Card;
  const isMobile = window.innerWidth < 768;

  // Shorten description for non-modal view in mobile
  const shortDescription = isMobile && !isModal && article.description
    ? article.description.length > 100
      ? article.description.substring(0, 100) + "..."
      : article.description
    : article.description;

  return (
    <CardWrapper onClick={!isModal ? onClick : undefined} clickable={!isModal}>
      <CardComponent viewMode={viewMode}>
        {onClose && (
          <CloseButton
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
          >
            ✖
          </CloseButton>
        )}

        {article.urlToImage && isModal ? (
          <ModalCardImg src={article.urlToImage} alt="News" />
        ) : (
          <Image viewMode={viewMode} imageUrl={article.urlToImage} />
        )}

        <NewsContent>
          <NewsTitle>{article.title}</NewsTitle>
          <NewsDate>
            <Icon>
              <FontAwesomeIcon icon={faCalendarDays} />
            </Icon>
            {new Date(article.publishedAt).toLocaleString()}
          </NewsDate>
          <NewsDescription>{shortDescription}</NewsDescription>
          {isModal && (
            <>
              {article.content && (
                <ModalContent>{article.content}</ModalContent>
              )}
              {article.author && <Author>By {article.author}</Author>}
              {article.source?.name && (
                <Source>Source: {article.source.name}</Source>
              )}
            </>
          )}
          {isModal && article.url && (
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginTop: "15px",
                color: "#007BFF",
                fontSize: isMobile ? "13px" : "14px",
                display: "block",
                textDecoration: "underline",
              }}
            >
              Read full article →
            </a>
          )}
        </NewsContent>
      </CardComponent>
    </CardWrapper>
  );
};

export default NewsCard;