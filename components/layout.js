import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Alert from './alert'

const name = 'Your Name'
export const siteTitle = 'Next.js Sample Website'

const imgBasename = '400x400-mesh.jpg'

export default function Layout({ children, home }) {
  return (
    <div className="max-w-xl px-4 mt-12 mb-24">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <script data-goatcounter="https://olets.goatcounter.com/count"
              async src="//gc.zgo.at/count.js">
        </script>
      </Head>
      <header className="flex flex-col items-center">
        {home ? (
          <>
            <Image
              priority
              src={imgBasename}
              className="rounded-full"
              height={144}
              width={144}
              alt={name}
            />
            <h1 className="text-2xl font-bold tracking-tighter my-4">{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src={imgBasename}
                  className="rounded-full"
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className="text-2xl my-4">
              <Link href="/">
                <a className="text-inherit">{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>

      <Alert type="error">an error</Alert>

      <Alert type="success">a success</Alert>

      {!home && (
        <div className="mt-12">
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}