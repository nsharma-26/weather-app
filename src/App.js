import React from 'react'
import './App.css'
import SliderBox from './components/slider/SliderBox';


class App extends React.Component {
  componentDidMount() {
   // this.props.hideLoader();
  }  
  render() { 
    return (
      <div className="App">      
          <SliderBox />      
      </div>
    );
  }
}

export default App;
