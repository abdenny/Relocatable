import React from 'react';
import {
  MDBJumbotron,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBIcon,
} from 'mdbreact';
import FadeInUp from '../animations/FadeInUp';
import unsplashKey from '../unsplashKey';

class Jumbotron extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cityImage2: null,
    };
  }

  componentDidMount = (params) => {
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
  };
  render() {
    return (
      <FadeInUp>
        <MDBContainer className='mt-3 text-center'>
          <MDBRow>
            <MDBCol className=' d-flex justify-content-center align-items-center'>
              <MDBJumbotron className='p-0 '>
                <MDBCardImage
                  className='img-fluid '
                  src={this.state.cityImage2}
                />
                <MDBCardBody>
                  <MDBCardTitle className='h3 indigo-text'>
                    {this.props.city2Name}
                  </MDBCardTitle>
                  <MDBCardText>
                    The cost of living in{' '}
                    {this.props.moreExpensiveCity === 'City1'
                      ? this.props.city1Name
                      : this.props.city2Name}{' '}
                    is about <b>{this.props.totalDiff}</b>% more expensive. Your
                    adjusted salary would be equivalent to ~
                    <b>${this.props.newSalary}</b>
                  </MDBCardText>
                  <MDBBtn href='#bottom' gradient='aqua' rounded>
                    <MDBIcon icon='arrow-down' className='mr-2' />
                    See Details
                  </MDBBtn>
                </MDBCardBody>
              </MDBJumbotron>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </FadeInUp>
    );
  }
}

export default Jumbotron;
