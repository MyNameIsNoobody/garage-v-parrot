import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import VehicleCard from '../components/VehicleCard';
import PriceFilter from '../components/PriceFilter';

export default function VehiclesSearch() {
    return (
        <>
            <section className="flex justify-between my-12">
                <div className="w-2/3">
                    <FormControl sx={{width: 2/3}}>
                        <FormLabel>Recherche</FormLabel>
                        <Input
                            name="search"
                            type="string"
                            placeholder="Véhicule, modèle,..."
                        />
                    </FormControl>
                </div>
                <div className="flex flex-col w-1/3">
                    <Typography component="p">Prix</Typography>
                    <PriceFilter />
                </div>
            </section>


            <section className="flex flex-col my-12 ">
                <Typography component="h1" level="h3">3 résultats trouvés</Typography>
                <VehicleCard
                    src="https://cloud.leparking.fr/2022/01/20/23/15/fiat-panda-active-eco-5-door-jaune_8104519786.jpg"
                    price="2300 €"
                    date="01/05/2023"
                    to="/vehicles/1"
                    >
                    Fiat Panda
                </VehicleCard>
                <VehicleCard
                    src="https://cdn-s-www.ledauphine.com/images/ACB7A383-1256-43F7-89BC-3796D9823B54/MF_contenu/citroen-c3-d-occasion-laquelle-choisir-1627978544.jpg"
                    price="1800 €"
                    date="02/02/2023"
                    >
                    Citroen C3
                </VehicleCard>
                <VehicleCard
                    src="https://images.caradisiac.com/logos-ref/modele/modele--renault-twingo-2/S7-modele--renault-twingo-2.jpg"
                    price="2250 €"
                    date="05/11/2023"
                    >
                    Twingo 2
                </VehicleCard>
            </section>
        </>
    );
}