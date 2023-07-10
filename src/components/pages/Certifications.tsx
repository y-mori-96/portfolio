import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { StyledArticle } from '../templates/Article';
import PageTitle from '../atoms/Titles/PageTitle';
import CertificationsList from '../organisms/CertificationsList';

const Certifications = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // スムーズにトップにスクロールする
  }, [location]);

  return (
    <StyledArticle>
      <PageTitle title="資格" />
      <CertificationsList />
    </StyledArticle>
  )
}

export default Certifications;