import { StyledArticle } from '../templates/Article';
import PageTitle from '../atoms/Titles/PageTitle';
import CertificationsList from '../organisms/CertificationsList';

const Certifications = () => {
  return (
    <StyledArticle>
      <PageTitle title="資格" />
      <CertificationsList />
    </StyledArticle>
  )
}

export default Certifications;