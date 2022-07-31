import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Blog() {


    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
            setData(res.data)
        })
    }, [])

    return (
        <>
            {/* ========================= TOP BUTTON ========================= */}
            <a href="#top" className="top">
                <i className="fa fa-angle-up"></i>
                <i className="fa fa-angle-up angle"></i>
            </a>

            {/* ========================= BLOG SECTION ========================= */}
            <section className="blog" id='top'>
                <Header />
                <div className="container">
                    <div className="row flex-wrap">
                        {data.map((i) => (
                            <div className="col-md-3 col-6">
                                <div className="card h-100">
                                    <img className="card-img-top" src="/img/bunny.png" alt="" />
                                    <div className="card-body">
                                        <h3 className="card-title">{i.username}</h3>
                                        <p className="card-text">{i.name}</p>
                                    </div>
                                    <div className="card-footer">
                                        <Link to={`/userData/${i.id}`} >Know More</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Footer />
            </section>

        </>
    )
}
