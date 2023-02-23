function Header() {
  return (
    <header>
      <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
    </header>
  );
}

function PostsNew() {
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

function PostsIndex() {
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      <div className="posts">
        <h2>Code For Dummies</h2>
        <img src="https://pictures.abebooks.com/isbn/9781118951309-us.jpg" alt="" />
        <p>Author: Alex Centeno</p>
        <button>More Info</button>
      </div>
      <div className="Posts">
        <h2>NFL Draft</h2>
        <img src="https://pbs.twimg.com/profile_images/1611754721701773314/JKLJNXKU_400x400.jpg" alt="" />
        <p>Author: Jake Smith</p>
        <button>More Info</button>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>Copyright 20XX</p>
    </footer>
  );
}

function Content() {
  return (
    <div>
      <PostsNew />
      <PostsIndex />
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
