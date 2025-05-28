// This page will display a specific playlist by ID
import { useRouter } from 'next/router';

export default function PlaylistPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold">Playlist: {id}</h1>
      {/* Render playlist videos here */}
    </div>
  );
}
