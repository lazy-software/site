

function App() {
  return (
    <div className="h-[100dvh] bg-gray-100 dark:bg-gray-950 transition-colors duration-200 flex flex-col overflow-hidden">
      <div className="max-w-md md:max-w-5xl mx-auto w-full h-full bg-white dark:bg-gray-900 shadow-2xl relative transition-colors duration-200 flex flex-col overflow-y-auto p-8 text-gray-900 dark:text-gray-100">
        <div className="flex flex-col items-center justify-center space-y-4 mb-8">
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="Lazy Software Logo" className="w-12 h-12 object-contain rounded-xl shadow-sm bg-white dark:bg-gray-800 dark:invert" />
            <h1 className="text-3xl font-bold tracking-tight">lazy.software</h1>
          </div>
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-xl">
            Try our open-source progressive web apps (PWAs) designed to do one thing well. No bloat, no tracking, just simple tools for the lazy.
          </p>

          <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg text-sm text-gray-600 dark:text-gray-400 border border-gray-100 dark:border-gray-800 max-w-xl">
            <p className="font-semibold mb-1 text-gray-900 dark:text-gray-200 text-center">Install on your mobile device</p>
            <p className="text-center">
              Open any app in your browser and select <span className="font-medium text-gray-900 dark:text-gray-200">"Add to Home Screen"</span> or <span className="font-medium text-gray-900 dark:text-gray-200">"Install"</span> from the menu. They work offline and feel just like native apps.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="block p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 flex flex-col items-center text-center h-full">
            <img src="/fast-icon.png" alt="Lazy Fast Icon" className="w-16 h-16 mb-4 rounded-xl shadow-sm" />
            <h2 className="text-2xl font-semibold mb-2">Lazy Fast</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">A simple intermittent fasting tracker.</p>
            <div className="flex space-x-4 w-full mt-auto">
              <a
                href="https://fast.lazy.software"
                className="flex-1 px-4 py-2 bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:hover:bg-gray-200 text-white dark:text-gray-900 rounded-lg font-medium transition-colors"
              >
                Open App
              </a>
              <a
                href="https://github.com/lazy-software/fast"
                className="flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg font-medium transition-colors"
              >
                Source
              </a>
            </div>
          </div>

          <div className="block p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 flex flex-col items-center text-center h-full">
            <img src="/list-icon.png" alt="Lazy List Icon" className="w-16 h-16 mb-4 rounded-xl shadow-sm" />
            <h2 className="text-2xl font-semibold mb-2">Lazy List</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">A minimal tool to keep track of ideas, tasks, and everything else.</p>
            <div className="flex space-x-4 w-full mt-auto">
              <a
                href="https://list.lazy.software"
                className="flex-1 px-4 py-2 bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:hover:bg-gray-200 text-white dark:text-gray-900 rounded-lg font-medium transition-colors"
              >
                Open App
              </a>
              <a
                href="https://github.com/lazy-software/list"
                className="flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg font-medium transition-colors"
              >
                Source
              </a>
            </div>
          </div>
        </div>

        <footer className="p-6 text-center text-gray-500 dark:text-gray-500 text-sm mt-8">
          <div className="flex justify-center space-x-6">
            <a href="https://bsky.app/profile/lazy-software.bsky.social" className="hover:text-gray-900 dark:hover:text-gray-300 transition-colors">
              Bluesky
            </a>
            <a href="https://mastodon.social/@lazysoft" className="hover:text-gray-900 dark:hover:text-gray-300 transition-colors">
              Mastodon
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
