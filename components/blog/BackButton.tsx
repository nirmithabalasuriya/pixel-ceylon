"use client";

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      router.back();
    } else {
      router.push('/blog');
    }
  };

  return (
    <button
      onClick={handleBack}
      className="inline-flex items-center gap-2 rounded-lg border border-[#2A2D3A] bg-transparent px-4 py-2 text-sm font-medium text-[#b5e409] hover:bg-[#b5e409]/6"
    >
      <ArrowLeft className="w-4 h-4" />
      Back
    </button>
  );
}
