export function PostsDestroy(props) {
  const handleClick = () => {
    props.onDestroyPost(props.post);
  };

  return <button onClick={handleClick}>Destroy Post</button>;
}
