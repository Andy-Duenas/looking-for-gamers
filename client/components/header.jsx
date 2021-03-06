import React from 'react';
import Menu from './drawer-menu';
export default class App extends React.Component {

  handleHeaderName() {
    const { currentPage } = this.props;
    if (currentPage.path === '' || currentPage.path === 'search') {
      return 'Search';
    }
    if (currentPage.path === 'game') {
      return 'Game';
    }
    if (currentPage.path === 'favorites') {
      return 'Favorites';
    }
    if (currentPage.path === 'thread') {
      return 'Thread';
    }
  }

  render() {
    return (
      <>
        <div className="background-color">
         <div className="game-title-container"><h2 className="game-title">Looking For Gamers</h2></div>
        </div>
        <div className="row header">
          <div className="menu-container">
           <Menu></Menu>
           <div className="column-two-third">{this.handleHeaderName()}</div>
          </div>
        </div>
      </>
    );
  }
}
