// コンポーネント
import PageTitle from '../atoms/Titles/PageTitle'
import HomeList from '../organisms/HomeList';

const Home = () => {
  return (
    <>
      <PageTitle title="森のポートフォリオ" />
      <HomeList />
    </>
  )
}

export default Home