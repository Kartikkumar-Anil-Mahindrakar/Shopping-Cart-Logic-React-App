import React, { Component } from 'react';
import Navbar from './components/navbar';
import Counters from './components/counters';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  constructor() {
    super();
    console.log('App - Constructor');
  }

  componentDidMount() {
    console.log('App - Mounted');
  }

  handleIncrement = (counter) => {
    //  const counters =  this.state.counters.map(c=>{
    //     if(c === counter){
    //       c.value++;
    //     }
    //     return c;
    // });
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters: counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: counters });
  };

  handleDelete = (id) => {
    // console.log('Event handler Called',id);
    const counters = this.state.counters.filter((ele) => ele.id !== id);
    this.setState({ counters: counters });
  };

  render() {

    console.log("App - render");

    return (
      <React.Fragment>
        <Navbar
          totalCounter={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
