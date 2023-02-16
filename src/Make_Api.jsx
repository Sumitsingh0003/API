import React from 'react'

export default function Make_Api() {

const http = require('http');
http.createServer((req, resp)=>{
  resp.writeHead(200, {'content-Type':'application\json'});
  resp.write(JSON.stringify({name:'Sumit', email:'sumit@gmail.com', contact:'0987654321'}));
  resp.end();
});

  return (
    <>
      <section >
        <div className='container'>
          <div className='row'>
            <div className='col-m3'>
              <h2>Make API</h2>
            </div>
          </div>
        </div>
      </section>
      
    </>
  )
}
