import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/joy/Link';
import Button from '@mui/joy/Button';

export default function ServiceCard(props) {
  return (
      <Card variant="outlined" sx={{ width: 320 }}>
          <CardOverflow>
              <AspectRatio ratio="5/3">
                  <img src={props.src} loading="lazy" alt={props.alt} />
              </AspectRatio>
          </CardOverflow>
          <CardContent
              sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
              }}
          >
              <div className="flex flex-col gap-y-2 mb-2">
                  <Typography level="title-lg">{props.text}</Typography>
                  <Typography level="body-sm">{props.description}</Typography>
              </div>
              <Button sx={{ my: 1 }}>
                  <Link
                      component={RouterLink}
                      to={props.to}
                      textColor="white"
                      underline="none"
                      overlay
                  >
                      {props.children}
                  </Link>
              </Button>
          </CardContent>
      </Card>
  );
}