export function PostsShow(props) {
  return (
    <div>
      <p>{props.currentPost.title}</p>
      <p>Body: {props.currentPost.body}</p>
    </div>
  );
}
