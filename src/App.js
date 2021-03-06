import React from 'react';

import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';

import styles from './App.module.css';
import {fetchData} from './api';

import coronaImage from './images/image.png';
class App extends React.Component{
    state = {
        data: {},
        country: '',
    }

    async componentDidMount(){
        const returnedData = await fetchData();
        
        this.setState({data: returnedData})
    }

    handleCountryChange = async (country) =>{
        const data = await fetchData(country);
        this.setState({data, country: country});
    }
    render(){
        const {data,country} = this.state;

        return(<div className={styles.container}>
            <img src={coronaImage} className={styles.image} alt="COVID-19"/>
            <Cards data={data}/>
            <CountryPicker handleCountryChange={this.handleCountryChange}/>
            <Chart data={data} country={country}/>
        </div>)
    }
}

export default App;