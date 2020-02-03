import React from 'react'
import { Carousel,Button,Row,Col,Card,Tabs } from 'antd';
import FarmOne from '../images/our-farm-1.jpg';
import farmImageOne from '../images/farm-1.jpg';
import farmImageTwo from '../images/farm-2.jpg';
import farmImageThree from '../images/farm-3.jpg';
import farmImageFour from '../images/farm-4.jpg';

export default function Home() {
    const { TabPane } = Tabs;

    return (
        
        <div>
            <Carousel autoplay>
                <div>
                    <div className='slide-1'>
                        <Row style={{marginTop:"10%"}}>
                            <Col xs={24} md={{span:12,offset:2}}>
                                <h1 style={{fontWeight:600}}>PROVIDING QUALITY PRODUCTS</h1>
                                <h1 style={{fontWeight:600,fontSize:"3em"}}>ORGANIC FRUITS</h1>
                                <h1>100% HEALTHY & AFFORDABLE</h1>
                                <Button type="danger" size='large'>ABOUT US</Button>
                            </Col>
                        </Row>
                        
                    </div>              
                
                </div>
                <div>
                    <div className='slide-2'>
                        <Row style={{marginTop:"10%"}}>
                            <Col xs={24} md={{span:12,offset:2}}>
                                <h1 style={{fontWeight:600}}>SUMMER DISCOUNT UP TO 40%</h1>
                                <h1 style={{fontWeight:600,fontSize:"3em"}}>A WIDE VARIETY</h1>
                                <h1>OF DIFFERENT FRUIT AFFORDABLE</h1>
                                <Button type="danger" size='large'>ABOUT US</Button>
                            </Col>
                        </Row>
                    </div>              
                
                </div>
            </Carousel>
            <div className='partNyan-1' style={{marginTop:"-6px"}}>
                <Row>
                    <Col xs={24} md={{span:12,offset:12}}>
                        <Row>
                            <h1 style={{fontWeight:600,fontSize:"3em"}}>WHY ORGANIC ?</h1>
                            <Col xs={24} md={12} style={{marginBottom:"10px"}}>
                                <Card style={{ width: 300 }}>
                                <i className='fa fa-cubes fa-2x'></i>
                                <h3 style={{fontWeight:600,marginTop:'10px'}}>ALWAYS FRESH</h3>
                               
                                <p>We deliver our products always fresh & organic so that you could enjoy your meal.</p>
                                </Card>
                            </Col>
                            <Col xs={24} md={12} style={{marginBottom:"10px"}}>
                                <Card style={{ width: 300 }}>
                                <i className='fa fa-cubes fa-2x'></i>
                                <h3 style={{fontWeight:600,marginTop:'10px'}}>MODERN FARM</h3>
                                
                                <p>We deliver our products always fresh & organic so that you could enjoy your meal.</p>
                                </Card>
                            </Col>
                            <Col xs={24} md={12} style={{marginBottom:"10px"}}>
                                <Card style={{ width: 300 }}>
                                <i className='fa fa-cubes fa-2x'></i>
                                <h3 style={{fontWeight:600,marginTop:'10px'}}>100% ORGANIC</h3>
                                
                                <p>We deliver our products always fresh & organic so that you could enjoy your meal.</p>
                                </Card>
                            </Col>
                            <Col xs={24} md={12} style={{marginBottom:"10px"}}>
                                <Card style={{ width: 300 }}>
                                <i className='fa fa-cubes fa-2x'></i>
                                <h3 style={{fontWeight:600,marginTop:'10px'}}>NO PESTICIDES</h3>
                                <p>We deliver our products always fresh & organic so that you could enjoy your meal.</p>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>{/* End PartNyan 1  */}
            <div>
            <div className="partNyan-2">
                <Row>
                    <Col xs={24} md={{span:10,offset:2}}>
                        <h1 style={{color:"red"}}>BEST FRUITS SINCE 1999</h1>
                        <h1 style={{fontWeight:600,fontSize:"3em"}}>OUR FARM</h1>
                        <h1 style={{fontSize:"3em"}}>WHO WE ARE</h1>
                        <Tabs defaultActiveKey="1" >
                            <TabPane tab="ABOUT" key="1">
                            Since its foundation, Orange offers best organic fruits for local residents, fruit markets, and guests of our city. We are dedicated to improving your healthy food standards.
                            </TabPane>
                            <TabPane tab="OUR MISSION" key="2">
                            Since its foundation, Orange offers best organic fruits for local residents, fruit markets, and guests of our city. We are dedicated to improving your healthy food standards.
                            </TabPane>
                            <TabPane tab="OUR VISION" key="3">
                            Since its foundation, Orange offers best organic fruits for local residents, fruit markets, and guests of our city. We are dedicated to improving your healthy food standards.
                            </TabPane>
                        </Tabs>
                        <Button style={{marginTop:"10px"}} type="danger" size='large'>READ MORE</Button>
                    </Col>
                    <Col xs={24} md={{span:10,offset:1}}>
                        <img alt='farm-1' src={FarmOne} style={{height:'350px',width:"100%"}} />
                        <Row>
                            <Col xs={24} md={6} style={{padding:"10px"}}>
                                <img style={{width:"100%"}} alt='farmy' src={farmImageOne} />
                            </Col>
                            <Col xs={24} md={{span:6}} style={{padding:"10px"}}>
                                <img style={{width:"100%"}} alt='farmy' src={farmImageTwo} />
                            </Col>
                            <Col xs={24} md={{span:6}} style={{padding:"10px"}}>
                                <img style={{width:"100%"}} alt='farmy' src={farmImageThree} />
                            </Col>
                            <Col xs={24} md={{span:6}} style={{padding:"10px"}}>
                                <img style={{width:"100%"}} alt='farmy' src={farmImageFour} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>{/* End PartNyan 2  */}
            <div className='partNyan-3'>
                <h1 style={{fontWeight:600,fontSize:"3em",textAlign:"center"}}>FEATURED OFFERS</h1>
                <p style={{textAlign:"center"}}>Take a look at organic fruits that we offer on a regular basis.</p>
            </div>
            </div>
        </div>
    )
}
