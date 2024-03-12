import { Mandali } from "next/font/google";
import { Header } from "app/components/shared/Header";
import { Footer } from "app/components/shared/Footer";
import "app/sass/global.sass"

const mandali = Mandali({
  weight: ["400"],
  subsets: ["latin"]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mandali.className}>
        <Header />
        
        {children}
        <Footer />
      </body>
    </html>
  );
}
