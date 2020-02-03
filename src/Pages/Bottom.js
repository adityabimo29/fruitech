import React from 'react';
import { Form, Input, Button, Row,Col } from 'antd';
import logoku from '../images/logo.png';

export default function Bottom() {
    return (
        <div>
            <Row type="flex" justify="space-around">
                <Col span={6}>
                    <img alt='logo' src={logoku} />
                    <p>Weekdays: <span style={{color:"grey"}}>08:00am - 08:00pm</span> </p>
                    <p>Weekdays: <span style={{color:"grey"}}>08:00am - 08:00pm</span> </p>
                    <hr />
                </Col>
                <Col span={6}>
                    <h2 style={{fontSize:"2em",fontWeight:600}}>Contacts</h2>
                    <p><i className='fa fa-map-marker'></i> 523 Sylvan Ave, 5th Floor Mountain View, USA</p>
                    <p><i className='fa fa-phone'></i> +62 86453534 </p>
                    <p><i className='fa fa-envelope'></i> info@fruitech</p>
                </Col>
                <Col span={8}>
                    <h2 style={{fontSize:"2em",fontWeight:600}}>GET IN TOUCH</h2>
                    <p>Subscribe to our newsletter to receive weekly news, updates, special offers, and exclusive discounts.</p>
                </Col>
            </Row>
        </div>
    )
}
