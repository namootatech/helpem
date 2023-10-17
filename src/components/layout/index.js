import Navigation from '../navigation';
import Footer from '@/components/footer';
const Layout = ({children}) => {
    return (
      <div>
        <Navigation />
        <main className="container mx-auto mt-20">{children}</main>
        <Footer />
      </div>
    );
}

export default Layout;