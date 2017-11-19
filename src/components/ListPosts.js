import React from 'react';
import PropTypes from 'prop-types';
import PostItem from './PostItem';

const ListPosts = ({ posts }) => (
  <div>
    {posts && posts.map(post => (<PostItem key={post.id} post={post} />))}
  </div>
);

ListPosts.propTypes = {
  posts: PropTypes.array.isRequired,
};


export default ListPosts;
