/** @jsxImportSource theme-ui */

import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>ThemeUI/Next Test</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <div>
          <h1 className='title'>
            <Link href='/index'>
              <a>Home</a>
            </Link>
          </h1>

          <p
            sx={{
              fontSize: '3rem'
            }}
          >
            Yo duuuuude...
          </p>
          {/*lots and lots of other stuff.....  */}
        </div>
      </main>
    </div>
  );
}
