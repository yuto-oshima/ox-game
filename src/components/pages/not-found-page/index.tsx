import { PageTemplate } from '../../templates/page-template';
import { Header } from '../../organisms/header';
import { Footer } from '../../organisms/footer';
export type NotFoundPageProps = {};

export const NotFoundPage = (props: NotFoundPageProps) => {
  return(
    <PageTemplate header={<Header />} footer={<Footer />}>
      <h2>404 Not Found</h2>
    </PageTemplate>
  );
};