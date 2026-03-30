'use client' // Error boundaries must be Client Components

import { useEffect } from 'react';
import { Button } from 'ui/components/ui/button';

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
      <Button
        variant="secondary"
        onClick={() => reset()}
      >
        Try again
      </Button>
    </div>
  )
}