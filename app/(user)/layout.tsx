import Header from "components/Header";
import "../../styles/globals.css";
import Banner from "components/Banner";
import Footer from "components/Footer";
import Providers from "components/Providers";
import Head from "next/head";
import { Metadata } from "next";
import { Montserrat, Roboto } from "@next/font/google";

const montserrat = Roboto({
  subsets:['latin'],
  weight:['400', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.netialap.com'),
  title: {
    default: 'netialap.com',
    template: `%s | netialap.com`,
  },
  description: 'netiap.com is a world biggest website for reading and writing',
  twitter: {
    card: 'summary_large_image',
    site: '@netialap',
  },
  verification:{
    google:"google-site-verification48928932458",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-adsense-account" content="ca-pub-8731247500470013" />
        <title>netialap.com</title>
        <meta
          name="description"
          content="netiap.com is a world biggest website for reading and writing"
        />
    
        <link rel="icon" href="/sh.png" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8731247500470013"
     crossOrigin="anonymous"></script>
      </Head>
      
      
      <body className={montserrat.className}>
        <div className="max-w-7xl mx-auto">
          <Providers>
          <link rel="icon" href="/sh.png" />
            <div className="bg-primary w-full overflow-hidden">
              <div className={`sm:px-16 px-6 flex justify-center items-center`}>
                <div className={`xl:max-w-[1280px] w-full`}>
                  <Header />
                  <Banner />
                  <div className="relative min-h-screen ">
                    {/* Display the AdSense ad */}

                    {children}
                  </div>
                  <div className="position-fixed ">
                    <div className="relative flex overflow-x-hidden  mb-5 rounded-md font-Oswald">
                      {/* Other content */}
                    </div>
                    <hr className="border-[#0A7DFF]" />
                    <Footer />
                  </div>
                </div>
              </div>
            </div>
          </Providers>
        </div>
      </body>
    </html>
  );
}
