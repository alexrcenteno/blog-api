export function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form>
        <div>
          Title: <input type="text" />
        </div>
        <div>
          Author: <input type="text" />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}
