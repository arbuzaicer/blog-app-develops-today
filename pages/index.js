import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

import { getPostSelector } from '../store/selectors/posts.selectors';
import { withRedux } from '../store/redux';
import { getPosts } from '../store/actions/posts.actions';

import Layout from '../components/Layout';
import PostListItem from '../components/PostListItem';
import Preloader from '../components/Preloader/Preloader';

import styled from 'styled-components';

const SingleLinkPost = styled.div`
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Posts = () => {
  const dispatch = useDispatch();
  const postsData = useSelector(getPostSelector);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      dispatch(getPosts());
      setIsDataLoaded(true);
    }, 2000);
  }, []);

  const posts = postsData
    .map((post) => (
      <SingleLinkPost key={post.id} >
        <Link href={`/posts/[id]`} as={`/posts/${post.id}`}>
          <a>
            <PostListItem title={post.title} body={post.body} />
          </a>
        </Link>
      </SingleLinkPost>
    ))
    .reverse();

  return (
    <div>
      <Head>
        <title>Blog App by Pahynov M.</title>
        <meta title="Recent posts page" />
        <meta
          name="description"
          content="Posts app example for Develops Today test assessment. Developed by Pashynov M."
        />
      </Head>
      {!isDataLoaded && <Preloader />}
      <Layout>{isDataLoaded && posts}</Layout>
    </div>
  );
};

Posts.getInitialProps = ({ reduxStore }) => {
  const { dispatch } = reduxStore;
  return {};
};

export default withRedux(Posts);
