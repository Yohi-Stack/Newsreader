import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NewsCard from "./NewsCard";
import { Overlay } from "./styles/ModelStyle";

const NewsContainer = styled.div`
  display: ${(props) => (props.viewMode === "grid" ? "grid" : "flex")};
  grid-template-columns: ${(props) =>
    props.viewMode === "grid"
      ? "repeat(auto-fill, minmax(250px, 1fr))"
      : "none"};
  flex-direction: ${(props) => (props.viewMode === "list" ? "column" : "row")};
  gap: 20px;

    @media (max-width: 768px) {
    padding:30px 0px 0px 30px;
    
  }
`;


const NewsList = ({ news, viewMode }) => {
  const [visibleNews, setVisibleNews] = useState(news);
  const [activeArticle, setActiveArticle] = useState(null);

  useEffect(() => {
    setVisibleNews(news); // Update visible news when the news prop changes
  }, [news]);

  useEffect(() => {
    document.body.style.overflow = activeArticle ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeArticle]);

  const handleClose = (index) => {
    setVisibleNews(visibleNews.filter((_, i) => i !== index));
  };

  return (
    <>
      <NewsContainer viewMode={viewMode}>
        {visibleNews.map((article, index) => (
          <NewsCard
            key={index}
            article={article}
            viewMode={viewMode}
            onClose={() => handleClose(index)}
            onClick={() => setActiveArticle(article)}
          />
        ))}
      </NewsContainer>

      {activeArticle && (
        <Overlay onClick={() => setActiveArticle(null)}>
          <div onClick={(e) => e.stopPropagation()}>
            <NewsCard
              article={activeArticle}
              viewMode="grid"
              onClose={() => setActiveArticle(null)}
              isModal
            />
          </div>
        </Overlay>
      )}
    </>
  );
};

export default NewsList;
