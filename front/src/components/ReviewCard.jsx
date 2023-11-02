import * as React from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Ratings from './Ratings';

export default function ReviewCard(props) {
  return (
      <Card
          sx={{
              width: 320,
              maxWidth: "100%",
              boxShadow: "lg",
          }}
      >
          <CardContent
              sx={{ alignItems: "center", textAlign: "center", pb: 2 }}
          >
              <Typography
                  level="body-sm"
                  textAlign="left"
                  textColor="common.black"
                  sx={{ maxWidth: "24ch", mb: 2 }}
              >
                  {props.children}
              </Typography>

              <Typography
                  component="p"
                  level="body-md"
                  textColor="text.tertiary"
              >
                  {props.user}
              </Typography>
          </CardContent>
          {/* <Ratings></Ratings> */}
      </Card>
  );
}