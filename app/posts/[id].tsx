"use client";

import { GetServerSideProps } from 'next';
import PostDetail from '../components/PostDetail';

type Post = {
  id: number;
  title: string;
  body: string;
};

type PostPageProps = {
  post: Post;
};

const PostPage = ({ post }: PostPageProps) => {
  return <PostDetail title={post.title} body={post.body} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string };

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post: Post = await res.json();

  return {
    props: {
      post,
    },
  };
};

export default PostPage;
