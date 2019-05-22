import React from 'react';
import PropTypes from 'prop-types';


//const App = () => <h1>Stateless Component</h1>

//stateful component
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 'this is the state txt',
      cat: 0
    }
  }

  update( e ) {
    this.setState({txt: e.target.value})
  }

  render() {
    let txt = this.props.txt

   return (
     <div>
       {/* Accessing nested component Heart */}
   <Button>I <Heart/> React</Button>
   <h1>Hello</h1>
   <b>This is how you add multiple elements</b>
   <h1>{txt}</h1>

    <div>
    <Widget update={this.update.bind(this)}/>


   <h1>{this.state.txt} - {this.state.cat}</h1>
   </div>
   
   </div>
   )
  }
}

class Heart extends React.Component {
  render() {
    return <span>&hearts;</span>
  }
}

App.propTypes = {
  txt: PropTypes.string,
  cat: PropTypes.number.isRequired
}

App.defaultProps = {
  txt: "this is the default text"
}

const Widget = (props) => 
  <input type="text" onChange={props.update}/>

const Button = (props) => <button>{props.children}</button>


export default App