import React, {Component} from 'react';
import {connect} from 'react-redux';

 class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div>Select a book from the list...</div>;
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Page Count: {this.props.book.pages}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.selectedBook
  }
}

export default connect(mapStateToProps)(BookDetail);