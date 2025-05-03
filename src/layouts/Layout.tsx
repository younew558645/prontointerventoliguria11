import type React from 'react';
import Header from '../components/Header';
import Reviews from '../components/Reviews'; 
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';


interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <footer>
        <Footer /> {/* Footer rimarrà qui */}
      </footer>
    </div>
  );
};

export default Layout;