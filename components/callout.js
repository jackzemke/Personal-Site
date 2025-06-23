export default function Callout({ message, color }) {
  return (
    <div className={`p-4 rounded-md text-white ${color}`}>
      {message}
    </div>
  );
}