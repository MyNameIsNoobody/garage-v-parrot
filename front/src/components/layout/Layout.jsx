import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout() {
    return (
        <>
            <div className="max-w-6xl flex flex-col items-center mx-auto px-4 bg-slate-200">
                <header className="w-full my-12">
                    <Nav />
                </header>
                <div className="w-full">
                    <Outlet/>
                </div>
            </div>
            <Footer />
        </>
    )
}