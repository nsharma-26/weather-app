import React, { Component } from 'react';
import './Slider.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import SliderCard from './SliderCard';
import RadioBox from './RadioBox';
import { connect } from 'react-redux';
import { getWeathersFunc } from '../../redux/actions/actions';
import BarChartBox from '../barchart/BarChartBox';
import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

class SliderBox extends Component{ 
    constructor(){
        super();
        this.state = { 
            selected: "celcius" ,
            selectedDate: "",
            selectedTime:[],
            selectedTemp: '',
            barChartWidth: 450,
            show:false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleDateTime = this.handleDateTime.bind(this);
        this.tConvert = this.tConvert.bind(this);
        this.tempToCelcius = this.tempToCelcius.bind(this);
        this.refresh = this.refresh.bind(this);
        this.myInput = React.createRef()
    }
    
    componentDidMount(){
        this.props.todo()
       
    }
    handleChange(e){         
        this.setState({ selected: e.target.value });         
    };

    handleDateTime(val, weathers){
        let stateProps = weathers;
        let allTimes = [];
        let actualTemp = [];
        let date1 = val.split(' ');
        let actualDate = date1[0];
        stateProps.filter((item)=>{
           if(item.dt_txt.includes(actualDate)){
                let actualTempArr = this.tempToCelcius(item.main.temp);
                let actualTimeArr = item.dt_txt.split(' ');
                let actualTime = actualTimeArr[1];
                let times = actualTime.split(':').splice(0, 2).join(':');                
                let convertedActualTime = this.tConvert(times);
                allTimes.push(convertedActualTime);
                actualTemp.push(actualTempArr);
           }
           return allTimes, actualTemp;
        })
        
        this.setState({ 
            selectedTemp: actualTemp,
            selectedTime: allTimes,
        }); 
         
    }

    tempToCelcius(valNum){ 
        var temp = null;
        if(this.state.selected === 'celcius'){
            temp = (valNum-273.15);
        } else {
            temp = (valNum-273.15)*9/5 + 32;
        }        
        return Math.round(temp);
    }

    tConvert(time){
        // Check correct time format and split into components
        time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
      
        if (time.length > 1) { // If time format correct
          time = time.slice (1);  // Remove full string match value
          time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
          time[0] = +time[0] % 12 || 12; // Adjust hours
        }
        return time.join (''); // return adjusted time or original string
    }

    refresh = () => {
        window.location.reload(false);
    };

    render() {
        const { selected, selectedTime, selectedTemp, barChartWidth } = this.state;

        var settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: false,
                  dots: false
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: false,
                  dots: false
                }
              }
            ]
          };
        
        function getFullDate(val){
            let fulldate = new Date(val);
            let dt = fulldate.getDate();         
            let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
            let mt = fulldate.getMonth();
            let yr = fulldate.getFullYear();
            return `${dt} ${month[mt]}, ${yr}`;
       } 
      
       
        return (
            
            <div style={{marginTop: '5%', marginRight: '10%', marginLeft: '10%'}}> 
                <div>
                    <RadioBox state={this.state} handleChange={this.handleChange} refresh={this.refresh}/>
                </div>
                <div>
                <Slider {...settings} ref={this.myInput}>
                    {/* <Splide options={{rewind : false, perPage: `${mobileWidth}` == 375? 1 : 3, perMove: 1, gap : '0px'}}>    */}
                        {this.props && this.props.weathers && this.props.weathers.list && this.props.weathers.list.map((item, index) => (   
                            item.dt_txt.includes('21:00:00') &&
                                // <SplideSlide> 
                                
                                    <a onClick={()=>this.handleDateTime(item.dt_txt, this.props.weathers.list)}>
                                        <div style={{margin:'20px'}}>
                                            <SliderCard                                        
                                                selected={selected}
                                                date={getFullDate(item.dt_txt)}
                                                temp={this.tempToCelcius(item.main.temp)}
                                                weather={item.weather[0].main} 
                                                handleBarClick={this.handleBarClick}                                                                           
                                            />
                                        </div>
                                    </a>
                                
                        ))}                  
                    </Slider>
                   
                </div>   
                <div className="bar-chart">
                    <BarChartBox 
                        selectedTime={selectedTime}
                        selectedTemp={selectedTemp}
                        barChartWidth={barChartWidth}
                    />
                </div>  
            </div>
        );
    } 
   
}
const mapStateToProps = state => {
    return {
        weathers : state.todo.data
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        todo: () => dispatch(getWeathersFunc(dispatch))
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(SliderBox)

