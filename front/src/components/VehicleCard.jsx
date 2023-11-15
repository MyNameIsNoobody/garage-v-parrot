import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/joy/Link';

export default function VehicleCard(props) {
  return (
      <Card
          variant="outlined"
          sx={{
              width: 320,
              my: 2,
              boxShadow: "sm",
              "&:hover": { boxShadow: "lg", borderColor: "neutral.outlinedHoverBorder" },
          }}
      >
          <CardOverflow>
              <AspectRatio ratio="5/3">
                  <img src={props.src} loading="lazy" alt={props.alt} />
              </AspectRatio>
          </CardOverflow>
          <CardContent>
              <Link
                  component={RouterLink}
                  overlay
                  underline="none"
                  to={props.to}
              >
                <Typography textColor="black" fontWeight="md">{props.children}</Typography>
              </Link>
              <Typography level="body-sm">{props.price}</Typography>
              <Typography level="body-xs" sx={{ mt: "40px" }}>
                  {props.date}
              </Typography>
          </CardContent>
      </Card>
  );
}