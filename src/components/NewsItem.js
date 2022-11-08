import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, date, source } = props;
  return (
    <div className="card my-3">
      <img src={imageUrl} className="card-img-top" alt="..." style={{height: '280px'}}/>
      <div className="card-body">
        <h6 className="card-title">{title}</h6>
        <p className="card-text">{description}</p>
        <div className="d-flex justify-content-between">
          <p className="card-text">
            <small className="text-muted">{source}</small>
          </p>
          <p className="card-text">
            <small className="text-muted">
              {new Date(date).toGMTString().slice(0, -3)}
            </small>
          </p>
        </div>
        <div className="row mx-3">
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-primary"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
