import Typography from '@mui/joy/Typography';

export default function VehicleSpec(props) {
    return (
        <>
            <div>
                <Typography component="p" level="h4">{props.title}</Typography>
                <Typography component="p">{props.children}</Typography>
            </div>
        </>
    );
}