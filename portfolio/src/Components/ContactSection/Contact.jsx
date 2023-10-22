import React, { useRef } from 'react'
import './contact.css'
import emailJS from'emailjs-com'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Contact = () => {
    const formref=useRef(null)
    const sendEmail=(e)=>{
        e.preventDefault();
        emailJS.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            formref.current,
            process.env.REACT_APP_PUBLIC_ID
        ).then(
            result=>{
                console.log(result.text)
                alert("Message Sent")
            },error=>{
                console.log(error.text)
                alert("There was some issue, Please check your email id")
            
            }
        );e.target.reset()
    }
    return (
        <div className="contact">
            <div className="c-left">
                <p>Get in touch</p>
                <p><span>Contact </span>me</p>
            </div>
            <div className="c-right">
                <form ref={formref} onSubmit={sendEmail}>
                <Stack spacing={2} direction="column" className='formInputs'>
                <TextField id="outlined-basic" label="Name" variant="outlined" name='name'  required/>
                <TextField id="outlined-basic" label="Email" variant="outlined" name='email' required/>
                <TextField
                        id="outlined-multiline-static"
                        label="Your Message"
                        multiline
                        rows={4}
                        placeholder="Write your Message here..."
                        name='message'
                        required
                    />
                </Stack>
                    <Button variant="contained" color="success" className='formBtn' type='submit'>
                        Send
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default Contact