import Nav from '../components/Nav';
import Head from 'next/head';

const indexPage = () => {
  return (
    <div lang="en">
      <Head>
        <title lang="en">Testing Nextjs</title>
        <meta name="description" content="this is my website for testing nextjs"></meta>
      </Head>
      <Nav></Nav>
      <h1>Hello World!</h1>
      </div>
  );
};

export default indexPage;
