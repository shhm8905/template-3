import React,{useState} from 'react';
import { ContactSection, Container, ContactTitle, TitleSpan, Form, Input, Butn,  Hr, Error,TextArea, AnsweTitle, AnsweDesc } from './style.js';
import { CircularProgress } from '@material-ui/core';
import emailjs from 'emailjs-com';

const Contact = () => {

    const [formData,setFormData] = useState({userName: '', email: '', subject: '', message: ''});
    const [e_Data,setE_Data] = useState({e_userName: '', e_email: '', e_subject: '', e_message: ''});
    const [isSubmit,setIsSubmit]=useState(false);
    const [ansDesc,setAnsDesc] = useState(false); 

    const handleChange =(e)=>{
        const {name,value} = e.target;
        if(name==="userName"){
            setFormData({...formData,userName:value.replace(/[^a-zA-z]/ig,'')})
        }
        if(name!=="userName"){
            setFormData({...formData,[name]:value});
        }
        
        setE_Data({e_userName: '', e_email: '', e_subject: '', e_message: ''});
        setAnsDesc(false);
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        const IsValid=Validation();
        if(IsValid){
            setIsSubmit(true);
            emailjs.sendForm('service_h0eth8f', 'template_p4253ar', e.target, 'user_dh0ZSsyleS5mIDZSFpFQk')
            .then((result) => {
                setAnsDesc(true);
                setIsSubmit(false);
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
                setIsSubmit(false);
                setAnsDesc(false);
            });
            setFormData({userName: '', email: '', subject: '', message: ''})
        }
    }

    const Validation =()=>{
        const {userName,email,subject,message}=formData;
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if(!email&&!userName&&!subject&&!message){
            setE_Data({...e_Data,
                e_email:"Invalid email address",
                e_userName:"Write your name please",
                e_subject:"Write your subject please",
                e_message:"Write your message please"
            });
            return false;
        }

        if(!email.match(validRegex)){
            setE_Data({...e_Data, e_email:"Invalid email address"});
            return false;
        }
        if(!userName){
            setE_Data({...e_Data, e_userName:"Write your name please"});
            return false;
        }
        if(!subject){
            setE_Data({...e_Data, e_subject:"Write your subject please"});
            return false;
        }
        if(!message){
            setE_Data({...e_Data, e_message:"Write your message please"});
            return false;
        }
        return true;
    }

    return (
        <ContactSection id="contact">
            <Container>
                
                <Form onSubmit={handleSubmit} >
                    <ContactTitle><TitleSpan>Contact </TitleSpan> Me </ContactTitle>
                    <Hr/>
                    <AnsweTitle>Hello there!</AnsweTitle>
                    <AnsweTitle>I'm very glad you visited my site</AnsweTitle>
                    <AnsweDesc id="ansDesc"> {isSubmit?<CircularProgress color="inherit"/>:ansDesc?"Your email has now been sent. Thanks for your email. You will get an answer as soon as possible.":null} </AnsweDesc>
                    <Input name="userName" type="text" placeholder="Your Name" value={formData.userName} onChange={handleChange} />
                    <Error>{e_Data.e_userName}</Error>
                    <Input name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} />
                    <Error> {e_Data.e_email} </Error>
                    <Input name="subject" type="text" placeholder="Your Subject" value={formData.subject} onChange={handleChange} />
                    <Error> {e_Data.e_subject} </Error>
                    <TextArea name="message" type="text" cols="5" rows="3" placeholder="Your Message" value={formData.message} onChange={handleChange} />
                    <Error> {e_Data.e_message} </Error>
                    <Butn type="submit">Send Message</Butn>
                </Form>

            </Container>
        </ContactSection>
    );
}
export default Contact;