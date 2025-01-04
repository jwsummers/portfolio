'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

type ScrollingBannerProps = {
  iconSlugs: string[];
  onSkillSelect?: (skill: string) => void;
};

export default function ScrollingBanner({
  iconSlugs,
  onSkillSelect,
}: ScrollingBannerProps) {
  const bannerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll functionality
  useEffect(() => {
    const banner = bannerRef.current;
    if (!banner) return;

    const scrollAmount = 4;
    const scrollInterval = setInterval(() => {
      if (!isPaused) {
        banner.scrollLeft += scrollAmount;

        // Reset scroll position for infinite effect
        if (banner.scrollLeft >= banner.scrollWidth / 2) {
          banner.scrollLeft = 0;
        }
      }
    }, 16); // 60fps scrolling

    return () => clearInterval(scrollInterval);
  }, [isPaused]);

  return (
    <div
      className='relative flex overflow-hidden py-8'
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        ref={bannerRef}
        className='flex overflow-x-auto py-4 px-4 space-x-4 scrollbar-hide'
        style={{
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch',
          padding: '0 1rem',
        }}
      >
        {/* Original and duplicated icons for seamless loop */}
        {[...iconSlugs, ...iconSlugs].map((slug, index) => (
          <div
            key={`${slug}-${index}`}
            className='flex items-center justify-center w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-800 p-4 my-6 shadow-md cursor-pointer icon-scale'
            onClick={() => onSkillSelect?.(slug)}
            style={{
              flex: '0 0 auto',
            }}
          >
            <Image
              src={`https://cdn.simpleicons.org/${slug}`}
              alt={slug}
              width={48}
              height={48}
              className='w-12 h-12'
            />
          </div>
        ))}
      </div>
    </div>
  );
}
