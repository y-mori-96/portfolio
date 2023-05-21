// コンポーネント
import PageTitle from '../atoms/Titles/PageTitle'
import CertificationsList from '../organisms/CertificationsList'

const Certifications = () => {
  return (
    <>
      <PageTitle title="資格" />
      <CertificationsList />
    </>
  )
}

export default Certifications