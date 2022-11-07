import React, { useState }  from 'react'
import { submitData, validate } from '../Assets/Scripts/submit_and_validation'
import Breadcrumb from '../Components/Home/Breadcrumb'

const Contact = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [comments, setComments] = useState('')
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [failedSubmit, setFailedSubmit] = useState(false)

  const handleChange = (e) => {
    const {id, value} = e.target
    switch(id) {
      case 'name':
        setName(value)
        break
      case 'email':
        setEmail(value)
        break
      case 'comments':
        setComments(value)
        break
    }

    setErrors({...errors, [id]: validate(e)})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFailedSubmit(false)
    setSubmitted(false)

    setErrors(validate(e, {name, email, comments}))
  
    if (errors.name === null && errors.email === null && errors.comments === null) {
      
      let json = JSON.stringify({ name, email, comments})

      setName('')
      setEmail('')
      setComments('')
      setErrors({})

      if(await submitData('https://win22-webapi.azurewebsites.net/api/contactform', 'POST', json, )) {
        setSubmitted(true)
        setFailedSubmit(false)
      } else {
        setSubmitted(false)
        setFailedSubmit(true)     
      }

      console.log(name, email, comments)

    } else {
      setSubmitted(false)
    }
  }

  return (
    <div className='contact-page'>
      <div className='container'>
          <Breadcrumb currentPage="Contacts" />
      </div>
      <iframe className="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3632.293371885592!2d15.216411550349932!3d59.27357210112124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465c017f144aff39%3A0xcfe3b0bad018c93e!2zw5ZyZWJybw!5e0!3m2!1ssv!2sse!4v1666794314431!5m2!1ssv!2sse" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

      <div className='container my-5'>

            {
            submitted ? (
            <div className="alert alert-success text-center" role="alert">
                <h3>Thank you for your comments</h3> 
                <p>We will contact you as soon as possible.</p>
                </div>  ) : (<></>)
            }
            
            {
            failedSubmit ? (
            <div className="alert alert-danger text-center" role="alert">
                <h3>Something went wrong!</h3> 
                <p>We couldn't submit your comments right now.</p>
                </div>  ) : (<></>)
            }

        <form onSubmit={handleSubmit} noValidate>
          <h4 className='fw-bold mb-4'>Come in Contact with Us</h4>
          <div className="row g-3 mb-4">
            <div className="col-6">
              <input type="text" placeholder="Your name" id="name" 
              className={`form-control ${errors.name ? 'is-invalid': ''}`} 
              value={name} 
              onChange={handleChange} />
              <div className="errorMessage">{errors.name}</div>
            </div>
            <div className="col-6">
              <input type="email" placeholder="Your email" id="email" 
              className={`form-control ${errors.email ? 'is-invalid': ''}`} 
              value={email} 
              onChange={handleChange}/>
              <div className="errorMessage">{errors.email}</div>
            </div>
            <div className="col-12">
              <textarea  
              placeholder="Comments" id="comments" rows="5" 
              className={`form-control ${errors.comments ? 'is-invalid': ''}`} 
              style={(errors.comments ? {border: '1px solid #FF7373'}: {} )} 
              value={comments} 
              onChange={handleChange}>
              </textarea>
              <div className="errorMessage">{errors.comments}</div>
            </div>
          </div>
          <button type="submit" >Post Comments</button>
        </form>
      </div>


    </div>
  )
}

export default Contact