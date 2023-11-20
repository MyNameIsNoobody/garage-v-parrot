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

export default function ReviewForm() {
  const [open, setOpen] = React.useState(false);
  return (
      <>
          <div className="flex justify-center my-6">
              <Button onClick={() => setOpen(true)}>
                  Laissez-nous votre avis
              </Button>
          </div>

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
                      maxWidth: 500,
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
                                  mx: 6,
                                  my: 4,
                                  py: 3,
                                  px: 6,
                                  display: "flex",
                                  flexDirection: "column",
                                  borderRadius: "sm",
                                  boxShadow: "md",
                              }}
                              variant="outlined"
                          >
                              <FormControl>
                                  <FormLabel>Titre</FormLabel>
                                  <Input name="title" type="string" />
                              </FormControl>

                              <FormControl>
                                  <FormLabel>Surnom</FormLabel>
                                  <Input name="name" type="name" />
                              </FormControl>

                              <FormControl>
                                  <FormLabel>Votre avis</FormLabel>
                                  <Textarea
                                      name="message"
                                      type="text"
                                      minRows={6}
                                  />
                              </FormControl>

                              <Button sx={{ mt: 1 }}>Envoyer</Button>
                          </Sheet>
                      </main>
                  </CssVarsProvider>
              </Sheet>
          </Modal>
      </>
  );
}