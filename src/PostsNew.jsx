export function PostsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit - PostsNew");
    const params = new FormData(event.target);
    props.onCreatePost(params);
    event.target.reset();
  };

  return (
    <div id="posts-new">
      <h1>New post</h1>
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
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}
