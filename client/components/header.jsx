import React from 'react';

export default class App extends React.Component {

  render() {
    return (
      <>
        <div className="row header">
          <div className="column-one-third"><i className="fas fa-bars icon"></i></div>
          <div className="column-two-third">Search</div>
        </div>
      </>
    );
  }
}