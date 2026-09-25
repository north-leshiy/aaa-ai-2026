import type { Page, SlideMeta } from '@open-slide/core';

const Cover: Page = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#fafafe',
      color: '#15111f',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    }}
  >
    <h1 style={{ fontSize: 160, fontWeight: 800, letterSpacing: '-0.02em', margin: 0 }}>aaa-ai-2026</h1>
  </div>
);

export const meta: SlideMeta = { title: 'aaa-ai-2026' };
export default [Cover] satisfies Page[];
