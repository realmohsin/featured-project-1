import React, { useState, useEffect } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Grid, Container } from '@material-ui/core'
import aboutPartnersBg from '../../assets/images/about-page/about-partners-bg.jpg'
import partnerCompanies from '../../data/partnerCompanies'

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
  partnersSection: {
    padding: '20rem 0 12rem',
    backgroundImage: `url(${aboutPartnersBg})`,
    backgroundSize: 'cover',
    backgroundPosition: '0% 0%',
    color: 'white'
  },
  title: {
    fontSize: '4rem',
    marginBottom: '9rem'
  },
  gridItem: {
    paddingRight: '3rem'
  },
  partnerList: {
    borderTop: '2px solid white',
    paddingTop: '1.5rem',
    marginBottom: '7.8rem'
  },
  listTitle: {
    fontSize: '2.1rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
    letterSpacing: '1px'
  },
  noTitle: {
    fontSize: '2.2rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
    letterSpacing: '1px',
    visibility: 'hidden'
  },
  listItem: {
    padding: '1.3rem 0 0.75rem',
    fontSize: '1.3rem',
    borderBottom: '1px solid #3D3F3A',
    color: '#ccc'
  }
}))

const PartnerList = ({ listTitle = '', list }) => {
  const classes = useStyles()
  return (
    <div className={classes.partnerList}>
      {listTitle ? (
        <h3 className={classes.listTitle}>{listTitle}</h3>
      ) : (
        <p className={classes.noTitle}>No Title</p>
      )}
      {list.map(brand => (
        <p className={classes.listItem}>{brand}</p>
      ))}
    </div>
  )
}

const PartnersSection = props => {
  const theme = useTheme()
  const classes = useStyles()

  return (
    <section className={classes.partnersSection}>
      <Container>
        <h2 className={classes.title}>The Company We Keep</h2>
        <Grid container>
          <Grid item xs={12} md={3} className={classes.gridItem}>
            <PartnerList
              listTitle='Specialty Retail'
              list={partnerCompanies['Specialty Retail'].slice(0, 22)}
            />
          </Grid>

          <Grid item xs={12} md={3} className={classes.gridItem}>
            <PartnerList
              list={partnerCompanies['Specialty Retail'].slice(22)}
            />
          </Grid>

          <Grid item xs={12} md={3} className={classes.gridItem}>
            <PartnerList
              listTitle='Developers'
              list={partnerCompanies['Developers']}
            />
            <PartnerList
              listTitle='Restaurants'
              list={partnerCompanies['Restaurants']}
            />
          </Grid>

          <Grid item xs={12} md={3} className={classes.gridItem}>
            <PartnerList
              listTitle='Flagships'
              list={partnerCompanies['Flagships']}
            />
          </Grid>

          <Grid item xs={12} md={3} className={classes.gridItem}>
            <PartnerList
              listTitle='Corporate Interiors'
              list={partnerCompanies['Corporate Interiors']}
            />
            <PartnerList
              listTitle='Entertainment'
              list={partnerCompanies['Entertainment']}
            />
          </Grid>

          <Grid item xs={12} md={3} className={classes.gridItem}>
            <PartnerList
              listTitle='Big Box'
              list={partnerCompanies['Big Box']}
            />
          </Grid>

          <Grid item xs={12} md={3} className={classes.gridItem}>
            <PartnerList listTitle='Luxury' list={partnerCompanies['Luxury']} />
          </Grid>

          <Grid item xs={12} md={3} className={classes.gridItem}>
            <PartnerList listTitle='Banks' list={partnerCompanies['Banks']} />
            <PartnerList
              listTitle='Schools'
              list={partnerCompanies['Schools']}
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default PartnersSection
