import React from 'react';
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer,
} from 'mdbreact';
import FadeInUp from '../animations/FadeInUp';
import unsplashKey from '../unsplashKey';

class CityCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cityImage1: null,
      cityImage2: null,
    };
  }

  componentDidMount = (params) => {
    fetch(
      `https://api.unsplash.com/search/photos/?page=1&per_page=1&query=${this.props.city1Name}&client_id=${unsplashKey}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          cityImage1: data.results[0].urls.regular,
        });
      })
      .then(() => {
        fetch(
          `https://api.unsplash.com/search/photos/?page=1&per_page=1&query=${this.props.city2Name}&client_id=${unsplashKey}`
        )
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            this.setState({
              cityImage2: data.results[0].urls.regular,
            });
          });
      });
  };
  render() {
    // console.log(this.state.cityImage1);
    // console.log(this.props);
    return (
      <FadeInUp>
        <MDBContainer style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
          <MDBCarousel
            style={{ height: '200px' }}
            activeItem={1}
            length={2}
            showControls={true}
            showIndicators={true}
            className='z-depth-1'
          >
            <MDBCarouselInner>
              <MDBCarouselItem itemId='1'>
                <MDBView>
                  <img
                    style={{}}
                    className='d-block w-100 ;'
                    src={this.state.cityImage1}
                    alt='First slide'
                  />
                  <MDBMask overlay='black-strong' />
                </MDBView>
                <MDBCarouselCaption>
                  <h3 className='h3-responsive'>{this.props.city1Name}</h3>
                  <p>Lorem</p>
                </MDBCarouselCaption>
              </MDBCarouselItem>
              <MDBCarouselItem itemId='2'>
                <MDBView>
                  <img
                    className='d-block w-100'
                    src={this.state.cityImage2}
                    alt='Second slide'
                  />
                  <MDBMask overlay='black-strong' />
                </MDBView>
                <MDBCarouselCaption>
                  <h3 className='h3-responsive'>{this.props.city2Name}</h3>
                  <p>Ipsum</p>
                </MDBCarouselCaption>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
        </MDBContainer>
      </FadeInUp>
    );
  }
}
export default CityCarousel;
