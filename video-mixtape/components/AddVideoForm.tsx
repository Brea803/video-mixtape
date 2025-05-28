// This form allows users to add video URLs to their playlist
import { useState } from 'react';

export default function AddVideoForm({ onAdd }: { onAdd: (url: string) => void }) {
  const [url, setUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(url);
    setUrl('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 my-4">
      <input
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Paste video URL"
        className="border p-2 flex-grow"
        required
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add</button>
    </form>
  );
}
