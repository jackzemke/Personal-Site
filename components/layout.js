import NavBar from './navbar';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main className="pt-16 min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}
