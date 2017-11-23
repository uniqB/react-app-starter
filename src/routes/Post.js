import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from 'actions/post';
import { ListPosts } from 'components/Post';
import { Loading, Error } from 'components/Common';

class Post extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    const { post } = this.props;
    if (post.loading) return <Loading />;
    if (post.error) return <Error error={post.error} />;
    return <ListPosts posts={post.listPosts} />;
  }
}

Post.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = ({ post }) => ({ post });
const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
