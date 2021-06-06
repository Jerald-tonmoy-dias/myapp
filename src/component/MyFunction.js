
import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ReactDom from 'react';
import reactDom from 'react-dom';


class MyFunction extends Component {
    constructor() {
        super();
        this.state = {
            fname: '',
            lname: '',
            email: '',
            mobile: '',
            desc : '',
            city1 : 'dhaka',
            city2 : 'chittagram',
            city3 : 'sylhet',
            auto : '',
            show : ''
        }
    }


    handlerFun = (event) => {
        var myname = event.target.name;

        var myvalue = event.target.value;

        this.setState({ [myname]: myvalue });
        // for textarea
        var txtValue = event.target.value;

        this.setState({desc : txtValue});

        this.setState({show : myvalue});




        if(myname === 'fname') {
            var namePattern = /^[a-zA-Z ]{2,30}$/;

            if(!namePattern.test(myvalue)) {
                this.setState({fname : 'Name is not valid'})
            }
        }

        if(myname === 'lname') {
            var namePattern = /^[a-zA-Z ]{2,30}$/;

            if(!namePattern.test(myvalue)) {
                this.setState({lname : 'Last Name is not valid'})
            }
        }

        if(myname === 'email') {
            var emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

            if(!emailPattern.test(myvalue)) {
                this.setState({email : 'email is not valid'})
            }
        }

        if(myname === 'mobile') {

            if(!Number(myvalue)) {
                this.setState({mobile : 'number is not valid'})
            }
        }


    }


    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className='col-6'>
                            <h2>First Name : {this.state.fname}</h2>
                            <h2>Last Name : {this.state.lname}</h2>
                            <h2>Email : {this.state.email}</h2>
                            <h2> Mobile : {this.state.mobile}</h2>
                            <h2> message : {this.state.desc}</h2>
                            <h2> selected : {this.state.show}</h2>
                        </div>
                        <div className='col-6'>
                            <input className="m-2" name='fname' type='text' onChange={this.handlerFun}></input><br />
                            <input className="m-2" name='lname' type='text' onChange={this.handlerFun}></input><br />
                            <input className="m-2" name='email' type='text' onChange={this.handlerFun}></input><br />
                            <input className="m-2" name='mobile' type='text' onChange={this.handlerFun}></input><br />
                            <textarea className='m-2' placeholder='write your message' onChange={this.handlerFun}/>

                            <select onChange={this.handlerFun} value={this.state.auto}>
                                <option>{this.state.city1}</option>
                                <option>{this.state.city2}</option>
                                <option>{this.state.city3}</option>
                            </select>

                            <button className="btn btn-danger m-2" type="submit">submit here</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyFunction;