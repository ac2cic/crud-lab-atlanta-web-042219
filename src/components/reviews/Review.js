import React, { Component } from 'react';

class Review extends Component {

  handleOnDelete = () => {
    this.props.deleteReview(this.props.review.id)
  }

  render() {
    return (
      <div>
        <li>
          {this.props.review.text}
          </li>
          <button onClick={this.handleOnDelete}> X </button>
      </div>
    );
  }

};

export default Review;
