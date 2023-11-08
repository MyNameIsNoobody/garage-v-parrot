import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';

export default function Footer() {
    return (
        <footer className="flex justify-evenly bg-slate-800 pt-6 pb-12 gap-y-4 max-[800px]:flex-col">
            <div>
                <Typography textColor="white" component="h3" level="h3">
                    Garage V.Parrot
                </Typography>
            </div>

            <div className="flex flex-col w-96 text-white">
                <Typography component="h4" level="title-lg" textColor="white">
                    Horaires d'ouverture
                </Typography>

                <div className="flex justify-between w-60 mt-4">
                    <div className="flex flex-col">
                        <p>Lundi</p>
                        <p>Mardi</p>
                        <p>Mercredi</p>
                        <p>Jeudi</p>
                        <p>Vendredi</p>
                        <p>Samedi</p>
                        <p>Dimanche</p>
                    </div>

                    <div className="flex flex-col">
                        <p>09:00 - 18:00</p>
                        <p>09:00 - 18:00</p>
                        <p>09:00 - 18:00</p>
                        <p>09:00 - 18:00</p>
                        <p>09:00 - 18:00</p>
                        <p>09:00 - 13:00</p>
                        <p>Fermé</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-between">
                <div className="flex flex-col">
                    <Link
                        component={RouterLink}
                        to="/"
                        underline="none"
                        textColor="white"
                    >
                        Mentions légales
                    </Link>

                    <Link
                        component={RouterLink}
                        to="/"
                        underline="none"
                        textColor="white"
                    >
                        Conditions d'utilisateur
                    </Link>

                    <Link
                        component={RouterLink}
                        to="/contact"
                        underline="none"
                        textColor="white"
                    >
                        Contact
                    </Link>

                    <Link
                        component={RouterLink}
                        to="/"
                        underline="none"
                        textColor="white"
                    >
                        Plan du site
                    </Link>
                </div>

                <Typography component="p" textColor="white">
                    © 2023 Tous droits réservés.
                </Typography>
            </div>
        </footer>
    );
}