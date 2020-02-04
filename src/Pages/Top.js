import React, { Fragment } from 'react';
import { Layout, Menu, Row,Drawer } from 'antd';
import {
    Link,
  } from "react-router-dom";

export default class Top extends React.Component {

    state = { visible: false, placement: 'right' };

    showDrawer = () => {
        this.setState({
        visible: true,
        });
    };

    onClose = () => {
        this.setState({
        visible: false,
        });
    };

    onChange = e => {
        this.setState({
        placement: e.target.value,
        });
    };

    render(){
        const { Header } = Layout;
    return (
            <Fragment>
                <Header style={{backgroundColor:"WHITE"}}>
                    <Row type="flex" justify="space-around">
                    <div className="logo-nyan" />
                    <Menu
                        theme="light"
                        mode="horizontal"
                        // defaultSelectedKeys={['1']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1"><Link to='/'>Home</Link></Menu.Item>
                        <Menu.Item key="2">About</Menu.Item>
                        <Menu.Item key="3"><Link to='/team'>Team</Link></Menu.Item>
                        <Menu.Item key="4"><Link to='/gallery'>Gallery</Link></Menu.Item>
                        <Menu.Item key="5"><Link to='/blog'>Blog</Link></Menu.Item>
                        <Menu.Item key="6"><Link to='/contacts'>Contacts</Link></Menu.Item>
                    </Menu>
                    <i style={{marginTop:"15px",}} className="fa fa-bars fa-2x" onClick={this.showDrawer} aria-hidden="true"></i>
                    
                    <Drawer
                    title="Basic Drawer"
                    placement={this.state.placement}
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    </Drawer>
                    </Row>
                </Header>
            </Fragment>
    )
    }
}

