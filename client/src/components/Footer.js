import React from 'react'

const Footer = () => {
  return (
    <div className="relative flex flex-col  justify-center  items-center w-full h-footer bg-cover bg-footer bg-top opacity50">
      <div className="footer-description text-white text-center mb-12">
        <h2 className="text-4xl">Subscribe to our newsletter</h2>
        <p className="text-2xl font-light mt-4">Promotions, new products and sales. Directly to your inbox.</p>
      </div>
      <div className="flex flex-col justify-center md:flex-row">
        <input
          placeholder="Your Email"
          className="email-input mr-2 pl-4 w-email h-email text-white focus:ring-yellow placeholder-white border-white border-solid border hover:placeholder-primary rounded-primary bg-transparent outline-none"
        />
        <button className="subscribe-button rounded-primary w-button h-button uppercase text-sm cursor-pointer bg-button-100 hover:bg-button-200 text-white mx-auto mt-7 md:mt-0 md:mx-0">
          Subscribe
        </button>
      </div>
    </div>
  )
}

export default Footer
