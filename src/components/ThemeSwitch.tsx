import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from "next/image";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  // Ensures that the component is mounted
  useEffect(() => setMounted(true), []);

  // Display loading placeholder while the component is mounting
  if (!mounted) {
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={36}
        height={36}
        alt="Loading Light/Dark Toggle"
        title="Loading Light/Dark Toggle"
      />
    );
  }

  // Toggle between light and dark modes
  return resolvedTheme === 'dark' ? (
    <div onClick={() => setTheme('light')} aria-label="Switch to light mode" className='cursor-pointer '>
      <svg width="34" height="34" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_884_2138)">
          <rect x="0.291016" width="32" height="32" rx="16" fill="white" />
          <path d="M22.512 17.3731C21.2344 19.7128 18.6741 21.1948 15.7279 21.1948C11.8702 21.1948 8.72791 18.0526 8.72791 14.1948C8.72791 11.2487 10.2099 8.68834 12.5496 7.41076C12.749 7.30262 12.9311 7.54651 12.8013 7.72438C11.7121 9.27062 11.0148 11.1761 11.0148 13.1948C11.0148 17.0534 14.1461 20.1848 18.0048 20.1848C20.0235 20.1848 21.929 19.4876 23.4752 18.3983C23.653 18.2685 23.897 18.4506 23.7888 18.65Z" fill="#1A1A1A" />
        </g>
        <defs>
          <clipPath id="clip0_884_2138">
            <rect x="0.291016" width="32" height="32" rx="16" fill="white" />
          </clipPath>
        </defs>
      </svg>

    </div>
  ) : (
    <div onClick={() => setTheme('dark')} aria-label="Switch to dark mode" className='cursor-pointer'>
      <svg width="34" height="34" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_884_2141)">
          <rect x="0.291016" width="32" height="32" rx="16" fill="#1A1A1A" />
          <path d="M16.291 21.9964C19.6027 21.9964 22.2873 19.3118 22.2873 16.0001C22.2873 12.6884 19.6027 10.0037 16.291 10.0037C12.9793 10.0037 10.2947 12.6884 10.2947 16.0001C10.2947 19.3118 12.9793 21.9964 16.291 21.9964Z" fill="#F7F7F7" />
          <path d="M16.291 8.96181C15.969 8.96181 15.7079 8.70077 15.7079 8.37876V6.58305C15.7079 6.26104 15.969 6 16.291 6C16.613 6 16.874 6.26104 16.874 6.58305V8.37876C16.874 8.70077 16.6131 8.96181 16.291 8.96181Z" fill="#F7F7F7" />
          <path d="M16.291 26C15.969 26 15.7079 25.7389 15.7079 25.417V23.6212C15.7079 23.2992 15.969 23.0382 16.291 23.0382C16.613 23.0382 16.874 23.2992 16.874 23.6212V25.417C16.874 25.739 16.6131 26 16.291 26Z" fill="#F7F7F7" />
          <path d="M25.7079 16.5831H23.9122C23.5902 16.5831 23.3291 16.3221 23.3291 16C23.3291 15.678 23.5902 15.417 23.9122 15.417H25.7079C26.0299 15.417 26.2909 15.678 26.2909 16C26.2909 16.3221 26.03 16.5831 25.7079 16.5831Z" fill="#F7F7F7" />
          <path d="M8.66969 16.5831H6.87406C6.55206 16.5831 6.29102 16.3221 6.29102 16C6.29102 15.678 6.55206 15.417 6.87406 15.417H8.66977C8.99178 15.417 9.25282 15.678 9.25282 16C9.25282 16.3221 8.99178 16.5831 8.66969 16.5831Z" fill="#F7F7F7" />
          <path d="M21.6801 11.194C21.5308 11.194 21.3817 11.1372 21.2678 11.0233C21.0401 10.7957 21.0401 10.4264 21.2678 10.1988L22.0208 9.44573C22.2484 9.2181 22.6176 9.21801 22.8453 9.44573C23.073 9.67337 23.073 10.0426 22.8453 10.2702L22.0923 11.0233C21.9785 11.1371 21.8293 11.194 21.6801 11.194Z" fill="#F7F7F7" />
          <path d="M10.149 22.7251C9.99972 22.7251 9.85054 22.6682 9.73668 22.5543C9.50896 22.3266 9.50896 21.9575 9.73668 21.7298L10.4897 20.9769C10.7175 20.7492 11.0867 20.7491 11.3142 20.9769C11.542 21.2046 11.542 21.5737 11.3142 21.8014L10.5612 22.5543C10.4474 22.6682 10.2982 22.7251 10.149 22.7251Z" fill="#F7F7F7" />
          <path d="M22.4331 22.7251C22.2838 22.7251 22.1346 22.6681 22.0208 22.5544L21.2678 21.8014C21.0401 21.5737 21.0401 21.2045 21.2678 20.9769C21.4954 20.7492 21.8647 20.7492 22.0923 20.9769L22.8453 21.7298C23.073 21.9575 23.073 22.3267 22.8453 22.5544C22.7315 22.6682 22.5822 22.7251 22.4331 22.7251Z" fill="#F7F7F7" />
          <path d="M10.9019 11.1941C10.7527 11.1941 10.6035 11.1371 10.4896 11.0233L9.73658 10.2703C9.50886 10.0426 9.50886 9.67338 9.73658 9.44574C9.96422 9.21811 10.3335 9.21811 10.5611 9.44574L11.3141 10.1988C11.5419 10.4264 11.5419 10.7957 11.3141 11.0233C11.2004 11.1371 11.0512 11.1941 10.9019 11.1941Z" fill="#F7F7F7" />
        </g>
        <defs>
          <clipPath id="clip0_884_2141">
            <rect x="0.291016" width="32" height="32" rx="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
