import Navigation from '../navigation';

const Layout = ({children}) => {
    return (
      <div>
        <Navigation />
        <main class="container mx-auto mt-20">{children}</main>
      </div>
    );
}

export default Layout;