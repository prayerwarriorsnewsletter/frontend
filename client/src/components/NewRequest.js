import React, {useState} from "react";
import {postRequest} from '../firebase-utils/server-calls.js'

const NewRequest = () => {

  const [request, setRequest] = useState({})

  const handleChange = (event) => {
      setRequest({
        ...request,
        [event.target.name]:event.target.value
      })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    //request function goes here
    console.log(request)
    postRequest(request)
  }

  return (
    <div className='new-request-card'>
      <h2>New Request Form</h2>
      <form onSubmit = {handleSubmit}>
        <label>Name:</label>
        <input
          type = 'text'
          name = 'name'
          value = {request.value}
          onChange = {handleChange}
        />
        <label>Email:</label>
        <input
          name = 'email'
          type = 'email'
          value = {request.value}
          onChange = {handleChange}
        />
        <label>Prayer Request:</label>
        <textarea
          type = 'text'
          name = 'request'
          value = {request.value}
          onChange = {handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default NewRequest;
