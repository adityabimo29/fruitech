import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getData} from '../actions/detail.action';
import {withRouter} from 'react-router-dom';
import logoPost from '../images/post.jpg';
import { Row,Col } from 'antd';

class DetailPost extends Component {

    componentDidMount = () => {
        this.props.getData(this.props.match.params.id)
    }
    
    render() {
        console.log(this.props.match.params.id);
        return (
            <Row style={{marginTop:"3em"}}>
                <Col xs={24} md={{span:12,offset:6}} >
                    <h1 style={{textAlign:"center"}}>{this.props.data.title}</h1>
                    <p>By {this.props.data.author}</p>
                        <img style={{width:"100%"}} alt='' src={this.props.data.image} />
                        <p>{this.props.data.body}</p>
                        <Row>
                        </Row>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = state => {
    return{
        data:state.detail.data
    }
}

const mapDispatchToProps = dispatch => {
    return{
        getData:(id)=> dispatch(getData(id))
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(DetailPost));


