import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">🎬 VideoMixtape MVP</h1>
        <p className="text-lg text-gray-600">
          Create playlists of shows from any platform — all in one place.
        </p>
      </div>
    </div>
  )
}
