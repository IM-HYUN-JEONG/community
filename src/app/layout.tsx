import type { Metadata } from 'next';
import { pretendard } from '@/app/_components/ui/fonts';
import '@/app/styles/globals.css';
import { nodeServer } from '@/__mock__/browser';
import { DEV } from '@/constants/api';
import { SessionContext } from './api/auth/SessionContext';

export const metadata: Metadata = {
  title: 'Orury',
  description: 'Generated by create next app',
};

function RootLayout({ children }: { children: React.ReactNode }) {
  if (DEV) {
    nodeServer.listen();
  }

  return (
    <html lang="en">
      <meta
        name="viewport"
        content="viewport-fit=cover, width=device-width, initial-scale=1.0"
      />
      <body className={`${pretendard.className} antialiased bg-slate-100`}>
        <SessionContext>
          <div className="max-w-[768px] mx-auto h-screen pb-safe bg-white">
            {children}
          </div>
        </SessionContext>
      </body>
    </html>
  );
}

export default RootLayout;
