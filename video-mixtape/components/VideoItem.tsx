// A single video item display component
export default function VideoItem({ url }: { url: string }) {
  return (
    <div className="border p-4 my-2 rounded shadow">
      <p>Video URL: <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">{url}</a></p>
    </div>
  );
}
