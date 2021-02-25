import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul>
      {posts.map((post) => (
        <div className="item" key={post.id}>
          <div className="content">
            <div className="header">
              <h4>Title :</h4> {post.title}
            </div>

            <div>
              <h4>Body :</h4> {post.body}
            </div>
            <br />
            <br />
          </div>
        </div>
      ))}
    </ul>
  );
};

export default Posts;
