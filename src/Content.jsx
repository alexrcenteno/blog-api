import axios from "axios";
import { useState, useEffect } from "react";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { Modal } from "./Modal";
import { PostsShow } from "./PostsShow";
import { Signup } from "./Signup";
import { Login } from "./Login";

export function Content() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };

  const handleCreatePost = (params) => {
    axios.post("http://localhost:3000/posts.json", params).then((response) => {
      console.log(response.data);
      const newPost = response.data;
      setPosts([...posts, newPost]);
    });
  };

  const handleShowPost = (post) => {
    setIsPostsShowVisible(true);
    setCurrentPost(post);
  };

  const handleUpdatePost = (id, params) => {
    axios.patch(`http://localhost:3000/posts/${id}.json`, params).then((response) => {
      const updatedPost = response.data;
      setPosts(
        posts.map((post) => {
          if (post.id === updatedPost.id) {
            return updatedPost;
          } else {
            return post;
          }
        })
      );
    });
  };

  const handleDestroyPost = (post) => {
    axios.delete(`http://localhost:3000/posts${post.id}.json`).then((response) => {
      console.log(response.data);
      setPosts(posts.filter((r) => r.id !== post.id));
      handleClose();
    });
  };

  const handleClose = () => {
    setIsPostsShowVisible(false);
  };

  useEffect(handleIndexPosts, []);

  return (
    <div>
      <div className="container"></div>
      <Login />
      <Signup />
      <PostsNew onCreatePost={handleCreatePost} />
      <PostsIndex posts={posts} onShowPost={handleShowPost} />
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <PostsShow
          post={currentPost}
          onUpdatePost={handleUpdatePost}
          onClose={handleClose}
          onDestroyClose={handleDestroyPost}
        />
      </Modal>
    </div>
  );
}
