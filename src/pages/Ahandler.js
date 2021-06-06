import React, { Component } from 'react';
import axios from 'axios';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Ahandler extends Component {

    constructor() {
        super();
        this.state = {
            postdata : '',
            myvalue : ''
        }
    }


    getInput = (event) => {
        const inputvalue = event.target.value;
        this.setState({postdata: inputvalue});
    }

    submitInput = () => {
        axios.post('http://ss.rabbil.com/test.php',this.state.postdata)
        .then(res => {
            this.setState({myvalue : res.data});
            alert(this.state.myvalue)
        })
        .catch(error=> {
            alert('something went wrong')
        })
    }



    render() {

      return(
          <div>
              <input onChange={this.getInput} className="text-perimary" placeholder="type here"></input>
              <button onClick={this.submitInput} className="btn btn-primary">submit now</button>
          </div>
      );
    }
}

export default Ahandler;