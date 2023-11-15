import Typography from '@mui/joy/Typography';
import Divider from '@mui/joy/Divider';
import repairs from '../images/repairs.jpg';
import maintenance from '../images/maintenance.jpg';
import cars from '../images/cars.jpg';
import garage from '../images/garage.gif';
import ServiceCard from '../components/ServiceCard';
import ReviewCard from '../components/ReviewCard';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/joy/Link';
import Button from '@mui/joy/Button';

export default function Home() {
    return (
        <>
            <section className="flex gap-x-10 h-96 mb-12">
                <img
                    className="max-w-lg max-[800px]:collapse"
                    src={garage}
                    loading="lazy"
                    alt=""
                />
                <div className="flex flex-col justify-center items-center w-full">
                    <Typography level="h1">Garrage V. Parrot</Typography>
                    <p>À Toulouse depuis 2021</p>
                </div>
            </section>

            <section className="my-12 h-fit">
                <Typography level="p">
                    Ce que nous faisons
                    <Divider />
                </Typography>
                <Typography level="h2">Nos Services</Typography>
                <div className="flex justify-evenly mt-4 flex-wrap">
                    <ServiceCard
                        src={repairs}
                        text="Réparations"
                        description="Nous faisons tout type de réparation. Moteur, freins, direction, etc. Nous remettons votre véhicule sur la route en toute sécurité."
                        to="/contact"
                    >
                        Faire un devis
                    </ServiceCard>
                    <ServiceCard
                        src={maintenance}
                        text="Entretien"
                        description="La révision de votre voiture est une étape importante et essentielle à son bon fonctionnement. Le Garage V. Parrot s’engage à faire un entretien de qualité de votre véhicule."
                        to="/contact"
                    >
                        Prendre R.D.V
                    </ServiceCard>
                    <ServiceCard
                        src={cars}
                        text="Voitures d'occasion"
                        description="Tous nos véhicules disponibles sont sur notre site. N’hésitez pas à faire une recherche sur notre site !"
                        to="/vehicles/search"
                    >
                        Chercher une voiture
                    </ServiceCard>
                </div>
            </section>

            <section className="my-12">
                <Typography level="p">
                    Nos clients nous adorent
                    <Divider />
                </Typography>
                <Typography level="h2">Témoignages</Typography>
                <div className="flex flex-wrap justify-evenly mt-4">
                    <ReviewCard
                        user="Michael Schumacher"
                        title="Très satisfait !"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cras tortor lacus, convallis in molestie eget, feugiat
                        ut neque.
                    </ReviewCard>

                    <ReviewCard user="Alain Prost" title="Garage très sympa">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cras tortor lacus, convallis in molestie eget, feugiat
                        ut neque.
                    </ReviewCard>

                    <ReviewCard user="Jackie Stewart" title="J'y reviendrai">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cras tortor lacus, convallis in molestie eget, feugiat
                        ut neque.
                    </ReviewCard>
                </div>

                <div className="mt-4 flex justify-center">
                    <Button>
                        <Link
                            component={RouterLink}
                            to="/reviews"
                            textColor="white"
                            underline="none"
                            overlay
                        >
                            Voir tous les témoignages
                        </Link>
                    </Button>
                </div>
            </section>
        </>
    );
}
