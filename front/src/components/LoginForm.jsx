import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';

export default function LoginForm() {
    return (
        <FormControl>
            <FormLabel>email</FormLabel>
            <Input type="email" placeholder="Tapez votre email ici" variant="soft" />

            <FormLabel>mot de passe</FormLabel>
            <Input type="password" placeholder="Tapez votre mot de passe ici" variant="soft" />

            <Button>Se connecter</Button>
        </FormControl>
    )
}