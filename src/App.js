import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      search: '',

      handleChange: event => {
        /**
         * This is a simple implementation of a "debounce" function,
         * which will queue an expression to be called in 250ms and
         * cancel any pending queued expressions. This way we can
         * delay the call 250ms after the user has stoped typing.
         */
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.setState({
            search: event.target.value
          });
        }, 1000);
      }
    };
  }
  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
        {this.state.search ? <p>Search for: {this.state.search}</p> : null}
      </div>
    );
  }
}

export default App;

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       name: 'James' || 'Anonymous'
//     };
//   }
//   render() {
//     return <p>Hello {this.state.name}</p>;
//   }
// }
