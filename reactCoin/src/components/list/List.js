import React from 'react';
import { handleResponse } from '../../helpers';
import { API_URL } from '../../config';
import './Table.css';

class List extends React.Component {
    constructor() {
        super();

        this.state = {
            loading: false,
            currencies: [], 
            error: null,
        };
    }

    componentDidMount() {
        this.setState({ loading: true });

    fetch(`${API_URL}/cryptocurrencies?page=1&perPage=20`)
     .then(handleResponse)
     .then((data) => { // IF Success set fields with data
         this.setState({
             currencies: data.currencies,
             loading: false,
         });
    })
    .catch((error) => {  // IF there is an Error, set the fields with error data
        this.setState({
            error: error.errorMessage,
            loading: false,
        });
    });
    }

    render() {
        if (this.state.loading) {
            return <div>Loading...</div>
        }

        return (
            <div className="Table-container">
                
            <table className="Table">
              <thead className="Table-head">
                <tr>
                  <th>Cryptocurrency</th>
                  <th>Price</th>
                  <th>Market Cap</th>
                  <th>24h Change</th>
                </tr>
              </thead>
              <tbody className="Table-body">
                {this.state.currencies.map((currency) => (
                  <tr key={currency.id}>{currency.id}</tr>
                ))}
              </tbody>
            </table>
          </div>
        );
    }
}

export default List;