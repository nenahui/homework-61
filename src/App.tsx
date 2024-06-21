import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { CountryList } from './components/CountryList/CountryList';
import { CountryDetail } from './components/CountryDetail/CountryDetail';
import { Container, Grid, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from './theme';
import { Country } from './types';

export const App: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const { data: countries } = await axios.get(
          'https://restcountries.com/v2/all?fields=alpha3Code,name'
        );
        setCountries(countries);
      } catch (error) {
        console.error('Error', error);
      }
    };
    void fetchCountries();
  }, []);

  const countrySelect = useCallback(async (alpha3Code: string) => {
    try {
      const { data: country } = await axios.get(
        `https://restcountries.com/v2/alpha/${alpha3Code}`
      );
      setSelectedCountry(country);
    } catch (error) {
      console.error('Error', error);
    }
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={4} style={{ height: '760px' }}>
            <CountryList
              countries={countries}
              onSelectCountry={countrySelect}
            />
          </Grid>
          <Grid item xs={8}>
            <CountryDetail country={selectedCountry} />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};
