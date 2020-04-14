import React, { Component } from 'react';
import Spinner from '../animations/Spinner';
import CityCarousel from './CityCarousel';
import findAverage from '../../functions/average';
import store from '../Store';
import apiKey from '../keys';
import PriceObject from './PriceObject';
import AboutPill from './AboutPill';

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
              `https://www.numbeo.com/api/city_prices?api_key=${apiKey}&query=${
                this.state.city2.split(',')[0]
              }&currency=USD`
            )
              .then((response) => {
                return response.json();
              })
              .then((data2) => {
                this.setState({
                  data2: data2,
                });
              })
              .then(() => {
                this.setState({
                  city1Rest: findAverage(
                    this.state.data1.prices,
                    'Restaurants'
                  ),
                  city2Rest: findAverage(
                    this.state.data2.prices,
                    'Restaurants'
                  ),
                  city1Grocery: findAverage(this.state.data1.prices, 'Markets'),
                  city2Grocery: findAverage(this.state.data2.prices, 'Markets'),
                  city1Transportation: findAverage(
                    this.state.data1.prices,
                    'Transportation'
                  ),
                  city2Transportation: findAverage(
                    this.state.data2.prices,
                    'Transportation'
                  ),
                  city1Salaries: findAverage(
                    this.state.data1.prices,
                    'Salaries'
                  ),
                  city2Salaries: findAverage(
                    this.state.data2.prices,
                    'Salaries'
                  ),
                  city1Apartment: findAverage(
                    this.state.data1.prices,
                    'Apartment'
                  ),
                  city2Apartment: findAverage(
                    this.state.data2.prices,
                    'Apartment'
                  ),
                });
              });
          });
      }
    );
  };

  render() {
    console.log(this.state);

    return (
      <>
        {this.state.data2 == null && <Spinner />}
        {this.state.data2 !== null && (
          <CityCarousel city1Name={this.state.city1} />
        )}
        <AboutPill city1Name={this.state.city1} city2Name={this.state.city2} />
        <PriceObject />
      </>
    );
  }
}

export default View;
