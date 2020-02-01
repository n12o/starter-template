import Nav from '../components/Nav';
import PageHead from '../components/Head';

const indexPage = () => {
  return (
    <div lang='en'>
      <PageHead
        title={'Home Page'}
        desc={'this is my website for testing nextjs'}
      />
      <Nav></Nav>
      <h1>Hello World!</h1>
    </div>
  );
};

export default indexPage;
