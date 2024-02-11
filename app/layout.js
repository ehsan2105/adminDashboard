import Header from "./commponets/Header";
import Sidebar from "./commponets/Sidebar";
import "./globals.css";





export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body >
        <div className="flex">
            <Sidebar />

          <main className=" bg-gray-100  pb-4  mr-20 w-full">

            <Header />
          </main>

        </div>
          {children}
      </body>
    </html>
  );
}
