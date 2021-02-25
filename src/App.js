import React, { useState, useEffect } from "react";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";
import axios from "axios";

function App() {
  const [term, setTerm] = useState("");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const LastPost = currentPage * postsPerPage;
  const FirstPost = LastPost - postsPerPage;
  const currentPosts = posts.slice(FirstPost, LastPost);

  const switching = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="ui segment">
        <div className="ui form">
          <label className="ui header">Enter Text Here</label>
          <input
            className="input"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="ui celled list">
        <Posts posts={currentPosts} loading={loading} />
        <Pagination
          className="container"
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          switching={switching}
        />
      </div>
    </div>
  );
}

export default App;
