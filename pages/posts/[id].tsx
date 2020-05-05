import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import { withRedux } from '../../store/redux';
import { singlePost } from '../../store/actions/posts.actions';
import {
  singleBodyData,
  singleTitleData,
} from '../../store/selectors/posts.selectors';

import Layout from '../../components/Layout';
import PostListItem from "../../components/PostListItem";
import Head from "next/dist/next-server/lib/head";

const SinglePost: React.FC = () => {
  const title = useSelector(singleTitleData);
  const body = useSelector(singleBodyData);
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(singlePost(id));
  }, []);
  return (
    <>
      <Head>
        <title>Blog App by Pahynov M.</title>
        <meta title={title} />
        <meta
            name="description"
            content={body}
        />
      </Head>
      <Layout>
        <PostListItem title={title} body={body} />
      </Layout>
    </>
  );
};

// @ts-ignore
SinglePost.getInitialProps = ({ reduxStore }) => {
  // @ts-ignore
  const { dispatch } = reduxStore;
  return {};
};

export default withRedux(SinglePost);
