import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

interface Props {
  countries: { alpha3Code: string; name: string }[];
  onSelectCountry: (alpha3Code: string) => void;
}

export const CountryList: React.FC<Props> = ({
  countries,
  onSelectCountry,
}) => {
  return (
    <List style={{ height: '100%', overflowY: 'scroll' }}>
      {countries.map((country) => (
        <ListItem
          button
          key={country.alpha3Code}
          onClick={() => onSelectCountry(country.alpha3Code)}
        >
          <ListItemText primary={country.name} />
        </ListItem>
      ))}
    </List>
  );
};
