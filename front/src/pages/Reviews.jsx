import * as React from 'react';
import Typography from '@mui/joy/Typography';
import ReviewCard from '../components/ReviewCard';
import ModalForm from '../components/ModalForm';

export default function Contact() {
  return (
      <>
          <Typography level="h2">Tous nos témoignages</Typography>
          <div className="flex flex-wrap justify-between mt-4">
              <ReviewCard user="Michael Schumacher" title="Très satisfait !">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  tortor lacus, convallis in molestie eget, feugiat ut neque.
              </ReviewCard>

              <ReviewCard user="Alain Prost" title="Garage très sympa">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  tortor lacus, convallis in molestie eget, feugiat ut neque.
              </ReviewCard>

              <ReviewCard user="Jackie Stewart" title="J'y reviendrai">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  tortor lacus, convallis in molestie eget, feugiat ut neque.
              </ReviewCard>

              <ReviewCard user="sardine31" title="Pas mal mais un peu cher">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  tortor lacus, convallis in molestie eget, feugiat ut neque.
              </ReviewCard>

              <ReviewCard user="zeroutard" title="À quand la moto ?">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  tortor lacus, convallis in molestie eget, feugiat ut neque.
              </ReviewCard>

              <ReviewCard user="magic-build" title="Ça charbonne dur ici">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  tortor lacus, convallis in molestie eget, feugiat ut neque.
              </ReviewCard>
          </div>

          <ModalForm />
      </>
  );
}