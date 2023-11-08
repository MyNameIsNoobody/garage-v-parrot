import Typography from '@mui/joy/Typography';
import VehicleForm from '../components/VehicleForm';
import Image from '../components/Image';
import VehicleSpec from '../components/VehicleSpec';
import React, { useState, useEffect } from 'react';

export default function VehicleAnnouncement() {
    const [vehicles, setVehicles] = useState({});

  useEffect(() => {
      fetch("https://localhost/api/vehicles/1")
          .then((response) => response.json())
          .then((data) => setVehicles(data))
          .catch((error) =>
              console.error("Erreur lors de la requête : ", error)
          );
  }, []);
    return (
        <>
            <section className="flex h-fit my-12">
                <div className="w-3/5 mx-4 h-96">
                    <Image />
                    <Typography component="h1" level="h3">
                        {vehicles.name}
                    </Typography>
                    <Typography component="p" level="title-md">
                        {vehicles.price} €
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
                    <VehicleSpec title="Marque">{vehicles.brand}</VehicleSpec>
                    <VehicleSpec title="Modèle">{vehicles.model}</VehicleSpec>
                    <VehicleSpec title="Année de mise en circulation">
                    {vehicles.released_year}
                    </VehicleSpec>
                    <VehicleSpec title="Kilométrage">{vehicles.kilometers} Km</VehicleSpec>
                    <VehicleSpec title="Couleur">{vehicles.color}</VehicleSpec>
                    <VehicleSpec title="Boîte de vitesse">{vehicles.is_manual ? "Manuelle" : "Automatique"}</VehicleSpec>
                </div>
            </section>

            <section className="my-12">
                <Typography component="h2" level="h4">
                    Description
                </Typography>
                <Typography component="p" sx={{ my: 1 }}>
                 {vehicles.description}
                </Typography>
            </section>
        </>
    );
}