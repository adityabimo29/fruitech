import React from 'react';
import { Form, Input, Button, Row,Col } from 'antd';
import Footerku from './Bottom';
import Top from './Top';
class Contact extends React.Component {

    
  render() {
    const { TextArea } = Input;

    return (
      <div>
        <Top />
        <Row>
            <div className='bg-fruit'>
                <h2 className='bg-title'>Contacts</h2>
            </div>
        </Row>
        <Row>
            <Col xs={24} md={12}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15864.206637175617!2d106.8146575!3d-6.2569254!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1392b5623d84313b!2sImpact%20Byte%20Jakarta!5e0!3m2!1sid!2sid!4v1580712096568!5m2!1sid!2sid" width="100%" height="535" title="myFrame"></iframe>
            </Col>
            <Col xs={24} md={12} style={{paddingLeft:"20px"}}>
                <h2 style={{fontSize:"4em"}}>Contacts</h2>
                <p><i className='fa fa-map-marker'></i> 523 Sylvan Ave, 5th Floor Mountain View, CA 94041 USA</p>
                <p><i className='fa fa-phone'></i> +62 (844) 123 456 78</p>
                <Form layout="vertical">
                    <Form.Item  >
                        <Input placeholder="Your Name" />
                    </Form.Item>
                    <Form.Item>
                        <Input placeholder="Your Email" />
                    </Form.Item>
                    <Form.Item>
                        <Input placeholder="Subject" />
                    </Form.Item>
                    <Form.Item>
                        <TextArea rows={4} placeholder="Your Message"></TextArea>
                    </Form.Item>
                    <Form.Item >
                        <Button size='large' type="danger" >SEND</Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
        <Footerku />
      </div>
    );
  }
}

export default Contact