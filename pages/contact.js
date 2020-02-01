import Nav from '../components/Nav';
import Head from 'next/head';

export default function contactPage() {
  return (
    <div lang='en'>
      <Head>
        <title lang='en'>Contact Us</title>
        <meta name='description' content='contact page for our website'></meta>
      </Head>
      <Nav></Nav>
      <h1>Please Contact Us</h1>
    </div>
  );
}
