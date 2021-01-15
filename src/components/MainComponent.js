import React , {Component} from 'react';
import  WeatherInfo from './CardComponent';
import  Header from './HeaderComponent';

class Main extends Component{
   
    render(){
        return(
            <div>
                <Header />
                <WeatherInfo />
        

            </div>
        )       
    }
}
export default Main;