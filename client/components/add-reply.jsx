import React from 'react';

export default class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShowingModal: false, post: {} };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick() {
    const { isShowingModal } = this.state;
    if (isShowingModal) {
      return this.setState({ isShowingModal: false });
    }
    return this.setState({ isShowingModal: true });
  }

  handleChange(event) {
    this.setState({ post: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const post = {};
    post.input = this.state.post;
    const { postId } = this.props;
    fetch(`/api/discussion/reply/${postId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(data => {
        this.props.isUpdating(postId);
        if (data) {
          this.setState({ isShowingModal: false });
        }
      })
      .catch(err => console.error(err));
    event.target.reset();
  }

  render() {
    if (this.state.isShowingModal) {
      return (
        <>
          <div className="background-reply">
            <div className="cont-post">
              <div className="user">TheLegend27</div>
              <form onSubmit={this.handleSubmit}>
                <div className="row">
                  <input type="text" onChange={this.handleChange} className="textbox-add" />
                </div>
                <div className="row post-container">
                  <input type="submit" value="Post" className="post-button" />
                </div>
              </form>
              <div className="cancel">
                <span onClick={this.handleClick}>Cancel</span>
              </div>
            </div>
          </div>
        </>);
    }
    return (
      <div className="col-reply" onClick={this.handleClick}>
        <i className="fas fa-reply reply-icon" ></i>
      </div>
    );
  }
}
