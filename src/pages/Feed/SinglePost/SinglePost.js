import React, { Component } from 'react';

import './SinglePost.css';

class SinglePost extends Component {
  state = {
    title: '',
    author: '',
    date: '',
    content: '',
    phone: '',
    interestLevel: '',
  };

  // look into this later for edit and view
  // componentDidMount() {
  //   // const postId = this.props.match.params.postId; // only returns post id
  //   fetch('URL')
  //     .then(res => {
  //       if (res.status !== 200) {
  //         throw new Error('Failed to fetch status');
  //       }
  //       return res.json();
  //     })
  //     .then(resData => {
  //       this.setState({
  //         title: resData.post.title,
  //         author: resData.post.creator.name,
  //         date: new Date(resData.post.createdAt).toLocaleDateString('en-US'),
  //         content: resData.post.content,
  //         phone: resData.post.phone,
  //         interestLevel: resData.post.interestLevel,
  //       });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }

  // componentDidMount() {
  //   const postId = this.props.match.params.postId;
  //   const graphqlQuery = {
  //     query: `query FetchSinglePost($postId: ID!) {
  //         post(id: $postId) {
  //           title
  //           content
  //           phone
  //           interestLevel
  //           creator {
  //             name
  //           }
  //           createdAt
  //         }
  //       }
  //     `,
  //     variables: {
  //       postId: postId
  //     }
  //   };
  //   fetch('http://localhost:8080/graphql', {
  //     method: 'POST',
  //     headers: {
  //       Authorization: 'Bearer ' + this.props.token,
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(graphqlQuery)
  //   })
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then(resData => {
  //       if (resData.errors) {
  //         throw new Error('Fetching post failed!');
  //       }
  //       this.setState({
  //         title: resData.data.post.title,
  //         author: resData.data.post.creator.name,
  //         date: new Date(resData.data.post.createdAt).toLocaleDateString('en-US'),
  //         content: resData.data.post.content,
  //         phone: resData.data.post.phone,
  //         interestLevel: resData.data.post.interestLevel
  //       });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }

  render() {
    return (
      <section className="single-post">
        <h1>{this.state.title}</h1>
        <h2>
          Created on {this.state.date}
        </h2>
        <p>Content: {this.state.content}</p>
        <p>Phone: {this.state.phone}</p>
        <p>Interest Level: {this.state.interestLevel}</p>
      </section>
    );
  }
}

export default SinglePost;
