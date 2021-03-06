import React,{useEffect,useState} from 'react'
import { Carousel,Button,Row,Col,Card,Tabs } from 'antd';
import {withRouter} from 'react-router';
import {Link} from 'react-router-dom';
import FarmOne from '../images/our-farm-1.jpg';
import farmImageOne from '../images/farm-1.jpg';
import farmImageTwo from '../images/farm-2.jpg';
import farmImageThree from '../images/farm-3.jpg';
import farmImageFour from '../images/farm-4.jpg';
import avates from '../images/avatar.jpg'
import { connect,useDispatch } from 'react-redux';
import { fetchImages, addSubscribe, fetchSubs, fetchPosts } from '../actions/home.action';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Pics1 from "../images/clients-1-120x114.png";
import Pics2 from "../images/clients-2-105x118.png";
import Pics3 from "../images/clients-3-111x98.png";
import Pics4 from "../images/clients-4-122x92.png";
import Pics5 from "../images/clients-5-112x112.png";

function Home(props) {
    const { TabPane } = Tabs;

    const [subscribe,setSubscribe] = useState({
        email:''
    });

    const handleChange = (e) =>{
        let val = e.target.value;
        setSubscribe({email:val});
        
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.addSubs(subscribe);
        alert('you have been successfully subscribed');
        //window.location.reload();
        setSubscribe({email:''});
    }
    const dispatch = useDispatch()
    const dispatch2 = useDispatch()
    useEffect(() => {
        dispatch(fetchPosts());
        dispatch2(fetchImages());
        
      },[dispatch,dispatch2]);

      //console.log(props.myImages)

      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

      const { Meta } = Card;
      
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
                    <h1 style={{fontWeight:600,fontSize:"3em",textAlign:'center'}}>WHY ORGANIC ?</h1>
                    <Col xs={{span:18,offset:3}} md={{span:12,offset:12}}>
                        <Row>
                            
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
                    <Col xs={{span:18,offset:3}} md={{span:10,offset:2}}>
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
                        <Button style={{marginTop:"10px",marginBottom:'10px'}} type="danger" size='large'>READ MORE</Button>
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
                <Row>
                    {props.myImages.map(image => {
                        return(
                            <Col xs={24} md={{span:8}} key={image.id} className='overlayku'>
                                <img className='imageku' style={{height:'300px',width:"100%"}} alt={image.id} src={image.urls.full} />
                                <div className='middleku'>
                                    <i style={{color:"red"}} className='fa fa-eye fa-3x'></i>
                                </div>
                            </Col>
                        )
                    })}
                    
                </Row>
            </div>{/* End PartNyan 3  */}
            <div className='partNyan-5'>
                <Row>
                    <form onSubmit={handleSubmit}>
                        <Col xs={{span:18,offset:3}} md={{span:4,offset:2}}>
                            <h1 style={{fontWeight:600,fontSize:"3em"}} >STAY CONNECTED</h1>
                            <p>Subscribe to our newsletter</p>
                        </Col>
                        <Col xs={24} md={{span:12}}>
                            <input style={{border:'none',borderBottom:"2px solid black",backgroundColor:'transparent',marginTop:'10%',marginLeft:'10%',width:"80%",height:"50px"}} placeholder="Your Email" value={subscribe.email} onChange={handleChange} />
                        </Col>
                        <Col xs={24} md={{span:5}}>
                            <Button htmlType='submit' type="danger" size='large' block style={{marginTop:"25%"}}>SUBSCRIBE</Button>
                        </Col>
                    </form>
                </Row>
            </div>{/* End PartNyan 5  */}
            <div className='partNyan-6'>
                <Row>
                    <h1 style={{textAlign:'center',fontWeight:600,fontSize:'3em'}}>TESTIMONIALS</h1>
                    <Col xs={24} md={{span:18,offset:3}}>
                    <p style={{textAlign:'center'}}>I Just can't say enough good things about your farms and your products you provide. Since i first bought your apple at local store. I'm your regular customer . Thank you for everyhting!</p>
                    <img style={{margin:'0 auto',display:'block',borderRadius:'50%'}} alt='avates' src={avates} />
                    <p style={{textAlign:'center'}}>James Smith</p>
                    <p style={{color:'red',textAlign:'center'}}>Client</p>
                    </Col>
                </Row>
            </div>{/* End PartNyan 6  */}
            <div className='partNyan-7'>
            <Row>
                <Col xs={24} md={{span:18,offset:3}}>
                <h1 style={{fontSize:'3em',fontWeight:600,textAlign:'center'}}>OUR BLOG</h1>
                <Slider {...settings}>
                {props.posty.map(post => {
                    return(
                        <Card
                        style={{padding:"20px",width:240}}
                        key={post.id}
                        hoverable
                        cover={<img alt="example" src={post.image} style={{height:"200px"}} />}
                        >
                        <Link to={`/blog/${post.id}`}>
                        <Meta title={post.title} description={post.body} />
                        </Link>
                        </Card>
                    )
                })}
                </Slider>
                </Col>
            </Row>
            </div>{/* End PartNyan 7  */}

            <div className='partNyan-8' style={{marginTop:'20px'}}>
                        <div className="promotionBanners">
                            <img src={Pics1} alt="100 Percent Organic" />
                            <img src={Pics2} alt="Fresh Vegan Food" />
                            <img src={Pics3} alt="Locally Grown" />
                            <img src={Pics4} alt="100 Percent Organic Product" />
                            <img className='prato' src={Pics5} alt="Vegan Food" />
                        </div>
            </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        myImages: state.home.images,
        mySubs:state.home.subs,
        posty:state.home.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getImages:()=> dispatch(fetchImages()),
        getSubs:()=>dispatch(fetchSubs()),
        addSubs:(email)=> dispatch(addSubscribe(email)),
        getPosts:()=> dispatch(fetchPosts())
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Home));
// export default Home(
//     withRouter,
//     connect(mapStateToProps, mapDispatchToProps)
//   )(Home);