"use client";

import { useState } from "react";

interface ShareButtonProps {
  url: string;
  title: string;
  text?: string;
}

export default function EnhancedShareButton({
  url,
  title,
  text,
}: ShareButtonProps) {
  const [isSharing, setIsSharing] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const handleNativeShare = async () => {
    if (isSharing) return;

    setIsSharing(true);

    try {
      if (navigator.share && window.isSecureContext) {
        await navigator.share({
          title,
          text: text || title,
          url,
        });
        setShowOptions(false);
      } else {
        // Show share options if native share isn't available
        setShowOptions(true);
      }
    } catch (error) {
      if ((error as Error).name !== "AbortError") {
        console.log("Share failed:", error);
        setShowOptions(true);
      }
    } finally {
      setIsSharing(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(url);
      } else {
        // Fallback for non-secure contexts
        const textarea = document.createElement("textarea");
        textarea.value = url;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setShowOptions(false);
    } catch (error) {
      console.log("Copy failed:", error);
    }
  };

  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      text || title
    )}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, "_blank");
    setShowOptions(false);
  };

  const shareOnLinkedIn = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      url
    )}`;
    window.open(linkedInUrl, "_blank");
    setShowOptions(false);
  };

  const shareOnFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}`;
    window.open(facebookUrl, "_blank");
    setShowOptions(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Share Options Panel */}
      {showOptions && (
        <div className="absolute bottom-16 right-0 bg-gray-800 rounded-lg p-4 shadow-lg border border-gray-700 min-w-48">
          <div className="flex flex-col gap-2">
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-2 px-3 py-2 text-white hover:bg-gray-700 rounded-lg transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8zM3 5a2 2 0 012-2 3 3 0 003 3h6a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11.586l-3-3a1 1 0 00-1.414 1.414L11.586 11H4a1 1 0 100 2h7.586l-1 1a1 1 0 101.414 1.414l3-3z" />
              </svg>
              Copy Link
            </button>
            <button
              onClick={shareOnTwitter}
              className="flex items-center gap-2 px-3 py-2 text-white hover:bg-gray-700 rounded-lg transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Twitter
            </button>
            <button
              onClick={shareOnLinkedIn}
              className="flex items-center gap-2 px-3 py-2 text-white hover:bg-gray-700 rounded-lg transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </button>
            <button
              onClick={shareOnFacebook}
              className="flex items-center gap-2 px-3 py-2 text-white hover:bg-gray-700 rounded-lg transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </button>
          </div>
        </div>
      )}

      {/* Main Share Button */}
      <button
        onClick={handleNativeShare}
        disabled={isSharing}
        className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white p-4 rounded-full shadow-lg transition-all duration-200 hover:scale-110 active:scale-95"
        aria-label="Share this post"
      >
        {isSharing ? (
          <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
