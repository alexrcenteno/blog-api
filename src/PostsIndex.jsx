export function PostsIndex(props) {
  console.log(props.posts);
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      <div className="row">
        {props.posts.map((post) => {
          return (
            <div className="col-sm-6" key={post.id}>
              <div className="card" style={{ width: "18rem" }}>
                <img src={post.image_url} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">Chef: {post.chef}</p>
                  <a onClick={() => props.onShowpost(post)} className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
