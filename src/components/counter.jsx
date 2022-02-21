import React, { Component } from 'react';
class Counter extends Component {

  componentDidUpdate(prevProps,prevState){
    console.log("prevProps",prevProps);
    console.log("prevState",prevState);

  }

  //for single sourse of truth
  // state = { value: this.props.counter.value
  //   // tags:["tag1","tag2","tag3"]
  // };


  // style = {
  //   fontWeight:'bold',
  //   fontSize:20
  // };

  // renderTags(){
  //   if(this.state.tags.length === 0){
  //     return <p>You don't have any tags</p>;
  //   }
  //   return <ul>
  //   {this.state.tags.map(tag=> <li key={tag}> {tag} </li>)}
  // </ul>;
  // }


  // for single source of truth
  // handleIncrement = (product)=>{
  //   // console.log("Increment Click",this);
  //   // console.log(product);
  //   this.setState({value:this.state.value+1});
  // }

  render() {

    // console.log("props ",this.props)
    console.log('Counter - rendered');

    return (
      <div>
        {/* {
          this.props.children
        } */}
        <span className={this.getBadgeClasses()}>
          {this.formatValue()}
        </span>
        <button onClick={()=>this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
        <button onClick={this.props.onDelete.bind(this,this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
      </div>
    );
  } 

  // {this.state.tags.length === 0 && "Please create an tag"}
  // {this.renderTags()}

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += (this.props.counter.value === 0) ? "warning" : "primary";
    return classes;
  }

  formatValue() {
    const { value } = this.props.counter;
    return value === 0 ? 'Zero' : value;
  }
}

export default Counter;
