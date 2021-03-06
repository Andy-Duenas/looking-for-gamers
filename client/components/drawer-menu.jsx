import React from 'react';

export default class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShowingMenu: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { isShowingMenu } = this.state;
    if (isShowingMenu) {
      return this.setState({ isShowingMenu: false });
    }
    return this.setState({ isShowingMenu: true });
  }

  render() {
    if (this.state.isShowingMenu) {
      return (
      <>
        <div className='cont'>
          <div className="menu-cont">
            <h2 className="menu-title">Menu</h2>
            <a href="#favorites">
              <h3 className="menu-item" onClick={this.handleClick}>Favorites</h3>
            </a>
            <a href="#search">
              <h3 className="menu-item" onClick={this.handleClick}>Search</h3>
            </a>
          </div>
          <div className="grey-screen" onClick={this.handleClick}></div>
        </div>
      </>);
    }
    return <div className="column-menu"><i className="fas fa-bars icon" onClick={this.handleClick}></i></div>;
  }
}
