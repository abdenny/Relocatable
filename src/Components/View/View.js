import React, { Component } from 'react';
import Spinner from '../animations/Spinner';
import CityCarousel from './CityCarousel';
import findAverage from '../../functions/average';
import store from '../Store';
import apiKey from '../keys';
import PriceObject from './PriceObject';
import AboutPill from './AboutPill';
import sumArrayandRed from '../../functions/sumArrayandRed';
import whichArrayIsLarger from '../../functions/whichArrayIsLarger';
import averageDiffs from '../../functions/averageDiffs';

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
              })
              .then(() => {
                this.setState({
                  moreExpensiveCity: whichArrayIsLarger(
                    this.state.city1Apartment,
                    this.state.city2Apartment
                  ),
                  restaurantDiff: sumArrayandRed(
                    this.state.city1Rest,
                    this.state.city2Rest
                  ),
                  groceryDiff: sumArrayandRed(
                    this.state.city1Grocery,
                    this.state.city2Grocery
                  ),
                  transportationDiff: sumArrayandRed(
                    this.state.city1Transportation,
                    this.state.city2Transportation
                  ),
                  salaryDiff: sumArrayandRed(
                    this.state.city1Salaries,
                    this.state.city2Salaries
                  ),
                  apartmentDiff: sumArrayandRed(
                    this.state.city1Apartment,
                    this.state.city2Apartment
                  ),
                });
                // console.log(
                //   sumArrayandRed(this.state.city1Rest, this.state.city2Rest),
                //   whichArrayIsLarger(this.state.city1Apartment, this.state.city2Apartment)
                // );
              })
              .then(() => {
                this.setState({
                  totalDiff: averageDiffs(
                    this.state.restaurantDiff,
                    this.state.groceryDiff,
                    this.state.transportationDiff,
                    this.state.salaryDiff,
                    this.state.apartmentDiff
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
          <CityCarousel
            city1Name={this.state.city1}
            city2Name={this.state.city2}
          />
        )}
        <AboutPill
          parentState={this.state}
          city1Name={this.state.city1}
          city2Name={this.state.city2}
        />
        <PriceObject />
      </>
    );
  }
}

export default View;
