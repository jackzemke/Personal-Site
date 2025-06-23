import Head from 'next/head';
import AnimatedBlob from '../components/animantedblob';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Jack Zemke</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative z-0 flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <AnimatedBlob
            className="bg-pink-400"
            style={{ top: '5%', left: '0%', width: 800, height: 800 }}
          />
          <AnimatedBlob
            className="bg-blue-400"
            style={{ bottom: '0%', right: '0%', width: 900, height: 900 }}
          />
          <AnimatedBlob
            className="bg-purple-400"
            style={{ top: '20%', right: '20%', width: 800, height: 800 }}
          />
          <AnimatedBlob
            className="bg-yellow-300"
            style={{ bottom: '10%', left: '10%', width: 850, height: 850 }}
          />
        </div>
        <h1 className="text-5xl font-bold text-blue-700 text-center mb-4">
          Hi, I'm Jack Zemke!
        </h1>
        <p className="text-lg text-gray-700 text-center mb-2">
          I'm an AI developer excited about building tools that impact business in real, tangible ways.
        </p>
        <p className="text-md text-gray-700 text-center max-w-xl mb-8">
          This page is currently still under construction as I teach myself Node.js and web design. Come back soon!
        </p>
        <a
          href="https://github.com/jackzemke/Entergy-AI"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
        >
        Or, in the meantime, view my most recent project!
      </a>
      </main>
    </>
  );
}