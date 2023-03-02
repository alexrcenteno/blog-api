export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePost(props.post.id, params);
    props.onClose();
  };

  return (
    <div>
      <p>{props.currentPost.title}</p>
      <p>Body: {props.currentPost.body}</p>
      return (
      <div id="posts-update">
        <h1>Edit Post</h1>
        <form>
          <form onSubmit={handleSubmit}></form>
          <div>
            Title: <input name="title" type="text" />
          </div>
          <div>
            Image: <input name="image" type="text" />
          </div>
          <div>
            Body: <input name="body" type="text" />
          </div>
          <button type="submit">Update Post</button>
        </form>

        <PostsDestroy onDestroyPost={props.onDestroyPost} post={props.post} />
      </div>
      );
    </div>
  );
}
