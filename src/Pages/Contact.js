import React from 'react';
import { Form, Input, Button, Row,Col } from 'antd';
import {connect} from 'react-redux';
import { addContact } from '../actions/contact.action';
class Contact extends React.Component {

  state = {
          name:'',
          email:'',
          subject:'',
          message:''
  }

  handleChange = e => {
      let name = e.target.name;
      let val = e.target.value;
      if(name === 'name'){
        this.setState({name:val});
      }else if(name === 'email'){
        this.setState({email:val});
      }else if(name === 'subject'){
        this.setState({subject:val});
      }else if(name === 'message'){
        this.setState({message:val});
      }
      
  }

  handleSubmit = e => {
      e.preventDefault();
      const {name,email,subject,message} = this.state;
      this.props.sendContact({name: name,email:email,subject:subject,message:message});

  }

  
    
  render() {
    const { TextArea } = Input;

    return (
      <div>
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
                <Form layout="vertical" onSubmit={this.handleSubmit}>
                    <Form.Item  >
                        <Input name='name' onChange={this.handleChange} placeholder="Your Name" />
                    </Form.Item>
                    <Form.Item>
                        <Input name='email' onChange={this.handleChange} placeholder="Your Email" />
                    </Form.Item>
                    <Form.Item>
                        <Input name='subject' onChange={this.handleChange} placeholder="Subject" />
                    </Form.Item>
                    <Form.Item>
                        <TextArea name='message' onChange={this.handleChange} rows={4} placeholder="Your Message"></TextArea>
                    </Form.Item>
                    <Form.Item >
                        <Button htmlType='submit' size='large' type="danger" >SEND</Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>{
    return{
        sendContact:(data) => dispatch(addContact(data))
    }
}

export default connect(null,mapDispatchToProps)(Contact);