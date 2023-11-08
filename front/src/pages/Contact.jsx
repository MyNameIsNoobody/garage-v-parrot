import * as React from 'react';
import { CssVarsProvider} from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Textarea from '@mui/joy/Textarea';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

export default function Contact() {
  return (
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
                          <b>Nous contacter</b>
                      </Typography>
                  </div>
                  <FormControl>
                      <Select defaultValue="estimate">
                          <Option value="estimate">Demander un devis</Option>
                          <Option value="appointment">Prendre R.D.V</Option>
                          <Option value="question">Question</Option>
                      </Select>
                  </FormControl>

                  <FormControl>
                      <FormLabel>Nom et Prénom</FormLabel>
                      <Input
                          name="name"
                          type="string"
                          placeholder="Hamilton Lewis"
                      />
                  </FormControl>

                  <div className="flex justify-between flex-wrap">
                      <FormControl>
                          <FormLabel>Email</FormLabel>
                          <Input
                              name="email"
                              type="email"
                              placeholder="lewis.hamilton@email.com"
                          />
                      </FormControl>

                      <FormControl>
                          <FormLabel>Téléphone</FormLabel>
                          <Input
                              name="phone number"
                              type="tel"
                              placeholder="0123456789"
                          />
                      </FormControl>
                  </div>

                  <FormControl>
                      <FormLabel>Message</FormLabel>
                      <Textarea
                          name="message"
                          type="text"
                          minRows={6}
                          placeholder="Écrivez-nous votre message !"
                      />
                  </FormControl>

                  <Button sx={{ mt: 1 }}>Envoyer</Button>
              </Sheet>
          </main>
      </CssVarsProvider>
  );
}