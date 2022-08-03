import React from 'react';
import Header from './Header';
import Copyright from './Copyright';

export default function Portfolio() {

  const handleSubmit = (i) => {
    i.preventDefault();
    alert("Message Sent");
  }

  return (
    <>

      {/* ========================= TOP BUTTON ========================= */}
      <a href="#top" className="top">
        <i className="fa fa-angle-up"></i>
        <i className="fa fa-angle-up angle"></i>
      </a>

      {/*  ========================= HEADER  ========================= */}
      <Header />

      {/* ========================= PORTFOLIO ========================= */}
      <section className='portfolio'>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <div>
                <h1>Hey, I'm Sujan Chaudhary</h1>
                <small className='text-muted'>Front-End Developer (loading.......)</small>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aperiam in nobis corporis! Temporibus veniam, fuga quae voluptate ab unde!</p>
                <a href="https://github.com/sujanChy00" target='_blank' className="btn">Know More</a>
              </div>
            </div>
            <div className="col-md-5 col-8 mx-md-0 mx-auto">
              <div><img src="/img/profile.png" alt="" /></div>
            </div>
          </div>
        </div>
      </section>


      {/* ========================= PORTFOLIO INFO ========================= */}
      <section className="portfolio-info">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 col-sm-6 col-10 text-sm-start text-center mx-sm-0 mx-auto pb-sm-0 pb-3">
              <h2>Heading</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, vero.</p>
            </div>
            <div className="col-md-4 col-sm-6 col-8 form">
              <form action="" className='input-group' onSubmit={handleSubmit}>
                <input type="email" placeholder='your text' className='form-control' />
                <button className='input-group-text'>Send</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= COPYRIGHT ========================= */}
      <Copyright />
    </>
  )
}
