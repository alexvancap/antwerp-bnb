import './../styles/pages/contact.scss';

const Contact = () => {
  return (
    <div id='contact-container'>
      <div id='contact-form'>
        <div className='contact-input'>
          <label className='contact-label'>Email</label>
          <input type='email'  placeholder='Email...'/>
        </div>
        <div className='contact-input'>
          <label className='contact-label'>First Name</label>
          <input type='text' placeholder='First Name...'/>
        </div>
        <div className='contact-input'>
          <label className='contact-label'>Last Name</label>
          <input type='text' placeholder='Last Name...'/>
        </div>
        <div className='contact-input'>
          <label className='contact-label'>Subject</label>
          <input type='text' placeholder='Subject...'/>
        </div>
        <div className='contact-input'>
          <label className='contact-label'>Message</label>
          <textarea placeholder='type your message here...'></textarea>
        </div>
        <button>Submit</button>
      </div>
      <div id='contact-info'></div>
    </div>
  )
}

export default Contact;