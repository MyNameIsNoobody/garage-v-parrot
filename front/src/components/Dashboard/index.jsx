import { Box } from "@mui/joy";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
    return (
        <div className="flex h-screen">
            <Header />
            <SideBar />
            <Box 
                component="main" 
                className="flex flex-col flex-1 h-screen gap-2 px-4 lg:px-12 pt-20 lg:pt-5"
            >
                <Outlet />
            </Box>
        </div>
    )
}