import React, { useState } from 'react';
import Head from 'next/head';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { withRedux } from '../../../store/redux';
import { createPost } from '../../../store/actions/posts.actions';

import Layout from '../../../components/Layout';

const FromWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    width: 700px;
    height: 35px;
    margin-bottom: 5px;
    padding: 5px;
  }
  .submit {
    width: 250px;
    border: none;
    border-radius: 5px;
    background: #407b7d;
    color: #fff;
    font-weight: 600;
    font-size: 1.3em;
  }
`;

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();

  const changeHandler = (e, setHook) => {
    setHook(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createPost(title, body));
    setTitle('');
    setBody('');
  };

  return (
    <div>
      <Head>
        <title>Add post</title>
        <meta title="Add new post" />
        <meta
          name="description"
          content="Here you can add a new post. Developed by Pashynov M."
        />
      </Head>
      <Layout>
        <FromWrapper>
          <input
            onChange={(e) => changeHandler(e, setTitle)}
            value={title}
            type="text"
            placeholder="Enter post title"
          />
          <input
            onChange={(e) => changeHandler(e, setBody)}
            value={body}
            type="text"
            placeholder="Enter post body"
          />
          <input
            onClick={submitHandler}
            className="submit"
            type="submit"
            value="Create post"
          />
        </FromWrapper>
      </Layout>
    </div>
  );
};

NewPost.getInitialProps = ({ reduxStore }) => {
  const { dispatch } = reduxStore;
  return {};
};

export default  withRedux(NewPost);
