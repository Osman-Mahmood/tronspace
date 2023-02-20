import React from 'react'
import logo from '../../assets/logo.png'
import './Footer.css'
const Footer = () => {
  return (
    <div>
      	
		<footer class="footer-07">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-md-12 text-center">
						<p class="menu">
							<a href="#">Presentation</a>
							<a href="#">Audit</a>
							<a href="#">Telegram Group</a>
							<a href="#">Support Email</a>
						</p>
					</div>
                    <img className='footer_logo' src={logo} alt="logo" />
                    <p className='text-center text-white'>© 2023 All Rights Reserved TronSpace</p>
                    <button className='footer_btn text-center mb-4'>TXBC2V67KoFESR4eRzejMqTE5oxaJSrigM</button>
				</div>
				
			</div>
		</footer>
		
    </div>
  )
}

export default Footer
