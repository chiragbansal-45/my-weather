import React , {Component} from 'react';
import  WeatherInfo from './CardComponent';
import  Header from './HeaderComponent';
import Search from './SearchComponent';
import Preview from './PreviewComponent';
class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchBarInput: '',
            details: {
                temprature: null,
                description: ''
            }
        }

    }
    onChange=(e) => {
        this.setState({searchBarInput: e.target.value})
    }
    setWeather=() => {
            
        const city = this.state.searchBarInput;
        const API_KEY = 'd302d98fe71b4661c7d0b51f198888df';
        const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
        const URL = API_URL + `?q=${city}&appid=${API_KEY}&units=metric`;
       
                fetch(URL)
                .then(response => {
                    if (response.ok) {
                        return response;
                    }
                }, error => {
                    throw error;
                })
                .then(response => response.json())
                .then(data => {
                    if (data.cod === 200) {
                        this.setState({
                            details: {
                                temprature: data.main.temp,
                                description: data.weather[0].main
                            }
                            
                        });
                    }
                    else{
                        throw data.cod;
                    }  
                })
            
        
    }


   
    render(){
        let cardContent = <Preview />
        
        if(this.state.details.description === ''){
            cardContent = <Preview />
        }
        else{
            cardContent = <WeatherInfo data={this.state.details}/>
        }
        return(
            <div >
                <Header />
                <Search value={this.state.searchBarInput} 
                        onChange={this.onChange}
                        onClick={this.setWeather} />
                {cardContent}
               
        

            </div>
        )       
    }
}
export default Main;