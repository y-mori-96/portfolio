import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { StyledArticle } from '../templates/Article';
import PageTitle from '../atoms/Titles/PageTitle';
import ContactForm from '../organisms/ContactForm';

const Contact = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // スムーズにトップにスクロールする
  }, [location]);

  return (
    <StyledArticle>
      <PageTitle title="お問い合わせ" />
      <ContactForm />
    </StyledArticle>
  )
}

export default Contact;