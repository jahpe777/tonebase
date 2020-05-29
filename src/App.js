import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = { search: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    /**
     * This is a simple implementation of a "debounce" function,
     * which will queue an expression to be called in 250ms and
     * cancel any pending queued expressions. This way we can
     * delay the call 250ms after the user has stoped typing.
     */
    let value = e.target.value;
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.setState({
        search: value
      });
    }, 250);
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
