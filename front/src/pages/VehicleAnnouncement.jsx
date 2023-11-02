import Typography from '@mui/joy/Typography';
import VehicleForm from '../components/VehicleForm';
import Image from '../components/Image';
import VehicleSpec from '../components/VehicleSpec';

export default function VehicleAnnouncement() {
    return (
        <>
            <section className="flex h-fit my-12">
                <div className="w-3/5 mx-4 h-96">
                    <Image />
                    <Typography component="h1" level="h3">Fiat Panda</Typography>
                    <Typography component="p" level="title-md">6 000 €</Typography>
                </div>

                <div className="w-2/5 mx-4">
                    <VehicleForm />
                </div>
            </section>


            <section className="h-fit my-12">
                <Typography component="h2" level="h4">Caractéristiques</Typography>
                <div className="grid grid-cols-3 mt-4 gap-y-4">
                    <VehicleSpec title="Marque">Fiat</VehicleSpec>
                    <VehicleSpec title="Modèle">Panda</VehicleSpec>
                    <VehicleSpec title="Année de mise en circulation">2012</VehicleSpec>
                    <VehicleSpec title="Kilométrage">90 578 Km</VehicleSpec>
                    <VehicleSpec title="Couleur">Jaune</VehicleSpec>
                    <VehicleSpec title="Boîte de vitesse">Manuelle</VehicleSpec>
                </div>
            </section>


            <section className="my-12">
                <Typography component="h2" level="h4">Description</Typography>
                <Typography component="p" sx={{ my: 1 }}>
                    Bonjour à tous les amateurs de conduite urbaine et de petites voitures pleines de caractère !
                    Nous mettons en vente notre Fiat Panda 2012, un compagnon fidèle qui a su nous charmer avec son style unique et sa praticité exceptionnelle. Cette Panda, en particulier, arbore une magnifique couleur jaune éclatante qui la distingue sur la route
                </Typography>

                <Typography component="p" sx={{ my: 1 }}>
                    - Compacte et Maniable : parfaite pour se faufiler dans la circulation urbaine.
                </Typography>
                <Typography component="p" sx={{ my: 1 }}>
                    - Économique : faible consommation de carburant, idéale pour les déplacements quotidiens.
                </Typography>
                <Typography component="p" sx={{ my: 1 }}>
                    - Entretien Suivi : historique d'entretien complet, pas de frais à prévoir.
                </Typography>
            </section>
        </>
    );
}