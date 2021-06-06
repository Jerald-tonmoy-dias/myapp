import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
class List extends Component {

    


    render() {

        const countryList = [

            {
                name : 'australia',
                vote : '5'
            },

            {
                name : 'england',
                vote : '8'
            },

            {
                name : 'south africa',
                vote : '9'
            }
        ];

        const mydata = countryList.map((data)=> {
            return <option>{data.name}</option>
        });
        return (
            <div>
                <select>
                    {mydata}
                </select>
            </div>
        );
    }
}

export default List;