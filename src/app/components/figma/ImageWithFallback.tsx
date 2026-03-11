/**
 * ImageWithFallback — GitHub repo shim
 *
 * In Figma Make, this is a system component with advanced fallback behavior.
 * This version is a simple <img> wrapper that matches the same API so that
 * molecules importing it work identically in both environments.
 */
import type { ImgHTMLAttributes } from 'react';

export function ImageWithFallback(props: ImgHTMLAttributes<HTMLImageElement>) {
  return <img {...props} />;
}
