import React from 'react';
import { ContactSection, ContactTitle, TitleSpan, Form, FormInput, TextInput, EmailInput, SubInput, TextArea, SubmitInput } from './style.js';
import Footer from './../Footer';

const Contact = () => {
    return (
        <React.Fragment>
            <ContactSection>
                <div className="container">
                    <ContactTitle><TitleSpan>Contact </TitleSpan> Me </ContactTitle>
                    <Form>
                        <FormInput>
                            <TextInput type="text" placeholder="Your Name" />
                            <EmailInput type="email" placeholder="Your Email" />
                        </FormInput>
                        <SubInput type="text" className="sub" placeholder="Your Subject" />
                        <TextArea cols="5" rows="3" placeholder="Your Message" />
                        <SubmitInput type="submit" value="Send Message" />
                    </Form>
                </div>
            </ContactSection>
            <Footer />
        </React.Fragment>
    );
}
export default Contact;