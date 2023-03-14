import React from 'react'

const Head = () => {
  return (
    <div>
        <section className="head">
            <div className="container d_flex">
                <div className="left row">
                    <i className="fa fa-phone"></i>
                    <label>+63 916 435 8418</label>
                    <i className="fa fa-envelope"></i>
                    <label>dustgutierrez@gmail.com</label>
                </div>
                <div className="right row RText">
                  <label>Theme FAQ's</label>
                  <label>Need Helps</label>
                  <span role="img" aria-label='none'> 🇵🇭</span>
                  <label >PH</label>
                  <span role="img" aria-label='none'> 🇺🇸</span>
                  <label >US</label>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Head