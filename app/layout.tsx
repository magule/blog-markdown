import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
        
        <Link href="/">
          <h1 className="text-2xl text-white font-bold mt-4">Furkan Kalaycioglu</h1>
        </Link>
        <p className="text-slate-300">💻 Welcome to my blog 🤟</p>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="border-t border-slate-400 mt-12 py-6 text-center text-slate-400">
        <h3>Furkan Kalaycioglu</h3>
      </div>
    </footer>
  );

  return (
    <html>
      <head />
      <body>
        <div className="mx-auto  max-w-3xl px-4">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
