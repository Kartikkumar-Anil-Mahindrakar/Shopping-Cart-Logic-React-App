import React, { Component } from 'react';

const Navbar = ({totalCounter}) => {
    console.log("Navbar - rendered")

  return (

    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{' '}
        <span className="badge badge-pill badge-secondary">
          {totalCounter}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;

// class Navbar
//  extends Component {
//     render() {
//         return (
//             <nav class="navbar navbar-light bg-light">
//                 <a class="navbar-brand" href="#">
//                     Navbar <span className="badge badge-pill badge-secondary">{this.props.totalCounter}</span>
//                 </a>
//             </nav>
//         );
//     }
// }

// export default Navbar
// ;
