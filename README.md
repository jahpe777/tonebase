# Tonebase

https://www.tonebase.co/

## Questions

1. What made you interested in/choose React as a framework? Was it a choice you made? Regardless, what is the one thing you enjoy most about it compared to other frameworks you've used and what is one thing you dislike about it?

- I became interested in React since it has the ability to easily scale and gives you a sense of organization i.e. reuse of components, app.js file as a hub for state change throughout the project, etc. React is not a framework but is actually a Javascript library which makes it flexible and able to adapt to a myriad of other frameworks. When working in Angular for instance (since that is actually a framework) you have little or no ability to adapt to other frameworks and must live within the Angular family.

- A potential shortcoming of React is that since it does have a lot of flexibility, in regards to adapting to other frameworks, it may be difficult to ensure flawless customization. Having to make sure all these varied frameworks and dependcies work well with React can be confusing and difficult to maintain. Using a framework like Angular can be much more streamlined and simpler to use since you are operating within just one system.

2. Why do the component names in JSX start with capital letters?

- JSX reads a component with lowercase letters as a built-in element such as a "div". This is the way JSX works, by rendering a component that begins with a lowercase letter as an element. If you start the component name with a capital letter, JSX will see it as a true component.

3. What are the main types of components you can render in React? When do you choose one over the other?

- You can either have a class based component or a functional component.

- You would want to choose a class based component if you require a change in state. An example would be a "Navbar" where based on whether the user is logged in or not, the elements within the Navbar will hide or appear.

- You would choose a functional component if you have no need to pass state within the component. An example of this would be if you had some static elements you wanted to render on the page where you would not require state.

4. How much experience do you have with testing frameworks? While our testing is light at the moment (read: nonexistent) this is something we'd like to move to in the future so this is a 'nice-to-know' for us!

- I have expereince testing within both React and Node.

- Within React, I would simply have some "smoke" tests that simply test whether or not certain components render properly.

- Within Node, you would have more elebarote tests using the Mocha framework and the Chai library. These tests would ensure that your CRUD (Create, Read, Update, Delete) operations on the backend function properly. Examples of this would be testing whether or not a POST endpoint actually receives the users input and whether or not it is in the correct format.

## Coding Questions

1. What is wrong with this example, and how would you go about fixing or improving the component?

```
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name || 'Anonymous'
    }
  }
  render() {
    return (
      <p>Hello {this.state.name}</p>
    );
  }
}
```

- First of all, I do not see the import for this component. You must declare an import such as - "import React from 'react';"

- You must export the component as well to index.js so it can be rendered. "export default App;"

- In this case with "props" you are not passing down any type of state since you are at the parent component of "App". There is currently no initial state being set so the return of "Hello {this.state.name}" will not be able to retrieve any kind of state.

- My example would look like this -

```
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'James' || 'Anonymous'
    };
  }
  render() {
    return <p>Hello {this.state.name}</p>;
  }
}

export default App;
```

- This way you're able to properly import and export the component while setting an initial state within App. You can then pass down props for the "name" state to other child components if they require the state from App.

2. What's the issue with this component. Why? How would you go about fixing it?

```
class App extends React.Component {
state = { search: '' }
handleChange = event => {
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
      })
    }, 250);
  }
render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
        {this.state.search ? <p>Search for: {this.state.search}</p> : null}
      </div>
    )
  }
}
```

- My solution would look like this -

```
class App extends React.Component {
state = { search: '' }
handleChange = event => {
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
      })
    }, 250);
  }
render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
        {this.state.search ? <p>Search for: {this.state.search}</p> : null}
      </div>
    )
  }
}
```

## Screenshots

### Landing Page:

![image](public/images/screenshots/landing.png)

### Login Page:

![image](public/images/screenshots/login.png)

### Band Page:

![image](public/images/screenshots/band.png)

### Watch Page:

![image](public/images/screenshots/watch.png)

### Listen Page:

![image](public/images/screenshots/listen.png)

### Shows Page:

![image](public/images/screenshots/shows.png)
