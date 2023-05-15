import React from 'react'


function Footer() {
  return (
    <>
        <footer>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 col-md-6 col-12 mb40'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries....</p>
                        <div className='fsocila_media'>
                            <a href="https://www.linkedin.com/company/seekexapp/mycompany/" target="_blank" rel="noreferrer">
                                <img src="/img/footer/facebook.svg" alt="Facebook" /></a>
                                <a href="https://www.linkedin.com/company/seekexapp/mycompany/" target="_blank" rel="noreferrer">
                                <img src="/img/footer/twitter.svg" alt="twitter" /></a>
                                <a href="https://instagram.com/seekexapp?utm_medium=copy_link" target="_blank" rel="noreferrer">
                                <img src="/img/footer/insta.svg" alt="insta" /></a>
                                <a href="https://www.linkedin.com/company/seekexapp/mycompany/" target="_blank" rel="noreferrer">
                                <img src="/img/footer/linkedin.svg" alt="linkedin" /></a>
                                <a href="https://www.linkedin.com/company/seekexapp/mycompany/" target="_blank" rel="noreferrer">
                                <img src="/img/footer/pin.svg" alt="pin" /></a>
                        </div>
                    </div>
                    <div className='col-lg-5 col-md-6 col-12 d-flex mb40 d-jca m-jcsb' >
                        <div className='fmenu'>
                            <h3>ONLINE SHOPPING</h3>
                            <ul>
                                <li><a href="#link">Men’s T-Shirts </a></li>
                                <li><a href="#link">Women’s Wear</a></li>
                                <li><a href="#link">Winter Collections</a></li>
                                <li><a href="#link">Hooded T-Shirts</a></li>
                                <li><a href="#link">Streetwear Collectionss</a></li>
                             </ul>
                        </div>
                        <div className='fmenu'>
                            <h3>CUSTOMER POLICIES</h3>
                            <ul>
                            <li><a href="#link">About Us</a></li>
                                <li><a href="#link">Terms & Conditions</a></li>
                                <li><a href="#link">Shipping & Returns Policy</a></li>
                                <li><a href="#link">Cancellation & Refund Policy</a></li>
                                <li><a href="#link">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-12 col-12 fmenu mb40'>
                        <h3>STORE INFORMATION</h3>
                        <ul>
                            <li className='d-flex align-items-start mb10'><img src="/img/footer/location.svg" className='mt5 mr5' alt="Location icon" /> <span>Lorem Ipsum is simply dummy text of the printing and typesetting. </span></li>
                            <li className='d-flex align-items-start mb10'><img src="/img/footer/phone.svg" className='mt5 mr5' alt="Location icon" /> <a href="tel:1234567890" target="_blank" rel="noreferrer">Call Us: 1234567890</a></li>
                            <li className='d-flex align-items-start mb10'><img src="/img/footer/mail.svg" className='mt5 mr5' alt="Location icon" />  <a href="mailto:info@yourmail.com" target="_blank" rel="noreferrer">Email Us: info@yourmail.com</a></li>
                        
                        </ul>
                    </div>
                </div>
            </div>

            <div className='bottomFooter'>
                <p>©2022-23 Powered By dummy team</p>
            </div>
        </footer>
    </>
  )
}

export default Footer