import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import Home from "@mui/icons-material/Home";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import InfoIcon from '@mui/icons-material/Info';
import EmailIcon from '@mui/icons-material/Email';
import NavButton from "./NavButton";
import logo from '../../images/logo.png';

export default function Nav() {
    return (
        <Box
            component="nav"
            aria-label="Menu de navigation"
            className="bg-white w-full flex justify-between shadow-md"
        >
            <List
                className="flex justify-start h-20"
                role="menubar"
                orientation="horizontal"
            >
                <NavButton to="/" color="none">
                    <img src={logo} className="h-full" />
                </NavButton>
                <NavButton to="/" text="Accueil">
                    <Home />
                </NavButton>
                <NavButton to="/vehicles/search" text="Voitures d'occasion">
                    <DirectionsCarIcon />
                </NavButton>
                <NavButton to="/about" text="À propos">
                    <InfoIcon />
                </NavButton>
            </List>
            <List
                className="flex h-20 justify-end"
                role="menubar"
                orientation="horizontal"
            >
                <NavButton
                    to="/contact"
                    text="Contact"
                    color="primary"
                    variant="solid"
                >
                    <EmailIcon />
                </NavButton>
            </List>
        </Box>
    );
}
