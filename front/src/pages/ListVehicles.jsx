import React, { useState, useEffect } from 'react';
import Table from '@mui/joy/Table';
import Button from '@mui/joy/Button';
import { ChangeCircle, DeleteForever, Edit, RemoveCircle } from '@mui/icons-material';
import { Checkbox } from '@mui/joy';
import AddVehicleForm from '../components/Dashboard/components/AddVehicleForm';

export default function VehiclesSearch() {
    const [vehicles, setVehicles] = useState([]);
    const [removeState, setremoveState] = useState(false);
    const [modifyState, setmodifyState] = useState(false);

    function removeHandleClick() {
        setremoveState(removeState => !removeState)
    }

    function modifyHandleClick() {
        setmodifyState(modifyState => !modifyState)
    }

    let removeClassCheck = removeState ? " visible": " hidden";
    let modifyClassCheck = modifyState ? " visible": " hidden";

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
            <div className="flex gap-x-4">
                <AddVehicleForm />
                <Button onClick={modifyHandleClick}>
                    <Edit sx={{ mr: 1 }} />
                    Modifier
                </Button>
                {/* <Button onClick={handleClick}>
                    <ChangeCircle sx={{ mr: 1 }} />
                    Annuler
                </Button> */}
                <Button onClick={removeHandleClick}>
                    <RemoveCircle sx={{ mr: 1 }} />
                    Supprimer
                </Button>
                <button className={`remove${removeClassCheck}`}>
                    <DeleteForever />
                </button>
                {/* <Button >
                    <DeleteForever />
                </Button> */}
            </div>

            <Table>
                <thead>
                    <tr>
                        <th className={`remove${removeClassCheck} w-12`}></th>
                        <th className={`modify${modifyClassCheck} w-20`}></th>
                        <th>Titre de l'annonce</th>
                        <th>Prix</th>
                        <th>Kilométrage</th>
                        <th>Année</th>
                        <th>Couleur</th>
                        <th>Date de mise en ligne</th>
                    </tr>
                </thead>
                <tbody>
                    {vehicles.map((vehicle) => (
                        <tr key={vehicle.id}>
                            <td className={`remove${removeClassCheck}`}>
                                <Checkbox />
                            </td>
                            <td className={`modify${modifyClassCheck}`}>
                                <Button sx={{ width: 40 }}>
                                    <Edit />
                                </Button>
                            </td>
                            <td>{vehicle.name}</td>
                            <td>{vehicle.price} €</td>
                            <td>{vehicle.kilometers} Km</td>
                            <td>{vehicle.released_year}</td>
                            <td>{vehicle.color}</td>
                            <td>{vehicle.released_date}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
}
