import { NavLink } from "react-router-dom";
import { ListItem, ListItemButton } from "@mui/joy";

export default function NavButton(props) {
    return (
        <ListItem
            role="none"
            sx={{
                p: 0
            }}
        >
            <NavLink
                to={props.to}
                // className={({ isActive, isPending }) =>
                //     isPending ? "pending" : isActive ? "active" : ""
                // }
                className="flex gap-x-2 h-full w-full px-4 items-center"
            >
            {({isActive}) => (
            <ListItemButton
                color={props.color !== undefined ? props.color : "neutral"}
                variant={props.color !== undefined ? props.variant : "plain"}
                sx={{
                    my: 0
                }}
                selected={isActive}
            >
                {props.children}
                {props.text}
            </ListItemButton>
            )}
            </NavLink>
        </ListItem>
    )
}