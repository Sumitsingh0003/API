import {React, useState, useEffect} from 'react'



    export default function Main() {

    const [count, changeCount] = useState(0);
    const [data, changedata] = useState(10);

    useEffect(() =>{
        console.log('called Count useEffects');
    }, [count])


    useEffect(() =>{
        console.log('called Data useEffects');
    }, [data])



  return (
    <>
    <section >
    <div className='container'>
        <div className='row'>
            <div className='col-m3'>
                <div className='news_sec'>
                    <img src='https://via.placeholder.com/600/92c952' alt='News Image' />
                    <h4>Title</h4>
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                </div>

                
            </div>
            <div className='col-m3'>
                <div className='news_sec'>
                    <p>Count Number {count} </p>

                    <button onClick={()=>changeCount(count+1)} > Update Count </button>
                </div>
            </div>

            <div className='col-m3'>
                <div className='news_sec'>
                    <p>Data Number {data} </p>

                    <button onClick={()=>changedata(data+1)} > Update Data </button>
                </div>
            </div>
        </div>
    </div>
    </section>




    




    </>
  )
}

