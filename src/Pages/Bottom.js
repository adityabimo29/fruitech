import React from 'react';
import { Input, Button, Row,Col } from 'antd';
import logoku from '../images/logo.png';

export default function Bottom() {
    return (
        <div style={{padding:"3em 0 2em 0"}}>
            <Row type="flex" justify="space-around">
                <Col xs={24} md={6}>
                    <img alt='logo' src={logoku} style={{marginBottom:"10px"}} />
                    <p>Weekdays: <span style={{color:"grey"}}>08:00am - 08:00pm</span> </p>
                    <p>Weekdays: <span style={{color:"grey"}}>08:00am - 08:00pm</span> </p>
                    <hr />
                    <a href='https://facebook.com' className='iconku'><i className='fa fa-facebook fa-2x'></i></a>
                    <a href='https://twitter.com' className='iconku'><i className='fa fa-twitter fa-2x'></i></a>
                    <a href='https://instagram.com' className='iconku'><i className='fa fa-instagram fa-2x'></i></a>
                </Col>
                <Col xs={24} md={6}>
                    <h2 style={{fontSize:"2em",fontWeight:600}}>Contacts</h2>
                    <p><i className='fa fa-map-marker'></i> 523 Sylvan Ave, 5th Floor Mountain View, USA</p>
                    <p><i className='fa fa-phone'></i> +62 86453534 </p>
                    <p><i className='fa fa-envelope'></i> info@fruitech</p>
                </Col>
                <Col xs={24} md={8}>
                    <h2 style={{fontSize:"2em",fontWeight:600}}>GET IN TOUCH</h2>
                    <p>Subscribe to our newsletter to receive weekly news, updates, special offers, and exclusive discounts.</p>
                    <Row>
                        <Col span={14} style={{marginRight:"10px"}}>
                        <Input size="large" placeholder="Enter Your Email Address" />
                        </Col>
                        <Col span={8}>
                        <Button type="danger" size='large'>SUBSCRIBE</Button>
                        </Col>
                    </Row>
                    
                </Col>
            </Row>
            <Row type="flex" justify="center" style={{paddingTop:"20px"}}>
                <p>© 2020 Fructesh. All rights reserved. Design by Zemez</p>
            </Row>
        </div>
    )
}
