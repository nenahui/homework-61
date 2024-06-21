import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { Country } from '../../types';

interface Props {
  country: Country | null;
}

export const CountryDetail: React.FC<Props> = ({ country }) => {
  if (!country) {
    return (
      <Typography
        style={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '50%',
        }}
        variant='h6'
      >
        Select country
      </Typography>
    );
  }

  return (
    <Card
      style={{
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '50%',
      }}
    >
      <CardContent>
        <Typography variant='h5' gutterBottom>
          {country.name}
        </Typography>
        <Typography variant='body1'>Capital: {country.capital}</Typography>
        <Typography variant='body1'>
          Population: {country.population.toLocaleString()}
        </Typography>
        <Typography variant='body1'>Bordered with:</Typography>
        <List>
          {country.borders && country.borders.length > 0 ? (
            country.borders.map((border) => (
              <ListItem key={border}>
                <ListItemText primary={border} />
              </ListItem>
            ))
          ) : (
            <ListItem>
              <ListItemText primary='No borders' />
            </ListItem>
          )}
        </List>
      </CardContent>
    </Card>
  );
};
