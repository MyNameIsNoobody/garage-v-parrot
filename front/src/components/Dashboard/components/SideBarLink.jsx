import { ListItem, ListItemButton, ListItemContent, Typography } from "@mui/joy";
import { PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";

// interface PropsLink extends PropsWithChildren {
//     icon: JSX.Element,
//     to: string,
// }

export default function SideBarLink(link) {
    return (
        <ListItem>
            <NavLink to={link.to} className="w-full" end>
                {({isActive}) => (
                    <ListItemButton selected={isActive ? true : false}>
                        {link.icon}
                        <ListItemContent>
                            <Typography level="title-sm">{link.children}</Typography>
                        </ListItemContent>
                    </ListItemButton>
                )}
            </NavLink>
        </ListItem>
    )
}