import PageHeading from '../components/PageHeading/PageHeading';
import notFoundPage from '../img/notFoundPage.jpg';

export default function NotFoundView() {
  return (
    <>
      <PageHeading text="Something went wrong"></PageHeading>

      <img src={notFoundPage} alt="notFound" style={{ width: '100%' }} />
    </>
  );
}
