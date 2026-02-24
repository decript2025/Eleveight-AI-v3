'use client' // Error boundaries must be Client Components

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center space-y-6 text-center">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900 dark:text-gray-100">
          Something went wrong!
        </h2>
        <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
          An unexpected error occurred. Please try again or contact support if the problem persists.
        </p>
      </div>
      <button
        onClick={() => reset()}
        className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700 disabled:pointer-events-none disabled:opacity-50"
      >
        Try again
      </button>
    </div>
  )
}