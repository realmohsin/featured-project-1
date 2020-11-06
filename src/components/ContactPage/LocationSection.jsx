import React, { useState, useEffect } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Container, Grid, Typography } from '@material-ui/core'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps'

// there is no h1 on this page, consider adding (invisible) one

const useStyles = makeStyles(theme => ({
  example: {
    // ...mobile first styles,
    [theme.breakpoints.up('sm')]: {
      //...sm and up styles
    },
    [theme.breakpoints.up('md')]: {
      //...md and up styles
    },
    '@media (min-width: 1320px)': {
      //...rules for above 1320px
    }
  },
  locationSection: {
    padding: '12rem 0',
    background: theme.palette.secondary.main,
    color: 'white',
    height: '72rem'
  },
  gridItem: {
    height: '40rem'
  },
  addressBox: {
    marginLeft: '3rem',
    marginTop: '4rem',
    borderLeft: '1px solid gray',
    paddingLeft: '3rem'
  },
  locationTitle: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem'
  },
  address: {
    color: 'gray',
    fontWeight: 300,
    marginBottom: '1rem'
  },
  phone: {
    letterSpacing: '1.2px'
  }
}))

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
      {props.isMarkerShown && (
        <Marker position={{ lat: -34.397, lng: 150.644 }} />
      )}
    </GoogleMap>
  ))
)

const LocationSection = props => {
  const theme = useTheme()
  const classes = useStyles()

  return (
    <section className={classes.locationSection}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={4} className={classes.gridItem}>
            <MyMapComponent
              isMarkerShown
              googleMapURL='https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={
                <div style={{ height: `70%`, padding: '0 3rem' }} />
              }
              mapElement={<div style={{ height: `100%`, width: '100%' }} />}
            />
            <div className={classes.addressBox}>
              <Typography variant='h3' className={classes.locationTitle}>
                New York
              </Typography>
              <Typography variant='body1' className={classes.address}>
                575 LEXINGTON AVENUE, 18TH FLOOR <br /> NEW YORK, NEW YORK 10022
              </Typography>
              <Typography variant='body1' className={classes.phone}>
                212.246.9100
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4} className={classes.gridItem}>
            <MyMapComponent
              isMarkerShown
              googleMapURL='https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={
                <div style={{ height: `70%`, padding: '0 3rem' }} />
              }
              mapElement={<div style={{ height: `100%`, width: '100%' }} />}
            />
            <div className={classes.addressBox}>
              <Typography variant='h3' className={classes.locationTitle}>
                Los Angeles
              </Typography>
              <Typography variant='body1' className={classes.address}>
                2445 MCCABE WAY <br /> IRVINE, CALIFORNIA 92614
              </Typography>
              <Typography variant='body1' className={classes.phone}>
                949.316.3100
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4} className={classes.gridItem}>
            <MyMapComponent
              isMarkerShown
              googleMapURL='https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={
                <div style={{ height: `70%`, padding: '0 3rem' }} />
              }
              mapElement={<div style={{ height: `100%`, width: '100%' }} />}
            />
            <div className={classes.addressBox}>
              <Typography variant='h3' className={classes.locationTitle}>
                Connecticut
              </Typography>
              <Typography variant='body1' className={classes.address}>
                650 DANBURY ROAD
                <br /> RIDGEFIELD, CONNECTICUT 06877
              </Typography>
              <Typography variant='body1' className={classes.phone}>
                914.244.9100
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default LocationSection
