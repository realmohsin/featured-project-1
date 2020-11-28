import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Container, Typography } from '@material-ui/core'
import sectionBg2 from '../../assets/images/common/section-bg-2.jpg'
import Button from '../Button'

const useStyles = makeStyles(theme => ({
  contactFormSection: {
    padding: '10rem 0 16rem',
    backgroundImage: `url(${sectionBg2})`,
    backgroundSize: 'cover',
    backgroundPosition: '0% 0%',
    [theme.breakpoints.down('xs')]: {
      padding: '8rem 0 14rem'
    }
  },
  leftGridItem: {
    paddingRight: '3rem',
    [theme.breakpoints.down('sm')]: {
      paddingRight: 0
    }
  },
  rightGridItem: {
    paddingLeft: '3rem',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0
    }
  },
  label: {
    display: 'block',
    fontSize: '2.8rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.4rem'
    }
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
    paddingLeft: '3rem',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      paddingLeft: 0
    }
  },
  message: {
    width: '100%',
    height: 'auto',
    padding: '2rem'
  },
  extraButtonClass: {
    [theme.breakpoints.down('xs')]: {
      margin: '0 auto'
    }
  }
}))

const ContactFormSection = props => {
  const classes = useStyles()

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
          <Button text='Send Mail' extraClass={classes.extraButtonClass} />
        </form>
      </Container>
    </section>
  )
}

export default ContactFormSection
