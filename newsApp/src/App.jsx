import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { createGlobalStyle } from "styled-components";
import { AppContainer, MainContent, ErrorMessage, LoadMoreButton } from './components/styles/createGlobalStyle.jsx';
import Sidebar from "./components/Sidebar";
import NewsList from "./components/NewsList";
import FeedbackForm from "./components/FeedbackForm";
import Pagination from "./components/Pagination";
import useIsMobile from './components/styles/NewsListStyle.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100vh;
    overflow: hidden;
    font-family: 'Arial', sans-serif;
    scrollbar-width: none; /* Firefox */
  }

  body::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }

  /* Hamburger Menu Styles */
  .hamburger {
    display: none;
    position: fixed;
    top: 15px;
    left: 15px;
    z-index: 1100;
    background-color: #fff;
    border-radius: 5px;
    padding: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;

    @media (max-width: 768px) {
      display: block;
    }
  }

  /* Adjust MainContent padding when sidebar is hidden on mobile */
  @media (max-width: 768px) {
    ${MainContent} {
      padding-left: 0;
      height: 100vh;
      overflow-y: auto;
    }
  }
`;

const App = () => {
  const [news, setNews] = useState([]);
  const [viewMode, setViewMode] = useState("grid");
  const [showFeedback, setShowFeedback] = useState(false);
  const [error, setError] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [visibleItemsCount, setVisibleItemsCount] = useState(0);
  const paginationRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const isMobile = useIsMobile();

  const itemsPerPage = viewMode === "list"
    ? 4
    : isMobile
      ? 4
      : 8;

  useEffect(() => {
    if (isMobile) {
      setVisibleItemsCount(itemsPerPage);
    }
  }, [isMobile, itemsPerPage]);

  useEffect(() => {
    if (isMobile) {
      setVisibleItemsCount(itemsPerPage);
    }
  }, [viewMode, isMobile, itemsPerPage]);

  const displayedNews = isMobile
    ? news.slice(0, visibleItemsCount)
    : news.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleLoadMore = () => {
    setVisibleItemsCount((prevCount) => prevCount + itemsPerPage);
  };

  useEffect(() => {
    if (paginationRef.current && !isMobile) {
      paginationRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [viewMode, isMobile]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= Math.ceil(news.length / itemsPerPage)) {
      setCurrentPage(page);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`/api/news`);
        console.log('News API response:', response.data);
        if (response.data.articles && response.data.articles.length > 0) {
          setNews(response.data.articles);
          setError(null);
        } else {
          setError("No news articles found for the given query.");
        }
      } catch (error) {
        console.error("Error fetching news:", error);
        setError("Failed to fetch news. Please try again later.");
        setNews([
          {
            title: "Tesla News Fallback 1",
            publishedAt: "2025-04-30T12:00:00Z",
            url: "#",
            urlToImage: null,
          },
          {
            title: "Tesla News Fallback 2",
            publishedAt: "2025-04-29T12:00:00Z",
            url: "#",
            urlToImage: null,
          },
        ]);
      }
    };
    fetchNews();
  }, []);

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <button className="hamburger" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={isSidebarOpen ? faTimes : faBars} size="lg" />
        </button>
        <Sidebar
          setShowFeedback={setShowFeedback}
          showFeedback={showFeedback}
          viewMode={viewMode}
          setViewMode={setViewMode}
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
        <MainContent blur={showFeedback || isSidebarOpen}>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <NewsList news={displayedNews} viewMode={viewMode} />
          {isMobile ? (
            visibleItemsCount < news.length && (
              <LoadMoreButton onClick={handleLoadMore}>
                Load More
              </LoadMoreButton>
            )
          ) : (
            <Pagination
              ref={paginationRef}
              currentPage={currentPage}
              totalPages={Math.ceil(news.length / itemsPerPage)}
              onPageChange={handlePageChange}
            />
          )}
        </MainContent>
        {showFeedback && (
          <FeedbackForm
            setShowFeedback={setShowFeedback}
            onClose={() => setShowFeedback(false)}
          />
        )}
      </AppContainer>
    </>
  );
};

export default App;