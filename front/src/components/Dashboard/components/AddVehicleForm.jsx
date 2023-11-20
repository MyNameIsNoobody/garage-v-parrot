import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Sheet from '@mui/joy/Sheet';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Textarea from '@mui/joy/Textarea';
import { CssVarsProvider} from '@mui/joy/styles';
import { AddCircle } from '@mui/icons-material';
import RadioButtons from './RadioButtons';

export default function AddVehicleForm() {
  const [open, setOpen] = React.useState(false);
  return (
      <>
          <Button onClick={() => setOpen(true)}>
              <AddCircle sx={{ mr: 1 }} />
              Ajouter un Véhicule
          </Button>

          <Modal
              aria-labelledby="modal-title"
              aria-describedby="modal-desc"
              open={open}
              onClose={() => setOpen(false)}
              sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
              }}
          >
              <Sheet
                  variant="outlined"
                  sx={{
                      width: "80%",
                      borderRadius: "md",
                      p: 3,
                      boxShadow: "lg",
                  }}
              >
                  <ModalClose variant="plain" sx={{ m: 1 }} />
                  <CssVarsProvider>
                      <main className="flex justify-center">
                          <Sheet
                              sx={{
                                  maxWidth: "80%",
                                  mx: 6,
                                  my: 4,
                                  py: 3,
                                  px: 6,
                                  gap: 2,
                                  display: "flex",
                                  flexDirection: "column",
                                  borderRadius: "sm",
                                  boxShadow: "md",
                              }}
                              variant="outlined"
                          >
                              <FormControl>
                                  <FormLabel>
                                      Titre de l'annonce (Marque + Modèle)
                                  </FormLabel>
                                  <Input name="title" type="string" />
                              </FormControl>

                              <div className="flex gap-x-3">
                                  <FormControl>
                                      <FormLabel>Marque</FormLabel>
                                      <Input name="brand" type="string" />
                                  </FormControl>

                                  <FormControl>
                                      <FormLabel>Modèle</FormLabel>
                                      <Input name="model" type="string" />
                                  </FormControl>

                                  <FormControl>
                                      <FormLabel>Prix</FormLabel>
                                      <Input name="price" type="int" />
                                  </FormControl>
                              </div>

                              <div className="flex gap-x-3">
                                  <FormControl>
                                      <FormLabel>Kilométrage</FormLabel>
                                      <Input name="kilometers" type="int" />
                                  </FormControl>

                                  <FormControl>
                                      <FormLabel>
                                          Année de mise en circulation
                                      </FormLabel>
                                      <Input name="releasedYear" type="int" />
                                  </FormControl>

                                  <FormControl>
                                      <FormLabel>
                                          Date de mise en ligne
                                      </FormLabel>
                                      <Input
                                          name="releasedDate"
                                          type="string"
                                      />
                                  </FormControl>
                              </div>

                              <div className="flex gap-x-8">
                                  <FormControl>
                                      <FormLabel>Couleur</FormLabel>
                                      <Input name="color" type="string" />
                                  </FormControl>

                                  <RadioButtons />
                              </div>

                              <FormControl>
                                  <FormLabel>Description</FormLabel>
                                  <Textarea
                                      name="description"
                                      type="text"
                                      minRows={6}
                                  />
                              </FormControl>
                              <div className="flex justify-center my-2">
                                  <Button sx={{ width: 200 }}>
                                      Ajouter
                                  </Button>
                              </div>
                          </Sheet>
                      </main>
                  </CssVarsProvider>
              </Sheet>
          </Modal>
      </>
  );
}