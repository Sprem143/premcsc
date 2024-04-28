import './css/Home.scss';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from "react";
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
                        <h4>Website Development</h4>
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
                    <h2 className='mb-4 text-white'><b><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="me-3 bi bi-pen-fill" viewBox="0 0 16 16">
                        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001" />
                    </svg>About CSC</b></h2>
                    <p className='fs-5 text-white'>Common Service Centres (CSC) (जन सेवा केंद्र) are physical facilities for delivering Government of India e-Services to rural and remote locations where availability of computers and Internet was negligible. They are multiple-services-single-point model for providing facilities for multiple transactions at a single geographical location.</p>
                    <p className='fs-5 text-white'>
                        CSCs are the access points for delivery of essential public utility services, social welfare schemes, healthcare, financial, education and agriculture services, apart from host of B2C services to citizens in rural and remote areas of the country. It is a pan-India network catering to regional, geographic, linguistic and cultural diversity of the country, thus enabling the Government's mandate of a socially, financially and digitally inclusive society.
                    </p>
                </div>
                <div className='about_img'>
                    <img src="/static/about.jpg" alt="" />
                </div>
            </section>
            {/* --------our services-------------- */}
            <section className='service  mt-4 pt-4 mb-4 pb-4'>
                <h2 className="headings text-center text-danger fw-bold"><b>Our Services</b></h2>
                <div className="dfdr jc bottom_border">
                    <span className="one"></span>
                    <span className="two"></span>
                    <span className="one"></span>
                </div>
                <div class="container dfdr jcac text-center">
                    <div class="row">
                        <div class="jc col-lg-4 col-md-6 col-sm-12 mb-4">
                            <Card style={{ width: '19rem', minHeight: '500px' }}>
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


                        <div class=" jc col-lg-4 col-md-6 col-sm-12 mb-4">
                            <Card style={{ width: '19rem', minHeight: '500px' }}>
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


                        <div class="jc col-lg-4 col-md-6 col-sm-12 mb-4">
                            <Card style={{ width: '19rem', minHeight: '500px' }}>
                                <Card.Img variant="top" src="/static/ayushman.png" />
                                <Card.Body>
                                    <Card.Title> <h4><b>Ayushman Card Card</b></h4> </Card.Title>
                                    <Card.Text>
                                        PM-JAY is the world's largest health insurance/ assurance scheme fully financed by the government. It provides a cover of Rs. 5 lakhs per family per year
                                    </Card.Text>
                                    <Button variant="primary"><a className='text-white' href="https://beneficiary.nha.gov.in/">Know More</a></Button>                                </Card.Body>
                            </Card>
                        </div>

                        <div class="jc col-lg-4 col-md-6 col-sm-12 mb-4">
                            <Card style={{ width: '19rem', minHeight: '470px' }}>
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

                        <div class="jc col-lg-4 col-md-6 col-sm-12 mb-4">
                            <Card style={{ width: '19rem', minHeight: '470px' }}>
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

                        <div class="jc col-lg-4 col-md-6 col-sm-12 mb-4">
                            <Card style={{ width: '19rem', minHeight: '470px' }}>
                                <Card.Img variant="top" src="/static/pension.jpg" />
                                <Card.Body>
                                    <Card.Title> <h4><b>Pension Service</b></h4> </Card.Title>
                                    <Card.Text>
                                        Apply for Old Age Pension scheme to get pension. Instead of that, pension kyc service is also available here.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

<section className='website_dev dfdr'>
    <div>
   <img src="/static/web.jpg" alt="advertisement" className='adv' />
    </div>
    <div>
        <h2 className="text-center text-white">Website Development</h2>
        <p className='text-white'>We're thrilled to announce the newest addition to our suite of services: Website Development! In an increasingly digital world, having a strong online presence is paramount for businesses of all sizes. With expert developers, we're now equipped to bring your vision to life on the web. Whether you're a small startup looking to establish your brand online or a seasoned company in need of a website refresh, we're here to help. Our custom solutions are tailored to meet your unique needs, ensuring a seamless user experience and maximum impact. Let us take the hassle out of building and maintaining your online presence so you can focus on what you do best – running your business. Get in touch today to learn more about how our Website Development service can elevate your brand online!</p>
    </div>
