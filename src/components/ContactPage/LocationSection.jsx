import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid, Typography } from '@material-ui/core'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps'
import Map1 from './GoogleMaps/Map1'
import Map2 from './GoogleMaps/Map2'
import Map3 from './GoogleMaps/Map3'

// there is no h1 on this page, consider adding (invisible) one

const useStyles = makeStyles(theme => ({
  locationSection: {
    padding: '12rem 0',
    background: theme.palette.secondary.main,
    color: 'white',
    height: '72rem',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '0',
      height: '172rem'
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '-5rem'
    }
  },
  gridItem: {
    height: '40rem',
    [theme.breakpoints.down('sm')]: {
      padding: '5rem 8rem',
      marginBottom: '17rem'
    },
    [theme.breakpoints.down('xs')]: {
      padding: '1rem'
    }
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
  },
  mapContainer: {
    paddingLeft: '3rem'
  }
}))

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={16}
      defaultCenter={{ lat: 40.63077, lng: -74.13302 }}
    >
      {props.isMarkerShown && (
        <Marker position={{ lat: 40.63077, lng: -74.13302 }} />
      )}
    </GoogleMap>
  ))
)

const LocationSection = props => {
  const classes = useStyles()

  return (
    <section className={classes.locationSection}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={4} className={classes.gridItem}>
            {/* <MyMapComponent
              isMarkerShown
              googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyAvwZE_MN_yybXvtTquNyAS4OzAJ2K4K5c&v=3.exp&libraries=geometry,drawing,places'
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={
                <div style={{ height: `70%`, padding: '0 3rem' }} />
              }
              mapElement={<div style={{ height: `100%`, width: '100%' }} />}
            /> */}
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2116880852395!2d-73.97368678459365!3d40.75736857932691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258fcb54f5e4d%3A0xbdf0e472421593dd!2s575%20Lexington%20Ave%2018TH%20FLOOR%2C%20New%20York%2C%20NY%2010022!5e0!3m2!1sen!2sus!4v1614363224934!5m2!1sen!2sus'
              width='310'
              height='310'
              style={{ border: 0, marginLeft: '3rem' }}
              allowfullscreen=''
              loading='lazy'
            />
            {/* <div className={classes.mapContainer}>
              <Map1 />
            </div> */}

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
            {/* <MyMapComponent
              isMarkerShown
              googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyAvwZE_MN_yybXvtTquNyAS4OzAJ2K4K5c&v=3.exp&libraries=geometry,drawing,places'
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={
                <div style={{ height: `70%`, padding: '0 3rem' }} />
              }
              mapElement={<div style={{ height: `100%`, width: '100%' }} />}
            /> */}
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2116880852395!2d-73.97368678459365!3d40.75736857932691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258fcb54f5e4d%3A0xbdf0e472421593dd!2s575%20Lexington%20Ave%2018TH%20FLOOR%2C%20New%20York%2C%20NY%2010022!5e0!3m2!1sen!2sus!4v1614363224934!5m2!1sen!2sus'
              width='310'
              height='310'
              style={{ border: 0, marginLeft: '3rem' }}
              allowfullscreen=''
              loading='lazy'
            />
            {/* <div className={classes.mapContainer}>
              <Map2 />
            </div> */}

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
            {/* <MyMapComponent
              isMarkerShown
              googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyAvwZE_MN_yybXvtTquNyAS4OzAJ2K4K5c&v=3.exp&libraries=geometry,drawing,places'
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={
                <div style={{ height: `70%`, padding: '0 3rem' }} />
              }
              mapElement={<div style={{ height: `100%`, width: '100%' }} />}
            /> */}
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2116880852395!2d-73.97368678459365!3d40.75736857932691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258fcb54f5e4d%3A0xbdf0e472421593dd!2s575%20Lexington%20Ave%2018TH%20FLOOR%2C%20New%20York%2C%20NY%2010022!5e0!3m2!1sen!2sus!4v1614363224934!5m2!1sen!2sus'
              width='310'
              height='310'
              style={{ border: 0, marginLeft: '3rem' }}
              allowfullscreen=''
              loading='lazy'
            />
            {/* <div className={classes.mapContainer}>
              <Map3 />
            </div> */}

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
