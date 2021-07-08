import { Header } from '../../organisms/header';
import { Footer } from '../../organisms/footer';
import { PageTemplate } from '../../templates/page-template';
export type CPUBattlePageProps = {};

export const CPUBattlePage = (props: CPUBattlePageProps) => {
  return(
    <PageTemplate
      header={<Header />}
      footer={<Footer />}
    />
  )
};