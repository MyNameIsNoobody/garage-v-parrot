import { Menu } from "@mui/icons-material";
import { IconButton, Sheet } from "@mui/joy";
import { openSidebar } from "../utils";

export default function Header() {
    return (
        <Sheet className="flex lg:hidden w-screen border-b p-3"
            sx={{
                position: "fixed"
            }}
        >
            <IconButton
                onClick={() => openSidebar()}
                variant="outlined"
                color="neutral"
                size="sm"
            >
                <Menu />
            </IconButton>
        </Sheet>
    )
}