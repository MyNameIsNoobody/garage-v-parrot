import { Business, LogoutRounded, SettingsOutlined, SupportOutlined } from "@mui/icons-material";
import { Avatar, IconButton, List, ListItem, ListSubheader, Sheet, Typography } from "@mui/joy";
import { Box, Divider } from "@mui/material";
import { closeSidebar } from "../utils";
import SideBarLink from "./SideBarLink";
import { categories } from "../categories";

export default function SideBar() {
    return (
        <Sheet 
            className="flex flex-col shrink-0 gap-4 p-4 h-screen w-56 lg:w-60 border-r top-0 z-50"
            sx={{
                position: {
                    xs: 'fixed',
                    lg: 'sticky',
                },
                transform: {
                    xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))',
                    lg: 'none',
                },
                transition: 'transform 0.4s, width 0.4s',
            }}
        >
            <Box 
                className="top-0 left-0 w-screen h-screen z-40"
                sx={{
                    position: 'fixed',
                    opacity: 'var(--SideNavigation-slideIn, 0)',
                    backgroundColor: '#00000085',
                    transition: 'opacity 0.4s',
                    transform: {
                        xs: 'translateX(calc(224px * (var(--SideNavigation-slideIn, 0)) + 100% * (var(--SideNavigation-slideIn, 0) - 1)))',
                        lg: 'translateX(-100%)'
                    },
                }}
                onClick={() => closeSidebar()}
            />
            <Box className="flex gap-4 items-center">
                <IconButton variant="soft">
                    <Business />
                </IconButton>
                <Typography level="title-lg">Dashboard</Typography>
            </Box>
            <Box className="flex flex-col grow">
                <List
                    size="md"
                    sx={{
                        gap: 3
                    }}
                >
                    {categories.map((category, categoryIndex) => (
                        <ListItem nested key={categoryIndex}>
                            <ListSubheader>{category.name}</ListSubheader>
                            <List
                                size="sm"
                                sx={{
                                    gap: 1,
                                    '--List-nestedInsetStart': '30px',
                                    '--ListItem-radius': '7px',
                                }}
                            >
                                {category.links.map((link, linkIndex) => (
                                    <SideBarLink key={linkIndex} to={link.to} icon={link.icon}>
                                        {link.name}
                                    </SideBarLink>
                                ))}
                            </List>
                        </ListItem>
                    ))}
                </List>
                {/* <List
                    size="md"
                    sx={{
                        flexGrow: 0,
                        '--ListItem-radius': '7px',
                    }}
                >
                    <SideBarLink to="/support" icon={<SupportOutlined />}>Support</SideBarLink>
                    <SideBarLink to="/setting" icon={<SettingsOutlined />}>Option</SideBarLink>
                </List> */}
            </Box>
            <Divider />
            <Box className="flex gap-2 items-center">
                <Avatar
                    variant="outlined"
                    size="sm"
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                />
                <Box className="flex-1 min-w-0">
                    <Typography level="title-sm">Vincent Parrot</Typography>
                    <Typography level="body-xs">email@example.com</Typography>
                </Box>
                <IconButton 
                    size="sm"
                    variant="plain"
                    color="neutral"
                >
                    <LogoutRounded />
                </IconButton>
            </Box>
        </Sheet>
    )
}