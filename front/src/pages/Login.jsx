import LoginForm from '../components/LoginForm';

export default function Login() {
    return (
            <div className="flex flex-row">
                <div className="flex basis-2/5 justify-center">
                    <div className="max-w-xs flex flex-col gap-y-4 justify-center">
                        <h1 className="text-center">Connexion</h1>
                        <LoginForm />
                    </div>
                </div>
                <div className="basis-3/5 h-screen bg-stone-400">

                </div>
            </div>
    )
}

