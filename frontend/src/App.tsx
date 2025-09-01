import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
      <div className="text-center space-y-8 p-8">
        <div className="flex justify-center space-x-8">
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            <img
              src={viteLogo}
              className="h-24 w-24 hover:scale-110 transition-transform"
              alt="Vite logo"
            />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img
              src={reactLogo}
              className="h-24 w-24 hover:scale-110 transition-transform"
              alt="React logo"
            />
          </a>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Vite + React + TypeScript + Tailwind
        </h1>

        <div className="space-y-4">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Count is {count}
          </button>

          <p className="text-gray-600 dark:text-gray-400">
            Edit{" "}
            <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">
              src/App.tsx
            </code>{" "}
            and save to test HMR
          </p>
        </div>

        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  );
}

export default App;
