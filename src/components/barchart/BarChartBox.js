import React from 'react';
import BarChart from 'react-bar-chart';
 

 
const margin = {top: 20, right: 20, bottom: 30, left: 40};
 
class BarChartBox extends React.Component{
  constructor() {
    super();
    // this.state = {
    //   width: 0
    // }
   
   
  }

  render() {

  const {selectedTime, selectedTemp, barChartWidth} = this.props;
  function getChartData(time, temp){
    const data = [];
    let i = 0; 
    let j = 0; 
    while (i < time.length) {
      while (j < temp.length){
        data.push({text: time[i], value: temp[j]},)     
        i++;
        j++;
      }    
  }  
  return data
  }
 
    return (
        
            <div> 
                <BarChart ylabel='Temperature'
                  width={this.props.barChartWidth}
                  height={250}
                  margin={margin}
                  data={getChartData(selectedTime, selectedTemp)}
                  />
            </div>
        
    );
  }
}
 
export default BarChartBox