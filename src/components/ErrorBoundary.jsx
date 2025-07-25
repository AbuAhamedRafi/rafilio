import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 px-4">
      <div className="max-w-md w-full bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-6 text-center">
        <div className="w-16 h-16 mx-auto mb-4 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
          Oops! Something went wrong
        </h2>
        
        <p className="text-zinc-600 dark:text-zinc-300 mb-4">
          We encountered an unexpected error. Please try refreshing the page.
        </p>
        
        <div className="space-y-2">
          <button
            onClick={resetErrorBoundary}
            className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200"
          >
            Try Again
          </button>
          
          <button
            onClick={() => window.location.reload()}
            className="w-full px-4 py-2 bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-700 dark:hover:bg-zinc-600 text-zinc-900 dark:text-white rounded-lg transition-colors duration-200"
          >
            Refresh Page
          </button>
        </div>
        
        {import.meta.env.DEV && (
          <details className="mt-4 text-left">
            <summary className="cursor-pointer text-sm text-zinc-500 dark:text-zinc-400">
              Error Details (Development Only)
            </summary>
            <pre className="mt-2 text-xs bg-zinc-100 dark:bg-zinc-900 p-2 rounded overflow-auto text-red-600 dark:text-red-400">
              {error.message}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}

export function AppErrorBoundary({ children }) {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, errorInfo) => {
        console.error('Application Error:', error, errorInfo);
        // Here you could send error to logging service
      }}
    >
      {children}
    </ErrorBoundary>
  );
}
