import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PostsDestroy } from "./PostsDestroy";

export function PostsShowPage(props) {
  const [post, setPost] = useState({});
  const params = useParams();

  const handleShowPost = () => {
    axios.get(`http://localhost:3000/posts/${params.id}.json`).then((response) => {
      setPost(response.data);
    });
  };

  useEffect(handleShowPost, []);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>Body: {post.body}</p>
      <PostsDestroy onDestroyPost={props.onDestroyPost} post={props.post} />
    </div>
  );
}
