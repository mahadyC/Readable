import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as API from './APIs';


class App extends Component {

  state = {
    categories : [],
    posts: [],
    reactCategoryPosts: [],
    reduxCategoryPosts: []
  }
  componentDidMount() {

    API.getCategories().then(obj => {
      this.setState({categories: obj.categories})
    })

    API.getAll().then(obj => {
      this.setState({posts: obj})
    })

    API.getByCategory("react").then(obj => {
      this.setState({reactCategoryPosts: obj})
    })

    API.getByCategory("redux").then(obj => {
      this.setState({reduxCategoryPosts: obj})
    })
  }
  render() {
    const categoryLists =
      <div className="categories">
        <h2>Available Categories</h2>
        <ol className="categoriesList">
          {this.state.categories.map(category =>(
            <Link to={category.name} className="categoryLinks" key={category.name}>
              <li className="category" key={category.name}>{category.name}</li>
            </Link>
            ))
          }
        </ol>
      </div>

    const sortLists =
      <select>
        <option value="">Sort By</option>
        <option value="date">Date</option>
        <option value="score">Score</option>
      </select>

    return (
      <div className="App">
        <Route exact path="/" render={() => (
          <div className="rootView">
            {categoryLists}
            <div className="listedPosts">
              <h2>Listed Posts</h2>
              <ol className="postsList">
                {this.state.posts.map(post => (
                  <div className="post" key={post.id}>
                    <li className="postTitle">{post.title}</li>
                    <p>{post.author}</p>
                    <p>{post.commentCount}</p>
                    <p>{post.voteScore}</p>
                    <a href="#datailPageForThePost">detail page for the post</a>
                    <button>up vote or down vote mechanism</button>
                    <button>button or links for editing or deleting the post</button>
                  </div>
                  ))
                }
              </ol>
              <button>Add New Post</button>
              {sortLists}
            </div>
          </div>
        )}></Route>

        <Route exact path="/react" render={() => (
          <div className="categoryPage">
            {categoryLists}
            <div className="categorySpecificPostList">
              <h2>Category specific posts</h2>
              <ol className="postsList">
                {this.state.reactCategoryPosts.map(post => (
                  <div className="post" key={post.id}>
                    <li className="postTitle">{post.title}</li>
                    <p>{post.author}</p>
                    <p>{post.commentCount}</p>
                    <p>{post.voteScore}</p>
                    <a href="#datailPageForThePost">detail page for the post</a>
                    <button>up vote or down vote mechanism</button>
                    <button>button or links for editing or deleting the post</button>
                  </div>
                  ))
                }
              </ol>
              <button>Add New Post</button>
              {sortLists}
            </div>
          </div>
        )}></Route>

        <Route exact path="/redux" render={() => (
          <div className="categoryPage">
            {categoryLists}
            <div className="categorySpecificPostList">
              <h2>Category specific posts</h2>
              <ol className="postsList">
                {this.state.reduxCategoryPosts.map(post => (
                  <div className="post" key={post.id}>
                    <li className="postTitle">{post.title}</li>
                    <p>{post.author}</p>
                    <p>{post.commentCount}</p>
                    <p>{post.voteScore}</p>
                    <a href="#datailPageForThePost">detail page for the post</a>
                    <button>up vote or down vote mechanism</button>
                    <button>button or links for editing or deleting the post</button>
                  </div>
                  ))
                }
              </ol>
              <button>Add New Post</button>
              {sortLists}
            </div>
          </div>
        )}></Route>
      </div>
    );
  }
}

export default App;
