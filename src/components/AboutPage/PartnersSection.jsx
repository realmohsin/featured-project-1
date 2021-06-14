import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Container, Hidden } from '@material-ui/core'

import partnerCompanies from '../../data/partnerCompanies'

const useStyles = makeStyles(theme => ({
  partnersSection: {
    padding: '20rem 0 12rem',
    // backgroundImage: `url(${aboutPartnersBg})`,
    // backgroundSize: 'cover',
    // backgroundPosition: '0% 0%',
    color: 'white',
    position: 'relative',
    '& > .gatsby-image-wrapper-constrained': {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0
    },
    [theme.breakpoints.down('xs')]: {
      padding: '10rem 0 6rem'
    }
  },
  bgImg: {
    zIndex: -10
  },
  title: {
    fontSize: '4rem',
    marginBottom: '9rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '2.8rem',
      marginBottom: '6rem'
    }
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
    letterSpacing: '1px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.9rem'
    }
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
    fontSize: '1.4rem',
    borderBottom: '1px solid #3D3F3A',
    color: '#ccc',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.4rem',
      padding: '1.2rem 0 0.6rem'
    }
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
  const classes = useStyles()

  return (
    <section className={classes.partnersSection}>
      <StaticImage
        src='../../assets/images/about-page/about-partners-bg.jpg'
        className={classes.bgImg}
      />
      <Container>
        <h2 className={classes.title}>The Company We Keep</h2>
        <Grid container>
          <Grid item xs={12} sm={6} md={3} className={classes.gridItem}>
            <PartnerList
              listTitle='Specialty Retail'
              list={partnerCompanies['Specialty Retail'].slice(0, 22)}
            />
          </Grid>

          <Hidden xsDown>
            <Grid item xs={12} sm={6} md={3} className={classes.gridItem}>
              <PartnerList
                list={partnerCompanies['Specialty Retail'].slice(22)}
              />
            </Grid>
          </Hidden>

          <Grid item xs={12} sm={6} md={3} className={classes.gridItem}>
            <PartnerList
              listTitle='Developers'
              list={partnerCompanies['Developers']}
            />
            <PartnerList
              listTitle='Restaurants'
              list={partnerCompanies['Restaurants']}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3} className={classes.gridItem}>
            <PartnerList
              listTitle='Flagships'
              list={partnerCompanies['Flagships']}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3} className={classes.gridItem}>
            <PartnerList
              listTitle='Corporate Interiors'
              list={partnerCompanies['Corporate Interiors']}
            />
            <PartnerList
              listTitle='Entertainment'
              list={partnerCompanies['Entertainment']}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3} className={classes.gridItem}>
            <PartnerList
              listTitle='Big Box'
              list={partnerCompanies['Big Box']}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3} className={classes.gridItem}>
            <PartnerList listTitle='Luxury' list={partnerCompanies['Luxury']} />
          </Grid>

          <Grid item xs={12} sm={6} md={3} className={classes.gridItem}>
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
