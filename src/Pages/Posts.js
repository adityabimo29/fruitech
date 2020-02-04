import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../actions/posts.action';
import { Button, Row,Col } from 'antd';
import logoPost from '../images/post.jpg';

class Posts extends Component {

    componentDidMount = () => {
        this.props.fetchData();
    }

    render() {
       const  {data} = this.props;
       console.log(data);
        return (
            <div>
                <Row >
                    {data.map(item => {
                       return (
                        <Fragment key={item.id}>
                        <Col xs={24} md={{span:12,offset:6}} >
                            <h1 style={{textAlign:"center"}}>{item.title}</h1>
                            <img style={{width:"100%"}} alt='' src={logoPost} />
                            <p>{item.body}</p>
                            <Row>
                            <Col xs={24} md={4}>
                                <Button type="dashed" size='large'><i className='fa fa-comment'></i></Button>
                            </Col>
                            <Col xs={24} md={{span:4,offset:16}}>
                                <Button type="danger" size='large'>Read More</Button>
                            </Col>
                            </Row>
                        </Col>
                        
                        </Fragment>
                        )
                    })}
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        data: state.posts.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(fetchData())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Posts)
