import React from 'react'

const Footer = () => {
  return (
    <div className=" flex flex-col  justify-center  items-center bg-footer w-footer h-footer bg-cover bg-center">
      <div className="footer-description text-white text-center mb-12">
        <h2 className="text-4xl">Subscribe to our newsletter</h2>
        <p className="text-2xl font-light mt-4">Promotions, new products and sales. Directly to your inbox.</p>
      </div>
      <div>
        <input
          placeholder="Your Email"
          className="email-input mr-2 pl-4 w-email h-email text-white focus:ring-yellow placeholder-white border-white border-solid border hover:placeholder-primary rounded-primary bg-transparent outline-none"
        />
        <button className="subscribe-button rounded-primary w-button h-button uppercase text-sm cursor-pointer bg-button-100 hover:bg-button-200 text-white">
          Subscribe
        </button>
      </div>
    </div>
  )
}

export default Footer
