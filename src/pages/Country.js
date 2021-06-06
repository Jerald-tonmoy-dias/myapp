import React, { Component } from 'react';
import axios from 'axios';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Country extends Component {

    // 2nd step store the files from the url
constructor() {
    super();
    this.state = {
        myCountry : []
    }
}

    // first step getting the files from the url and push to constructor function
    componentDidMount() {
        axios.get('https://restcountries.eu/rest/v2/all')
        .then(response=> {
           this.setState({myCountry:response.data});
        })
        .catch (error=> {
            console.log(error);
        })
    }


    render() {

        // 3rd step setting up the jason files for readability
        const countryList = this.state.myCountry; //store the json array

       const showcountry =  countryList.map((myList)=> {
            return <li>{myList.name}</li>
        });//with map function it break down array and store single property

        const showcapital = countryList.map(mycapital => {
            return <li>{mycapital.capital}</li>
        });

        // 4th step show the files
        return (
            <div className='row'>
                <div className="col-6">
                    <h2>countries</h2>
                    <ul>{showcountry}</ul>
                </div>
                <div className="col-6">
                    <h2>capital</h2>
                    <ul>{showcapital}</ul>
                </div>
            </div>
        );
    }
}

export default Country;