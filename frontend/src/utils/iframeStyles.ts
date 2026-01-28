/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Injects dark scrollbar styles into HTML content for iframes.
 * This ensures scrollbars inside iframes match the dark theme.
 */
export const injectScrollbarStyles = (html: string): string => {
  const scrollbarStyles = `
    <style data-scrollbar-styles>
      * {
        scrollbar-color: #27272a #09090b;
        scrollbar-width: thin;
      }
      *::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
      *::-webkit-scrollbar-track {
        background: #09090b;
      }
      *::-webkit-scrollbar-thumb {
        background-color: #27272a;
        border-radius: 9999px;
        border: 2px solid #09090b;
      }
      *::-webkit-scrollbar-thumb:hover {
        background-color: #3f3f46;
      }
    </style>
  `;

  // If HTML has a <head>, inject there; otherwise prepend
  if (html.includes("<head>")) {
    return html.replace("<head>", `<head>${scrollbarStyles}`);
  } else if (html.includes("<html>")) {
    return html.replace("<html>", `<html><head>${scrollbarStyles}</head>`);
  }
  return scrollbarStyles + html;
};
