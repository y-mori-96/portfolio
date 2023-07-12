import { useState, useRef, FormEvent } from 'react';
import emailjs, {init} from 'emailjs-com';
import styled from 'styled-components';

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const [company, setCompany] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceID = process.env.REACT_APP_SERVICE_ID || '';
    const templateID = process.env.REACT_APP_TEMPLATE_ID || '';
    const userID = process.env.REACT_APP_USER_ID || '';

    init(userID);

    const templateParams = {
      from_company: company,
      from_name: name,
      from_email: email,
      from_tel: tel,
      from_title: title,
      message: message,
    };

     emailjs
      .send(serviceID, templateID, templateParams)
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.error(error.text);
      });

    // 送信後はリセット
    setCompany('');
    setName('');
    setEmail('');
    setTel('');
    setTitle('');
    setMessage('');
  };

  return (
    <Form ref={form} onSubmit={handleSubmit}>
      <Wrapper>
        <Label htmlFor="company">
          <Required>必須</Required>会社名<br />
          <Input
            id='company'
            type="text"
            name="company"
            placeholder="会社名"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
            autoComplete="organization"
          />
        </Label>
        <Label htmlFor="name">
          <Required>必須</Required>お名前<br />
          <Input
            id='name'
            type="text"
            name="name"
            placeholder="お名前"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoComplete="name"
          />
        </Label>
      </Wrapper>
      <Wrapper>
        <Label htmlFor="email">
          <Required>必須</Required>メールアドレス<br />
          <Input
            id='email'
            type="email"
            name="email"
            placeholder="メールアドレス"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
        </Label>
        <Label htmlFor="tel">
        <Required>必須</Required>電話番号<br />
          <Input
            id='tel'
            type="tel"
            name="tel"
            placeholder="電話番号"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
            required
            autoComplete="tel"
          />
        </Label>
      </Wrapper>
      <Label htmlFor="title">
        <Required>必須</Required>件名<br />
        <Input
          id='title'
          type="text"
          name="title"
          placeholder="件名"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          autoComplete="subject"
        />
      </Label>
      <Label htmlFor="message">
        <Required>必須</Required>お問い合わせ内容<br />
        <TextArea
          id='message'
          name="message"
          placeholder="お問い合わせ、ご依頼内容をご自由に記入ください。"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </Label>
      <Button type="submit">送信</Button>
    </Form>
  );
};

export default ContactForm;


const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
  `;

const Label = styled.label`
  width: 100%;
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;
const Required = styled.span`
  color: #ff0000;
  font-weight: bold;
  margin-right: 1rem;
`;
const Input = styled.input`
  width: 100%;
  height: 50px;
  margin-top: 0.5rem;
  padding-left: 1rem;
  font-size: 1.25rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  margin-top: 0.5rem;
  padding: 1rem;
  font-size: 1.5rem;
`;

const Button = styled.button`
  width: 100%;
  height: 50px;
  background-color: #85A389;
  color: #fff;
  border: none;
  font-size: 2rem;

  &:hover {
    background-color: #aec7b2;
  }
`;