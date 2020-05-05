// importing React library
import React from 'react';
// importing configuration files and component files and css files below
import { handleResponse } from '../../helpers'; 
import { API_URL } from '../../config';
import Loading from '../common/Loading';
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
        // use of template literal other wise we could have 
        // APP_URL + '/...
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

    renderChangePercent(percent) {
        if (percent > 0) {
            return <span className="percent-raised">{percent}% &uarr;</span>
        } else if (percent < 0) {
            return <span className="percent-fallen">{percent}% &darr;</span>
        } else {
            return <span>{percent}</span>
            }
    }


    render() {
    
        // render only loading component, if loading state is set to true
        if (this.state.loading) {
            return <div className="loading-container"><Loading /></div>
        }
        // render only error message, if error occured while fetching data
        if (this.state.error) {
            return <div className="error">{this.state.error}</div>
        }

        return (
          <div className="Table-container">
            <table className="Table">
              <thead className="Table-head">
                <tr>
                  <th>Cryptocurrency</th>
                  <th>Price</th>
                  <th>Market</th>
                  <th>24H Change</th>
                </tr>
              </thead>
              <tbody className="Table-body">
                {this.state.currencies.map((currency) => (
                  <tr key={currency.id}>
                    <td>
                            <span className="Table-rank">{currency.rank}</span>
                            {currency.name}
                    </td> 
                    <td>
                      <span className="Table-dollar">$ {currency.price} </span>
                    </td>
                    <td>
                      <span className="Table-dollar">$ {currency.marketCap} </span>
                    </td>
                    <td>
                      {this.renderChangePercent(currency.percentChange24h)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
    }
}

export default List;