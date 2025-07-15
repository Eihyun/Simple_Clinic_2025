import { Outlet } from "react-router";

import Header from "./Header";
import Footer from "./Footer";

function PageWrap() {

    return (
        <>
            <Header />
            <main className="page-content">
                <Outlet />
            </main>
            <Footer />
        
        </>
    );

}

export default PageWrap;