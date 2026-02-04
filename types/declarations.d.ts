// Minimal declarations to satisfy TypeScript for React and JSX in this workspace.
// If you later install @types/react, you can remove this file.

declare module 'react';
declare module 'react/jsx-runtime';

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}