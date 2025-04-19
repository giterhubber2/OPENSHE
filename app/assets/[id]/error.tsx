'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  useEffect(() => {
    console.error('Caught error in error.tsx:', error);
    router.replace('/404'); // redirect to 404 page
  }, [error, router]);

  return null;
}
