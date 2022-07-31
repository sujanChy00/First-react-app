import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function UserData() {

    const [data, setData] = useState([]);
    const { info } = useParams();

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                setData(res.data)
            })
    }, [])

    let dataFetched = data.find((j) => j.id == info)

    return (

        <>
            <section className="userData">
                <div className="container">
                    <Link className='btn btn-info back-btn' to='/blog'>Back</Link>
                    <div className="card">
                        <div className="card-header">
                            <h3>{dataFetched?.username}</h3>
                            <div className="card-body">
                                <h5 className='card-titile'>Phone no: {dataFetched?.phone}</h5>
                                <p className='card-text'>Address: {dataFetched?.address.city}</p>
                                <p className='card-text'>Street: {dataFetched?.address.street}</p>
                                <p className='card-text'>Zipcode: {dataFetched?.address.zipcode}</p>
                            </div>
                            <div className="card-footer">
                                <a className='btn btn-info' href="">{dataFetched?.website}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
