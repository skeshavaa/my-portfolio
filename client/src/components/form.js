import React, { useState } from "react";
import axios from "axios";
import styled from 'styled-components'
import Heading from "./heading"
import { Button, Card } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';
import Contact from '../assets/images/Contact.png'

const Form = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/mvowgvpr",
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Thanks!", form);
      })
      .catch(r => {
          console.log(r.response.data);
        handleServerResponse(false, r.response.data.error, form);
      });
  };


  return (
    <Wrapper>
      <Heading title="Contact Me"/>
      <FormWrapper onSubmit={handleOnSubmit}>
        <Label htmlFor="email">Email:</Label>
        <Input id="email" type="email" name="email" required />
        <Label htmlFor="message">Message:</Label>
        <TextArea id="message" name="message"></TextArea>
        <ButtonWrapper>
        <Button variant="outlined" type="submit" disabled={serverState.submitting} className="contact-button"> 
          <SendIcon fontSize="235px"/>
        </Button>
        
        </ButtonWrapper>
        {serverState.status && (
          <p className={!serverState.status.ok ? "errorMsg" : ""}>
            {serverState.status.msg}
          </p>
        )}
        
      </FormWrapper>
    </Wrapper>
  );
};

export default Form;

const Wrapper =styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 700px;
    min-width: 300px;
    width: 80vw;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Label = styled.label`
    font-family: "Raleway";
    font-size: 25px;
`

const Input = styled.input`
  margin: 10px 0px 20px 0px;
  font-family: "Abel";
  font-size: 15px;
  height: 35px;
  outline: none;
  padding-left: 10px;
`

const TextArea = styled.textarea`
  margin: 10px 0px 10px 0px;
  font-family: "Abel";
  font-size: 15px;
  height: 100px;
  outline: none;
  padding-left: 10px;
  padding-top: 10px;
  margin-bottom: 55px;
`

const Image = styled.img`
  width: 200px;
`