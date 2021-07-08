import { PageTemplate } from "../../templates/page-template";
import { Header } from '../../organisms/header';
import { Footer } from '../../organisms/footer';
export type TopPageProps = {};

export const TopPage = (props: TopPageProps) => {
  return(
    <PageTemplate
      header={<Header />}
      footer={<Footer />}
    />
  );
};