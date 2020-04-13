import React, { Component } from 'react';
import Spinner from '../animations/Spinner';

import store from '../Store';
import apiKey from '../keys';

class View extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data1: null,
      data2: null,
    };
  }

  componentDidMount = (params) => {
    let state = store.getState();
    let userInput = state.template.someArray[1];
    this.setState(
      {
        city1: userInput.city1.value,
        city2: userInput.city2.value,
        salary: userInput.salary,
      },
      () => {
        fetch(
          `https://www.numbeo.com/api/city_prices?api_key=${apiKey}&query=${
            this.state.city1.split(',')[0]
          }&currency=USD`
        )
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            this.setState({
              data1: data,
            });
          })
          .then(() => {
            fetch(
              `https://cost-of-living-api-lqvgibwbps.now.sh/${
                this.state.city2.split(',')[0]
              }?usd`
            )
              .then((response) => {
                return response.json();
              })
              .then((data2) => {
                this.setState({
                  data2: data2,
                });
              });
          });
      }
    );
  };

  render() {
    console.log(this.state.data1);
    console.log(this.state.data2);
    console.log(this.state);
    return (
      <>
        <Spinner />
      </>
    );
  }
}

export default View;
