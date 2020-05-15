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
      <h2 className='form-title'>New Prayer Request</h2>
      <form className = 'request-form' onSubmit = {handleSubmit}>
        <label>Name:</label>
        <input
          className = 'request-input'
          type = 'text'
          name = 'name'
          value = {request.value}
          onChange = {handleChange}
        />
        <label>Email:</label>
        <input
          className = 'request-input'
          name = 'email'
          type = 'email'
          value = {request.value}
          onChange = {handleChange}
        />
        <label>Prayer Request:</label>
        <textarea
          className = 'request-text-input'
          type = 'text'
          name = 'request'
          value = {request.value}
          onChange = {handleChange}
        />
        <div className = 'submit-button' type='submit'>Submit</div>
      </form>
    </div>
  );
};

export default NewRequest;
