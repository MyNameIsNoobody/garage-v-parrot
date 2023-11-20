import * as React from 'react';
import { CssVarsProvider} from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Textarea from '@mui/joy/Textarea';

export default function VehicleForm() {
  return (
    <CssVarsProvider>
      <main>
        <Sheet
          sx={{
            width: 300,
            mx: 'auto',
            py: 3,
            px: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
          variant="outlined"
        >
          <div>
            <Typography level="h4" component="h2">
              <b>Nous contacter</b>
            </Typography>
          </div>
          <FormControl>
            <FormLabel>Nom et Prénom</FormLabel>
            <Input
              name="name"
              type="string"
              placeholder="Hamilton Lewis"
            />
          </FormControl>

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

          <FormControl>
            <FormLabel>Message</FormLabel>
            <Textarea
                name="message"
                type="text"
                placeholder="Je suis intéressé par votre annonce !" />
          </FormControl>

          <Button sx={{ mt: 1 }}>Envoyer</Button>
        </Sheet>
      </main>
    </CssVarsProvider>
  );
}