import React from 'react';

import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBIcon,
} from 'mdbreact';
import './welcome.css';

class CallToActionIntro extends React.Component {
  state = {
    collapsed: false,
  };

  handleTogglerClick = () => {
    const { collapsed } = this.state;
    this.setState({
      collapsed: !collapsed,
    });
  };

  componentDidMount() {
    document.querySelector('nav').style.height = '65px';
  }

  componentWillUnmount() {
    document.querySelector('nav').style.height = 'auto';
  }

  render() {
    return (
      <div id='caltoaction'>
        <MDBView src='https://mdbootstrap.com/img/Photos/Others/gradient3.png'>
          <MDBMask className='rgba-blue-slight ' />
          <MDBContainer
            style={{ height: '100%', width: '100%', paddingTop: '6rem' }}
            className='d-flex justify-content-center align-items-center'
          >
            <MDBRow>
              <MDBCol md='12' className='mb-4 text-center indigo-text'>
                <h1 className='display-4 font-weight-bold mb-0 pt-md-5 pt-5'>
                  Relocatable
                </h1>
                <h5 className='pt-md-5 pt-sm-2 pt-5 pb-md-5 pb-sm-3 pb-5'>
                  Thinking about moving? Curious how far your salary will go in
                  another city? Relocatable gives you data on how your quality
                  of life fares in all major American cities!
                </h5>
                <MDBBtn href='/form' rounded className='btn-indigo'>
                  <MDBIcon icon='angle-double-right' className='mr-2' /> Get
                  Started
                </MDBBtn>
                <MDBBtn outline color='indigo' rounded>
                  <MDBIcon icon='book' className='mr-2' /> About
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
      </div>
    );
  }
}

export default CallToActionIntro;
