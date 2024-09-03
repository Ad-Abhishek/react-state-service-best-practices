import React, { useEffect, useState } from 'react';
import { PostService } from '../services/PostService';

const Posts = () => {
  const [state, setState] = useState({
    posts: [],
    loading: false,
    error: '',
  });

  useEffect(() => {
    const getPosts = async () => {
      try {
        setState({
          ...state,
          loading: true,
        });
        const { data } = await PostService.getPosts();
        const filteredPosts = data.filter((element, index) => index < 10);
        setState({
          ...state,
          loading: false,
          posts: filteredPosts,
        });
      } catch (error) {
        setState({
          ...state,
          error: error.message,
        });
      }
    };

    getPosts();
  }, []);

  const { posts, loading, error } = state;

  return (
    <>
      {loading && <>Loading...</>}
      {error && <>{error}</>}

      <table className="table table-striped table-bordered table-danger">
        <thead>
          <tr>
            {/* <th scope="col">#</th> */}
            <th scope="col">S.N</th>
            <th scope="col">Title</th>
            <th scope="col">Body</th>
          </tr>
        </thead>
        <tbody>
          {posts &&
            posts.map((post) => {
              return (
                <tr key={post.id}>
                  {/* <th scope="row">1</th> */}
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default Posts;
