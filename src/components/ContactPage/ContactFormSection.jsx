import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Grid, Container, Typography } from '@material-ui/core'
import sectionBg2 from '../../assets/images/common/section-bg-2.jpg'
import Button from '../Button'

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
  contactFormSection: {
    padding: '10rem 0 16rem',
    backgroundImage: `url(${sectionBg2})`,
    backgroundSize: 'cover',
    backgroundPosition: '0% 0%'
  },
  leftGridItem: {
    paddingRight: '3rem'
  },
  rightGridItem: {
    paddingLeft: '3rem'
  },
  label: {
    display: 'block',
    fontSize: '2.8rem',
    fontWeight: 'bold',
    marginBottom: '1rem'
  },
  input: {
    outline: 'none',
    border: 'none',
    height: '5rem',
    fontSize: '1.7rem',
    paddingLeft: '2.2rem',
    marginBottom: '5.5rem',
    width: '100%',
    boxShadow: theme.shadows[1]
  },
  title: {
    fontSize: '1.4rem',
    margin: '3rem 0 8rem',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    wordSpacing: '1px',
    paddingLeft: '3rem'
  },
  message: {
    width: '100%',
    height: 'auto',
    padding: '2rem'
  }
}))

const ContactFormSection = props => {
  const theme = useTheme()
  const classes = useStyles()

  const [state, setState] = useState('initial-state')

  useEffect(() => {
    return () => {}
  }, [])

  const atXsDown = useMediaQuery(theme.breakpoints.down('xs')) // below 600
  const atMdUp = useMediaQuery(theme.breakpoints.up('md')) // 960 and above
  const atSmOnly = useMediaQuery(theme.breakpoints.only('sm')) // only between 600 and 959
  const betweenSmLg = useMediaQuery(theme.breakpoints.between('sm', 'lg')) // only between 600 and 1919

  return (
    <section className={classes.contactFormSection}>
      <Container>
        <Typography variant='h2' className={classes.title}>
          Send Us A Message
        </Typography>
        <form>
          <Grid container>
            <Grid item xs={12} md={6} className={classes.leftGridItem}>
              <label htmlFor='name' className={classes.label}>
                Name*
              </label>
              <input
                type='text'
                id='name'
                className={classes.input}
                name='name'
              />
            </Grid>
            <Grid item xs={12} md={6} className={classes.rightGridItem}>
              <label htmlFor='email' className={classes.label}>
                Email*
              </label>
              <input
                type='email'
                id='email'
                className={classes.input}
                name='email'
              />
            </Grid>
            <Grid item xs={12} md={6} className={classes.leftGridItem}>
              <label htmlFor='company' className={classes.label}>
                Company
              </label>
              <input
                type='company'
                id='company'
                className={classes.input}
                name='email'
              />
            </Grid>
            <Grid item xs={12} md={6} className={classes.rightGridItem}>
              <label htmlFor='subject' className={classes.label}>
                Subject
              </label>
              <input
                type='subject'
                id='subject'
                className={classes.input}
                name='subject'
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <label htmlFor='message' className={classes.label}>
                Your Message
              </label>
              <textarea
                rows={9}
                id='message'
                className={clsx(classes.input, classes.message)}
              ></textarea>
            </Grid>
          </Grid>
          <Button text='Send Mail' />
        </form>
      </Container>
    </section>
  )
}

export default ContactFormSection
