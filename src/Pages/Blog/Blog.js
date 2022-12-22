import React from 'react';
import UseTitle from '../../Title/UseTitle';

const Blog = () => {
  UseTitle("Blog")
  return (
    <div className='mb-80 mt-48'>
      <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
      <div className="collapse-title text-2xl font-medium">
        <p>Question-01 : <span>Difference Between SQL and NoSQL ?</span></p>
      </div>
      <div className="collapse-content"> 
        <p className='text-xl'>Answer : <span> SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</span></p>
      </div>
    </div>
      <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
      <div className="collapse-title text-2xl font-medium">
        <p>Question-02 : <span>Difference between javascript and Node JS ?</span></p>
      </div>
      <div className="collapse-content"> 
        <p className='text-xl'>Answer : <span>Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development</span></p>
      </div>
    </div>
      <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
      <div className="collapse-title text-2xl font-medium">
        <p>Question-03 : <span>What is JWT ?</span></p>
      </div>
      <div className="collapse-content"> 
        <p className='text-xl'>Answer : <span>JSON Web Token is a proposed Internet standard for creating data with optional signature and/or optional encryption whose payload holds JSON that asserts some number of claims. The tokens are signed either using a private secret or a public/private key.</span></p>
      </div>
    </div>
      <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
      <div className="collapse-title text-2xl font-medium">
        <p>Question-04 : <span>How does Nodejs handle multiple request at the same time ?</span></p>
      </div>
      <div className="collapse-content"> 
        <p className='text-xl'>Answer : <span>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</span></p>
      </div>
    </div>
    </div>
  );
};

export default Blog;