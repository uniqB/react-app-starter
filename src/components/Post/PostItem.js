import React from 'react';
import PropTypes from 'prop-types';

const PostItem = ({ post }) => (
  <div>
    <h5>{post.title}</h5>
    <p>{post.content}</p>
  </div>
);

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
};


export default PostItem;
