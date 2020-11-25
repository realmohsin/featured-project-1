import React from 'react'
import Layout from '../components/layout'

import { makeStyles, Box, Container, Grid, Typography } from '@material-ui/core'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import HeroSection from '../components/HeroSection'
import HeroContent from '../components/HeroContent'
import projects from '../data/projects'
import InfoSection from '../components/ProjectPage/InfoSection'
import ProjectVideoSection from '../components/ProjectPage/ProjectVideoSection'
import QuoteSection from '../components/ProjectPage/QuoteSection'
import NewsSection from '../components/ProjectPage/NewsSection'
import MoreProjects from '../components/ProjectPage/MoreProjects'

const useStyles = makeStyles(theme => ({}))

const ProjectPageTemplate = ({ data, pageContext }) => {
  return (
    <Layout>
      <HeroSection heroBgFluid={data.heroImg.childImageSharp.fluid}>
        <HeroContent
          subtitle={pageContext.hero.subtitle}
          title={pageContext.hero.title}
        />
      </HeroSection>
      <InfoSection
        logoFluid={data.logoImg.childImageSharp.fluid}
        infoParagraphs={pageContext.infoSection.infoParagraphs}
        rightImgFluid={data.infoRightImg.childImageSharp.fluid}
        squareFt={pageContext.infoSection.squareFt}
        timelineWks={pageContext.infoSection.timelineWks}
        clientSince={pageContext.infoSection.clientSince}
      />
      <ProjectVideoSection
        overlayImgFluid={data.overlayImg.childImageSharp.fluid}
        vidSectionBgFluid={data.vidSectionBg.childImageSharp.fluid}
      />
      <QuoteSection
        leftQuoteImgFluid={data.leftQuoteImg.childImageSharp.fluid}
        quote={pageContext.quoteSection.quote}
        quoter={pageContext.quoteSection.quoter}
      />
      <NewsSection
        newsLogoImgFluid={data.newsLogoImg.childImageSharp.fluid}
        newsBgImgFluid={data.newsBgImg.childImageSharp.fluid}
        newsTitle={pageContext.newsSection.newsTitle}
        newsSubtitle={pageContext.newsSection.newsSubtitle}
        newsParagraph={pageContext.newsSection.newsParagraph}
        newsButton={pageContext.newsSection.newsButton}
        newsButtonLink={pageContext.newsSection.newsButtonLink}
      />
      <MoreProjects
        project1Name={pageContext.moreProjectsSection.project1Name}
        project2Name={pageContext.moreProjectsSection.project2Name}
        project3Name={pageContext.moreProjectsSection.project3Name}
        project1ImgFluid={data.project1Img.childImageSharp.fluid}
        project2ImgFluid={data.project2Img.childImageSharp.fluid}
        project3ImgFluid={data.project3Img.childImageSharp.fluid}
      />
    </Layout>
  )
}

export const query = graphql`
  query(
    $heroImgName: String!
    $logoImgName: String!
    $infoRightImgName: String!
    $overlayImgName: String!
    $vidSectionBg: String!
    $leftQuoteImgName: String!
    $newsLogoImgName: String!
    $newsBgImgName: String!
    $project1ImgName: String!
    $project2ImgName: String!
    $project3ImgName: String!
  ) {
    heroImg: file(name: { eq: $heroImgName }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    logoImg: file(name: { eq: $logoImgName }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    infoRightImg: file(name: { eq: $infoRightImgName }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    overlayImg: file(name: { eq: $overlayImgName }) {
      childImageSharp {
        fluid(maxWidth: 1235, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    vidSectionBg: file(name: { eq: $vidSectionBg }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    leftQuoteImg: file(name: { eq: $leftQuoteImgName }) {
      childImageSharp {
        fluid(maxWidth: 550, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    newsLogoImg: file(name: { eq: $newsLogoImgName }) {
      childImageSharp {
        fluid(maxWidth: 350, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    newsBgImg: file(name: { eq: $newsBgImgName }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    project1Img: file(name: { eq: $project1ImgName }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    project2Img: file(name: { eq: $project2ImgName }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    project3Img: file(name: { eq: $project3ImgName }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default ProjectPageTemplate
