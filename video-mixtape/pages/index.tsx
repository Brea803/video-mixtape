import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>VideoMixtape</title>
      </Head>
      <main className="p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">VideoMixtape</h1>
        <p>Create and share playlists of videos from any platform.</p>
      </main>
    </>
  );
}
