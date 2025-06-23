import { useState } from 'react';

export default function Toggle() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="text-center mt-6">
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => setVisible(!visible)}
      >
        Toggle Message
      </button>
      {visible && (
        <p className="mt-4 text-gray-800">
          You toggled me!
        </p>
      )}
    </div>
  );
}