import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const pageSize = 3,
    lang = "en";
  const token = process.env.REACT_APP_NEWS_API_KEY;
  const [progress, setProgress] = useState(0);

  // state = {
  //   progress: 0
  // }

  // setProgress = (progress) => {
  //   setState({progress : progress});
  // }

  return (
    <div>
      <Router>
        <LoadingBar color="#d5ceea" height={3} progress={progress} />
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                token={token}
                setProgress={setProgress}
                key="breaking-news"
                country="in"
                topic="breaking-news"
                pageSize={pageSize}
                lang={lang}
              />
            }
          />
          <Route
            exact
            path="/worldNews"
            element={
              <News
                token={token}
                setProgress={setProgress}
                key="general"
                country="in"
                topic="world"
                pageSize={pageSize}
                lang={lang}
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                token={token}
                setProgress={setProgress}
                key="business"
                country="in"
                topic="business"
                pageSize={pageSize}
                lang={lang}
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                token={token}
                setProgress={setProgress}
                key="sports"
                country="in"
                topic="sports"
                pageSize={pageSize}
                lang={lang}
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                token={token}
                setProgress={setProgress}
                key="health"
                country="in"
                topic="health"
                pageSize={pageSize}
                lang={lang}
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                token={token}
                setProgress={setProgress}
                key="technology"
                country="in"
                topic="technology"
                pageSize={pageSize}
                lang={lang}
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                token={token}
                setProgress={setProgress}
                key="entertainment"
                country="in"
                topic="entertainment"
                pageSize={pageSize}
                lang={lang}
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                token={token}
                setProgress={setProgress}
                key="science"
                country="in"
                topic="science"
                pageSize={pageSize}
                lang={lang}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
