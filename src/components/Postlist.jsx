import React from "react";
import styled from "styled-components";
import Post from "./Post";

const List = styled.div`
  display: flex;
  flex-wrap:wrap;
  column-gap:8px;
  row-gap:16px;
  padding-left:300px;
  padding-right:304px;
  `;

const PostList = ({ posts }) => {
  return (
    <List>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </List>
  );
};

export default PostList;
