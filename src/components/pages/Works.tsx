// スタイル
import styled from 'styled-components';
// コンポーネント
import PageTitle from '../atoms/Titles/PageTitle'
import WorkTypeTitle from '../atoms/Titles/WorkTypeTitle'
import WorksList from '../organisms/WorksList'

const Works = () => {
  return (
    <>
      <PageTitle title="制作物" />
      <WorkTypeTitle title="個人開発"/>
      <WorksList />
    </>
  )
}

export default Works