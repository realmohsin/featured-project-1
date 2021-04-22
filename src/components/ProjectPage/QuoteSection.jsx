import React from 'react'
import { getImage, StaticImage, GatsbyImage } from 'gatsby-plugin-image'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  quoteSection: {
    padding: '16rem 0'
  },
  leftGridItem: {
    paddingRight: '10rem',
    [theme.breakpoints.down('md')]: {
      padding: '0 5rem',
      marginBottom: '4rem'
    }
  },
  quoteBox: {
    ...theme.custom.themedBorderAndPadding,
    paddingTop: '5rem',
    height: '100%'
  },
  quote: {
    fontSize: '2.2rem',
    fontWeight: 'bold',
    '&::before': {
      ...theme.custom.themedArrowForBefore,
      top: '2rem'
    }
  },
  quoter: {
    marginTop: '3rem',
    fontSize: '1.6rem'
  }
}))

const QuoteSection = ({ quote, quoter, leftQuoteImgFluid }) => {
  const classes = useStyles()

  return (
    <section className={classes.quoteSection}>
      <Container>
        <Grid container className={classes.gridContainer}>
          <Grid item xs={12} md={6} className={classes.leftGridItem}>
            <GatsbyImage image={getImage(leftQuoteImgFluid)} alt='Quoter' />
            {/* <Img fluid={leftQuoteImgFluid} alt='Quoter' /> */}
          </Grid>
          <Grid item xs={12} md={6}>
            <div className={classes.quoteBox}>
              <p className={classes.quote}>"{quote}"</p>
              <p className={classes.quoter}>- {quoter}</p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default QuoteSection
