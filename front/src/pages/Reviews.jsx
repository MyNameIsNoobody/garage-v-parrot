import * as React from 'react';
import { CssVarsProvider} from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Textarea from '@mui/joy/Textarea';
import ReviewCard from '../components/ReviewCard';
import ModalForm from '../components/ModalForm';

export default function Contact() {
  return (
      <>
          <Typography level="h2">Tous nos témoignages</Typography>
          <div className="flex flex-wrap justify-between mt-4">
              <ReviewCard user="Michael Schumacher" title="Très satisfait !">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  tortor lacus, convallis in molestie eget, feugiat ut neque.
              </ReviewCard>

              <ReviewCard user="Alain Prost" title="Garage très sympa">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  tortor lacus, convallis in molestie eget, feugiat ut neque.
              </ReviewCard>

              <ReviewCard user="Jackie Stewart" title="J'y reviendrai">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  tortor lacus, convallis in molestie eget, feugiat ut neque.
              </ReviewCard>

              <ReviewCard user="sardine31" title="Pas mal mais un peu cher">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  tortor lacus, convallis in molestie eget, feugiat ut neque.
              </ReviewCard>

              <ReviewCard user="zeroutard" title="À quand la moto ?">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  tortor lacus, convallis in molestie eget, feugiat ut neque.
              </ReviewCard>

              <ReviewCard user="magic-build" title="Ça charbonne dur ici">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  tortor lacus, convallis in molestie eget, feugiat ut neque.
              </ReviewCard>
          </div>

          <ModalForm />

          <CssVarsProvider>
              <main className="flex justify-center">
                  <Sheet
                      sx={{
                          width: 1 / 2,
                          mx: 6,
                          mb: 6,
                          py: 3,
                          px: 2,
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          borderRadius: "sm",
                          boxShadow: "md",
                      }}
                      variant="outlined"
                  >
                      <div>
                          <Typography level="h4" component="h1">
                              <b>Laissez-nous votre avis</b>
                          </Typography>
                      </div>

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
                          <Textarea name="message" type="text" minRows={6} />
                      </FormControl>

                      <Button sx={{ mt: 1 }}>Envoyer</Button>
                  </Sheet>
              </main>
          </CssVarsProvider>
      </>
  );
}