import Aside from './components/Aside';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="flex h-screen">
        <Aside />
        <div className="bg-gray-100  w-screen">{children}</div>
      </body>
    </html>
  );
}
