import React from 'react'
import { graphql } from 'gatsby'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'
import SubcontractorSection from '../components/ContactPage/SubcontractorSection'
// import contactHeroBg from '../assets/images/common/footer-bg.jpg'

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
  extraHeroContent: {
    width: '92rem',
    '& h2': {
      fontSize: '3.5rem'
    }
  }
}))

export default function AboutPage ({ data }) {
  const classes = useStyles()

  return (
    <Layout>
      <HeroSection heroBgFluid={data.contactHeroBg.childImageSharp.fluid}>
        {/* <HeroContent
          subtitle='Working For You'
          title='Hundreds of professionals covering everything from ground-up new construction and renovations, to remodels and program rollouts.'
          buttonText='General Construction'
          url='/'
          extraClass={classes.extraHeroContent}
        /> */}
      </HeroSection>
      <SubcontractorSection />
    </Layout>
  )
}

export const query = graphql`
  query {
    contactHeroBg: file(name: { eq: "footer-bg" }) {
      childImageSharp {
        fluid(maxWidth: 2400, maxHeight: 1212, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
