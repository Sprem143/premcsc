import './css/Home.scss';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function Home() {

    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img src="/static/poster.jpg" alt="" className='cauresol_img' />

                </Carousel.Item>

                <Carousel.Item>
                    <img src="/static/poster4.png" alt="" className='cauresol_img' />
                    <Carousel.Caption className='c_caption'>
                        <h3>Website Development</h3>
                        <p>Make your own website for your business at lowest price</p>
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item>
                    <img src="/static/poster1.png" alt="" className='cauresol_img' />

                </Carousel.Item>
                <Carousel.Item>
                    <img src="/static/poster2.png" alt="" className='cauresol_img' />

                </Carousel.Item>
                <Carousel.Item>
                    <img src="/static/poster2.png" className='cauresol_img' alt="" />
                </Carousel.Item>
            </Carousel>
            {/* -----about section---------- */}
            <section className='about_sec dfdr ac se p-3 mt-4 mb-4'>
                <div className='about_text p-4'>
                    <h3 className='mb-4 text-white'><b><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="me-3 bi bi-pen-fill" viewBox="0 0 16 16">
                        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001" />
                    </svg>About CSC</b></h3>
                    <p className='fs-5 text-white'>Common Service Centres (CSC) (जन सेवा केंद्र) are physical facilities for delivering Government of India e-Services to rural and remote locations where availability of computers and Internet was negligible. They are multiple-services-single-point model for providing facilities for multiple transactions at a single geographical location.</p>
                    <p className='fs-5 text-white'>
                        CSCs are the access points for delivery of essential public utility services, social welfare schemes, healthcare, financial, education and agriculture services, apart from host of B2C services to citizens in rural and remote areas of the country. It is a pan-India network catering to regional, geographic, linguistic and cultural diversity of the country, thus enabling the Government's mandate of a socially, financially and digitally inclusive society.
                    </p>
                </div>
                <div className='about_img'>
                    <img src="/static/about.jpg" height="700" alt="" />
                </div>
            </section>
            {/* --------our services-------------- */}
            <section className='service  mt-4 pt-4 mb-4 pb-4'>
                <h2 className="text-center text-danger fw-bold"><b>Our Services</b></h2>
                <div className="dfdr jc bottom_border">
                    <span className="one"></span>
                    <span className="two"></span>
                    <span className="one"></span>
                </div>
                <div class="container dfdr jcac text-center">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                            <Card style={{ width: '19rem', minHeight:'500px' }}>
                                <Card.Img className='cards' variant="top" src="/static/pan.png" />
                                <Card.Body>
                                    <Card.Title> <h4><b>Pan Card</b></h4> </Card.Title>
                                    <Card.Text>
                                    Apply for new Permanent Account Number (PAN) card, changes or corrections in PAN data through online form on my CSC center.
                                    </Card.Text>
                                    <Button variant="primary">Know More</Button>
                                </Card.Body>
                            </Card>
                        </div>


                        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                            <Card style={{ width: '19rem', minHeight:'500px' }}>
                                <Card.Img variant="top" src="/static/eshram.png" />
                                <Card.Body>
                                    <Card.Title> <h4><b>E-Shram Card</b></h4> </Card.Title>
                                    <Card.Text>
                                    An initiative of the Ministry of Labour Dep.,is a step towards building the Aadhaar Authenticated Comprehensive NDUW.
                                    </Card.Text>
                                    <Button variant="primary"><a className='text-white' href="https://eshram.gov.in/">Know More</a></Button>
                                </Card.Body>
                            </Card>
                        </div>


                        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                            <Card style={{ width: '19rem', minHeight:'500px' }}>
                                <Card.Img variant="top" src="/static/ayushman.png" />
                                <Card.Body>
                                    <Card.Title> <h4><b>Ayushman Card Card</b></h4> </Card.Title>
                                    <Card.Text>
                                    PM-JAY is the world's largest health insurance/ assurance scheme fully financed by the government. It provides a cover of Rs. 5 lakhs per family per year
                                    </Card.Text>
                                    <Button variant="primary"><a className='text-white' href="https://beneficiary.nha.gov.in/">Know More</a></Button>                                </Card.Body>
                            </Card>
                        </div>

                        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                            <Card style={{ width: '19rem', minHeight:'500px' }}>
                                <Card.Img variant="top" src="/static/gst.jpg" />
                                <Card.Body>
                                    <Card.Title> <h4><b>GST Registration</b></h4> </Card.Title>
                                    <Card.Text>
                                    The Goods and Services Tax (GST) is a successor to VAT used in India on the supply of goods and services.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>

                        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                            <Card style={{ width: '19rem', minHeight:'500px' }}>
                                <Card.Img variant="top" src="/static/ippb.png" />
                                <Card.Body>
                                    <Card.Title> <h4><b>IPPB</b></h4> </Card.Title>
                                    <Card.Text>
                                        Now Open Indian Post Payment Bank account at our center. All related services are available.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>

                        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                            <Card style={{ width: '18rem', minHeight:'480px' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>


            </section>
        </>
    )
}