import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from './Footer';

export default function About() {

  return (
    <>
      {/* ========================= FLOATING BUTTON ========================= */}
      <a href="#top" className="top">
        <i className="fa fa-angle-up"></i>
        <i className="fa fa-angle-up angle"></i>
      </a>

      {/* ========================= HOME BUTTON ========================= */}
      <NavLink to='/' className='home-btn'><i className="fa fa-arrow-left"></i>Go Back to Home</NavLink>
      <section className='about' id='top'>
        <div className="container">

          {/* ========================= PLAY BUTTON ========================= */}
          <div className="play-btn">
            <i type="button" class="btn fa fa-play-circle" data-bs-toggle="modal" data-bs-target="#exampleModal">
            </i>
          </div>

          {/* ========================= MODAL ========================= */}

          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg ">
              <div class="modal-content">
                <div class="modal-header border-0">
                  <i type="button" class="btn-close bi bi-x" data-bs-dismiss="modal" aria-label="Close"></i>
                </div>
                <div class="modal-body">
                  <iframe width="100%" height="380" src="https://www.youtube.com/embed/hZLMv5aexto" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================= FOOTER ========================= */}
      <Footer/>

    </>
  )
}
