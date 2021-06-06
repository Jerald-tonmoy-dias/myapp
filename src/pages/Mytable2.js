import axios from 'axios';
import React, { Component } from 'react';
import ReactTable from 'react-table-6';
import "react-table-6/react-table.css";

class Mytable2 extends Component {

    constructor() {
        super();
        this.state = {
            dataList: []
        }
    }

    componentDidMount() {
        axios.get('https://restcountries.eu/rest/v2/all')
            .then(res => {
                this.setState({ dataList: res.data })
            })
            .catch(() => {
                alert('something went wrong');
            })
    }


    render() {
        const dataInfo = this.state.dataList;
        const col = [{
            Header: 'Country Name',
            accessor: 'name'
        },
        {
            Header: 'population',
            accessor: 'population'
        }]


        return (
            <div>
                <ReactTable
                    data={dataInfo}
                    columns={col}
                    defaultPageSize={10}
                    pageSizeOptions={[10, 20, 30, 40, 50]}

                />
            </div>
        );
    }
}

export default Mytable2;