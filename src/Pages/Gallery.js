import React, { PureComponent, useEffect } from 'react';
import { Row, Col, Tabs } from 'antd';
import { fetchImages } from '../actions/gallery.action';
import { connect } from 'react-redux';

function Gallery(props) {
  const { TabPane } = Tabs;
  useEffect(() => {
    props.getImages();
    
  },[]);

  return (
    <div>
      <div>
      <Row>
        <div className='bg-fruit'>
            <h2 className='bg-title'>GRID GALLERY</h2>
        </div>
      </Row>
    </div>
      <div className='gal-tabs'>
        <Row>
        <Col xs={24} md={{span:8,offset:8}}>
            <Tabs defaultActiveKey="organics">
              <TabPane tab="ORGANICS" key="organics">
              {props.myImages.map(image => {
                        return(
                <img src={image.urls.full} alt="image organics" style={{height:'250px',width:"100%"}}/>
                )
              })}
              </TabPane>
              <TabPane tab="FRUITS" key="fruits">
              {props.myImages.map(image => {
                        return(
                <img src={image.urls.full} alt="image fruits" style={{height:'250px',width:"100%"}}/>
                )
              })}
              </TabPane>
              <TabPane tab="VEGETABLES" key="vegetables">
              {props.myImages.map(image => {
                        return(
                <img src={image.urls.full} alt="image vegetables" style={{height:'250px',width:"100%"}}/>
                )
              })}
              </TabPane>
            </Tabs>
          </Col>
       
          </Row>
      </div>
    </div>
    
  )
}

const mapStateToProps = state => {
  return {
      myImages: state.gallery.images
  }
}

const mapDispatchToProps = dispatch => {
  return {
      getImages:()=> dispatch(fetchImages())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Gallery);