import '../App.css';
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListDivider from "@mui/joy/ListDivider";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import Home from "@mui/icons-material/Home";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import InfoIcon from '@mui/icons-material/Info';
import EmailIcon from '@mui/icons-material/Email';

export default function Nav() {
    return (
        <Box component="nav" aria-label="Menu de navigation" sx={{ flexGrow: 1 }}>
            <List role="menubar" orientation="horizontal">
                <ListItem role="none">
                    <ListItemButton role="menuitem" component="a" href="#" aria-label="Accueil">
                        <Home />
                        Accueil
                    </ListItemButton>
                </ListItem>
                <ListDivider />
                <ListItem role="none">
                    <ListItemButton role="menuitem" component="a" href="#">
                        <DirectionsCarIcon />
                        Voitures d'occasion
                    </ListItemButton>
                </ListItem>
                <ListDivider />
                <ListItem role="none">
                    <ListItemButton role="menuitem" component="a" href="#">
                        <InfoIcon />
                        À propos
                    </ListItemButton>
                </ListItem>
                <ListItem role="none" sx={{ marginInlineStart: "auto" }}>
                    <ListItemButton role="menuitem" component="a" href="#" aria-label="Contact">
                        <EmailIcon />
                        Contact
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>

        // <nav className="App-nav flex justify-center gap-x-16">
        //   <ul className="flex gap-x-16">
        //     <li><a href="#">Accueil</a></li>
        //     <li><a href="#">Véhicules d'occasion</a></li>
        //     <li><a href="#">À propos</a></li>
        //   </ul>
        //   <button><a href="#">Contact</a></button>
        // </nav>
    );
}
