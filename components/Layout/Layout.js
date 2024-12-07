// components/layout/Layout.jsx
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-4 ">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
