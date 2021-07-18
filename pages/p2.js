/** @jsxImportSource theme-ui */

import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <div>
          <h1 className='title'>
            Read{' '}
            <Link href='/posts/first-post'>
              <a>First Post Page!</a>
            </Link>
          </h1>

          <p
            sx={{
              fontSize: '6em',
              cursor: 'pointer',
              ':hover': {
                color: 'accent'
              }
            }}
          >
            TEST
          </p>
          {/*lots and lots of other stuff.....  */}
        </div>
      </main>
    </div>
  );
}
