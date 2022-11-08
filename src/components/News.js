import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from "prop-types";

const News = (props) => {
  const defaultImgUrl =
    "https://staticg.sportskeeda.com/editor/2022/11/ecc10-16674388652001-1920.jpg";
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const totalResults = 9;

  const updateNews = async () => {
    setLoading(true);
    props.setProgress(10);
    //let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.token}&page=${page}&pageSize=15`;
    let url = `https://gnews.io/api/v4/top-headlines?&token=${props.token}&country=${props.country}&topic=${props.topic}&page=${page}&pageSize=${props.pageSize}&lang=${props.lang}`;
    let response = await fetch(url);
    props.setProgress(30);
    let data = await response.json();
    props.setProgress(60);
    setArticles(data.articles.slice(0, -1));
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${
      props.topic === "breaking-news"
        ? "Home"
        : props.topic === "world"
        ? "World"
        : props.topic
    } - PocketNews`;
    updateNews();
  }, []);

  // const fetchMoreData = async () => {
  //   let url = `https://gnews.io/api/v4/top-headlines?country=${
  //     props.country
  //   }&topic=${props.topic}&token=${props.token}&lang={props.lang}&page=${
  //     page + 1
  //   }&pageSize=${props.pageSize}`;
  //   let response = await fetch(url);
  //   let data = await response.json();
  //   setArticles(articles.concat(data.articles));
  //   setPage(page + 1);
  // };

  return (
    <>
      <h2 className="text-center" style={{ margin: "90px 0 30px" }}>
        Pocket News - top headlines
      </h2>

      <div className="container">
        {loading && <Spinner />}
        <div className="row">
          {articles.map((element) => {
            return (
              <div key={element.url} className="col-md-4">
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={
                    element.description
                      ? element.description.length > 140
                        ? element.description.slice(0, 140) + "..."
                        : element.description
                      : ""
                  }
                  imageUrl={element.image ? element.image : defaultImgUrl}
                  newsUrl={element.url}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 3,
  category: "general",
  page: 1,
  totalResults: 0,
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  page: PropTypes.number,
  category: PropTypes.string,
};

export default News;
