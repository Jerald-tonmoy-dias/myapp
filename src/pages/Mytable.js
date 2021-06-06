import axios from 'axios';
import React, { Component } from 'react';
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";

class Mytable extends Component {

    constructor() {
        super();

        this.state = {
            tableinfor: []
        }
    }

    componentDidMount() {
        axios.get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                this.setState({ tableinfor: response.data })
            })
            .catch(() => {
                alert('somethin went wrong')
            })
    }


    render() {
        const data = this.state.tableinfor;

        const columns = [{
            Header: 'Name',
            accessor: 'name',
        },
        {
            Header: 'Region',
            accessor: 'region'
        },
        {
            Header: 'Population',
            accessor: 'population'
        }

        ]


        return (
            <div>
                <ReactTable
                    data={data}
                    columns={columns}
                    defaultPageSize={10}
                    pageSizeOptions={[10, 20, 30]}
                />
            </div>
        );
    }
}

export default Mytable;