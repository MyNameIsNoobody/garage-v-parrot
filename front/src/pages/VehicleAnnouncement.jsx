import Typography from '@mui/joy/Typography';
import VehicleForm from '../components/VehicleForm';
import Image from '../components/Image';
import VehicleSpec from '../components/VehicleSpec';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function VehicleAnnouncement() {
    let { vehiclesId } = useParams();
    console.log(vehiclesId)
    const [vehicle, setVehicle] = useState({});

  useEffect(() => {
      fetch(`https://localhost/api/vehicles/${vehiclesId}`)
          .then((response) => response.json())
          .then((data) => setVehicle(data))
          .catch((error) =>
              console.error("Erreur lors de la requête : ", error)
          );
  }, []);
    return (
        <>
            <section className="flex h-fit my-12">
                <div className="w-3/5 mx-4 h-96">
                    <Image src={`https://localhost/upload/images/${vehicle.file_name}`} />
                    <Typography component="h1" level="h3">
                        {vehicle.name}
                    </Typography>
                    <Typography component="p" level="title-md">
                        {vehicle.price} €
                    </Typography>
                </div>

                <div className="w-2/5 mx-4">
                    <VehicleForm />
                </div>
            </section>

            <section className="h-fit my-12">
                <Typography component="h2" level="h4">
                    Caractéristiques
                </Typography>
                <div className="grid grid-cols-3 mt-4 gap-y-4">
                    <VehicleSpec title="Marque">{vehicle.brand}</VehicleSpec>
                    <VehicleSpec title="Modèle">{vehicle.model}</VehicleSpec>
                    <VehicleSpec title="Année de mise en circulation">
                    {vehicle.released_year}
                    </VehicleSpec>
                    <VehicleSpec title="Kilométrage">{vehicle.kilometers} Km</VehicleSpec>
                    <VehicleSpec title="Couleur">{vehicle.color}</VehicleSpec>
                    <VehicleSpec title="Boîte de vitesse">{vehicle.is_manual ? "Manuelle" : "Automatique"}</VehicleSpec>
                </div>
            </section>

            <section className="my-12">
                <Typography component="h2" level="h4">
                    Description
                </Typography>
                <Typography component="p" sx={{ my: 1 }}>
                 {vehicle.description}
                </Typography>
            </section>
        </>
    );
}