</section>

            <section className="partner dfdc jcac mt-4 mb-4 p-4">
                <h2 className="text-center text-white"> <b>Our Partners</b> </h2>
                <div className="dfdr jc bottom_border">
                    <span className="one"></span>
                    <span className="two"></span>
                    <span className="one"></span>
                </div>

               <div className="slider-container dfdr se">
                    <Card style={{ width: '18rem', }}>
                        <Card.Img variant="top" src="/static/prem.png" className='br-50' />
                        <Card.Body>
                            <Card.Title> <h3><b>Prem Kumar</b></h3>
                                <h5 className="text-success">VLE & Web developer</h5>

                            </Card.Title>
                            <Card.Text>
                                My Service center (Prem Common service center) is located at Hariraha, ward No 09 in supaul District. <br />
                                <a href="https://www.google.com/maps/place/Prem+Common+Service+Centre/@26.3609819,86.867014,17z/data=!4m14!1m7!3m6!1s0x39ee550f79d68d51:0xb04831a7336a0a5!2sPrem+Common+Service+Centre!8m2!3d26.3609819!4d86.8695889!16s%2Fg%2F11n__14132!3m5!1s0x39ee550f79d68d51:0xb04831a7336a0a5!8m2!3d26.3609819!4d86.8695889!16s%2Fg%2F11n__14132?entry=ttu" target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="me-2 bi bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                        </svg>Visit location on map</a>
                            </Card.Text>
                            <Button variant="primary"><a href="/"><span className="text-white">Know more</span></a> </Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem',}} className='card_margin'>
                        <Card.Img variant="top" src="/static/ajay.png" className='br-50' />
                        <Card.Body>
                            <Card.Title> <h3><b>Ajay Kumar Sutihar</b></h3>
                                <h5 className="text-success">CSP and Mobile  accessories</h5>

                            </Card.Title>
                            <Card.Text>
                                My Service center (Jay Mata Di Service Center) is located at Hariraha, ward No 06 in supaul District. <br />
                                <a href="https://www.google.com/maps/place/Ramjanki+Thakurbari+Mandir/@26.3698586,86.8569651,19.91z/data=!4m6!3m5!1s0x39ee559c79900f3b:0xe2f3b45789c497a8!8m2!3d26.369745!4d86.8573472!16s%2Fg%2F11d_71h6hq?entry=ttu" target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="me-2 bi bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                        </svg>Visit location on map</a>
                            </Card.Text>
                            <Button variant="primary"><a href="/"><span className="text-white">Know more</span></a> </Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/static/prem.png" className='br-50' />
                        <Card.Body>
                            <Card.Title> <h3><b>Ram Kumar</b></h3>
                                <h5 className="text-success">CSP & Kirana Shop</h5>

                            </Card.Title>
                            <Card.Text>
                                My Service center (Baba Govind General Store) is located at Fakirna Chowk,Motipur in supaul District. <br />
                                <a href="https://www.google.com/maps/place/Md+Mustak+Meat+House/@26.3537909,86.8728036,19z/data=!4m6!3m5!1s0x39ee5520a358f671:0x8e42dae339b305b8!8m2!3d26.3537909!4d86.8734473!16s%2Fg%2F11vspj39wl?entry=ttu" target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="me-2 bi bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                        </svg>Visit location on map</a>
                            </Card.Text>
                            <Button variant="primary"><a href="/"><span className="text-white">Know more</span></a> </Button>
                        </Card.Body>
                    </Card>
                </div>  
            </section>
            <section className='gallery dfdc'>
                <h2 className="text-center text-white"><b><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="me-4 bi bi-camera-fill" viewBox="0 0 16 16">
  <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
  <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"/>
</svg>Gallery</b></h2>
                
                  <div className="gallery dfdr">

                  <div className='dfdr' style={{'--t':'20s'}}>
                      <img src="/static/g2.jpg" alt="" className='g'/>
                      <img src="/static/g3.jpg" alt="" className='g'/>
                      <img src="/static/g4.jpg" alt="" className='g'/>
                      <img src="/static/g5.jpg" alt="" className='g'/>
                      <img src="/static/g6.jpg" alt="" className='g'/>
                      <img src="/static/g7.jpg" alt="" className='g'/>
                   </div>
                   <div className='dfdr' style={{'--t':'20s'}}>
                      <img src="/static/g2.jpg" alt="" className='g'/>
                      <img src="/static/g3.jpg" alt="" className='g'/>
                      <img src="/static/g4.jpg" alt="" className='g'/>
                      <img src="/static/g5.jpg" alt="" className='g'/>
                      <img src="/static/g6.jpg" alt="" className='g'/>
                      <img src="/static/g7.jpg" alt="" className='g'/>
                   </div>
                  </div>
            </section>
        </>
    )
}