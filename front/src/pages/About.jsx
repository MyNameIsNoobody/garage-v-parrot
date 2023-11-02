import Typography from "@mui/joy/Typography";

export default function About() {
    return (
        <>
            <section className="flex flex-col gap-y-6 my-12">
                <Typography component="h1" level="h2">Bienvenue au Garage Vincent Parrot</Typography>

                <Typography component="p" level="body-md">Votre destination automobile de confiance à Toulouse depuis 2021. Notre établissement s'est rapidement établi comme un lieu incontournable pour les amoureux de l'automobile, où la passion et le professionnalisme se rejoignent pour vous offrir des services exceptionnels.</Typography>

                <Typography component="h2" level="h4">Notre Engagement</Typography>

                <Typography component="p" level="body-md">Nous sommes déterminés à fournir à nos clients des services de la plus haute qualité. Que vous ayez besoin de réparations, d'entretien régulier ou que vous soyez à la recherche d'une voiture d'occasion de confiance, vous pouvez compter sur notre expertise. Notre engagement envers la satisfaction du client est notre priorité absolue.</Typography>

                <Typography component="h2" level="h4">Notre Localisation</Typography>

                <Typography component="p" level="body-md">Situé au cœur de Toulouse, notre garage est facilement accessible et offre un environnement accueillant où vous pouvez discuter de vos besoins automobiles avec notre équipe sympathique.</Typography>

                <Typography component="p" level="body-md">Chez Vincent Parrot, nous croyons en la transparence, l'intégrité et l'excellence. Nous sommes fiers de servir la communauté automobile de Toulouse et nous nous engageons à maintenir les normes les plus élevées dans tout ce que nous faisons.</Typography>

                <Typography component="p" level="body-md">N'hésitez pas à nous contacter pour en savoir plus sur nos services, nos voitures d'occasion ou pour prendre rendez-vous. Nous sommes impatients de vous accueillir et de vous offrir une expérience automobile exceptionnelle.</Typography>

                <Typography component="p" level="body-md">Merci de nous faire confiance pour tous vos besoins en matière d'automobile.</Typography>
            </section>
        </>
    );
}