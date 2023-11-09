import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import VehicleCard from '../components/VehicleCard';
import PriceFilter from '../components/PriceFilter';
import React, { useState, useEffect } from 'react';

export default function VehiclesSearch() {
    const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
      fetch("https://localhost/api/vehicles")
          .then((response) => {
            return response.json()
          })
          .then((data) => {
            setVehicles(data["hydra:member"]);
          })
          .catch((error) =>
              console.error("Erreur lors de la requête : ", error)
          );
  }, []);

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
                <Typography component="h1" level="h3">{vehicles.length} résultats trouvés</Typography>
                    {vehicles.map((vehicle) => (
                        <VehicleCard
                            src={`https://localhost/upload/images/${vehicle.file_name}`}
                            price={vehicle.price}
                            date="01/05/2023"
                            to={`/vehicles/${vehicle.id}`}
                            key={vehicle.id}
                        >
                            {vehicle.name}
                        </VehicleCard>
                    ))}
            </section>
        </>
    );
}