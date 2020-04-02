import styled from "styled-components";

export const ContactSection = styled.div`
  padding: 50px 0;
  text-align: center;
`

export const ContactTitle = styled.h2`
  font-size: 60px;
  margin-bottom: 30px;
  @media(max-width:768px){
    font-size: 40px;
  }
  @media(max-width:768px){
    font-size: 30px;
  }
`

export const TitleSpan = styled.span`
  font-weight: normal;
`

export const Form = styled.form`
  width: 70%;
  margin: auto;
  @media(max-width:768px){
    width: 100%;
  }
`

export const Input = styled.input`
  box-sizing: border-box;
  outline: 0;
  padding: 5px;
  margin-bottom: 10px;
`

export const FormInput = styled.div`
  overflow: hidden;
 
`

export const TextInput = styled(Input)`
  float: left;
  width: 49%;
  @media(max-width:768px){
    float:none;
    display:block;
    margin:0 auto 10px auto;
    width:90%;
    padding:10px;
  }
`

export const EmailInput = styled(Input)`
  width: 49%;
  float: right;
  @media(max-width:768px){
    float:none;
    display:block;
    margin:0 auto 10px auto;
    width:90%;
    padding:10px;
  }
`

export const SubInput = styled(Input)`
  width: 100%;
  @media(max-width:768px){
    display:block;
    margin:0 auto 10px auto;
    width:90%;
    padding:10px;
  }
`

export const TextArea = styled.textarea`
  width: 100%;
  outline: 0;
  background: #ccc;
  @media(max-width:768px){
    display:block;
    margin:10px auto;
    width:90%;
  }
`

export const SubmitInput = styled(Input)`
  width: 60%;
  background: #fff;
  border: 1px solid #ccc;
  color: #888;
  cursor: pointer;
  padding:10px;
`

