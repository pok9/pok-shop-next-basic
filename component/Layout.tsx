import Navbar from "./Navbar"
import Footer from "./Footer"

import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return(
        <div>
            <Navbar />
                {children}
            <Footer />
        </div>
    )
  };
  


export default Layout