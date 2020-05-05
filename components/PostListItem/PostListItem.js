import React from 'react';
import styled from 'styled-components';

import DefaultImage from '../../assets/images/default-post-picture.jpg';

const PostWrapper = styled.div`
  h2 {
    font-weight: 600;
    padding: 10px 0 10px 20px;
    justify-content: flex-start;
  }
  height: 550px;
  width: 70vw;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  background: #ffffff;
  .post-img {
    text-align: center;
    img {
      height: 400px;
    }
  }
  .post-content {
    padding: 20px;
  }
`;

const PostListItem = ({ title, body }) => (
  <PostWrapper>
    <h2>{title}</h2>
    <div className="post-img">
      <img src={DefaultImage} alt="default image example" />
    </div>
    <div className="post-content">
      <p>{body}</p>
    </div>
  </PostWrapper>
);
export default PostListItem;
