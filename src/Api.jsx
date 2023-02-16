import { useState } from 'react';
import { React, useEffect } from 'react'

function Api() {

    const [user, setUser] = useState([]);

    const getUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
        setUser(await response.json());
    }

    useEffect(() => {
        getUsers();
    },[]);
    
    return (
        <>
            <section >
                <div className='container'>
                    <div className='row'>
                        {
                            user.map((curEle) => {
                                return (
                                    <div className='col-m3' key={curEle.id}>
                                        <div className='news_sec'>
                                            <img src={curEle.url} alt='News Image' />
                                            <h4>{curEle.title}</h4>
                                            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                                            <a href={curEle.url} className='rd_more'> Read More </a>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Api
