import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';

export default function LoginForm() {
    return (
        <div className="flex flex-col gap-4">
            <FormControl className="">
                <FormLabel>email</FormLabel>
                <Input type="email" placeholder="Tapez votre email ici" variant="soft" />
            </FormControl>

            <FormControl className="">
                <FormLabel>mot de passe</FormLabel>
                <Input type="password" placeholder="Tapez votre mot de passe ici" variant="soft" />
            </FormControl>

            <Button>Se connecter</Button>
        </div>
    )
}