import styled from "styled-components";

export const ContactSection = styled.div`
  padding: 50px 0;
  text-align: center;
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' %3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(0,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23dddddd'/%3E%3Cstop offset='1' stop-color='%23eeeeee'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpattern id='b' width='68' height='68' patternUnits='userSpaceOnUse'%3E%3Ccircle fill='%23ffffff' cx='34' cy='34' r='34'/%3E%3C/pattern%3E%3Crect width='100%25' height='100%25' fill='url(%23a)'/%3E%3Crect width='100%25' height='100%25' fill='url(%23b)' fill-opacity='0.34'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
`
export const Container = styled.div`
  width:80%;
  margin:auto;
  @media(max-width:768px){
    width: 100%;
  }
`
export const ContactTitle = styled.h2`
  font-size: 60px;
  color:#fff;
  margin: 0;
  @media(max-width:768px){
    font-size: 30px;
    padding-top: 30px;
  }
`
export const TitleSpan = styled.span`
  font-weight: normal;
`
export const Form = styled.form`
  margin:auto;
  width: 40%;
  padding:30px;
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' %3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%23000000'/%3E%3Cstop offset='1' stop-color='%23616161'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpattern id='b' width='24' height='24' patternUnits='userSpaceOnUse'%3E%3Ccircle fill='%23ffffff' cx='12' cy='12' r='12'/%3E%3C/pattern%3E%3Crect width='100%25' height='100%25' fill='url(%23a)'/%3E%3Crect width='100%25' height='100%25' fill='url(%23b)' fill-opacity='0.1'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  @media(max-width:768px){
    padding:0;
    width: 100%;
  }
`
export const Input = styled.input`
  display:block;
  width:80%;
  margin:auto;
  padding: 15px;
  @media(max-width:768px){
    margin:auto;
    width:80%;
    padding:10px;
  }
`
export const TextArea = styled.textarea`
  display:block;
  width:80%;
  margin:auto;
  padding: 15px;
  @media(max-width:768px){
    margin:auto;
    width:80%;
    padding:10px;
  }
`
export const Butn = styled.button`
  margin: 20px 0;
  width: 60%;
  background: #eb5424;
  border: 1px solid #ccc;
  color: #fff;
  cursor: pointer;
  padding:15px;
  font-size: 20px;
  transition: background 0.5s ease-in-out;
  &:hover{
    background:#fff;
    color:#eb5424;
  }
  @media(max-width:768px){
    width:50%;
    margin:20px 0 30px 0;
    padding:10px;
  }
`
export const Hr = styled.hr`
  display: block;
  height: 7px;
  background-color: #eb5424;
  width: 378px;
  border: none;
  margin-bottom: 20px;
  @media screen and (max-width:768px){
    width: 200px;
  }
`
export const Error = styled.p`
  margin:auto;
  padding:5px;
  color:red;
`
export const AnsweTitle = styled.h3`
  color: #ea5424;
  background-color: bisque;
  border-radius: 5%;
  padding: 20px;
  width: 80%;
  margin: 10px auto;
  @media(max-width:768px){
    font-size:18px;
    padding:10px;
  }
`
export const AnsweDesc = styled.h3`
  display:none;
  color: aliceblue;
  background: #03a5037a;
  padding: 20px;
  border-radius: 5%;
  width: 80%;
  margin: 10px auto;
  @media(max-width:768px){
    font-size:18px;
    padding:10px;
  }
`
