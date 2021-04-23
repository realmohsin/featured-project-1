import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import HeroSection from '../components/HeroSection'
import HeroContent from '../components/HeroContent'
import InfoSection from '../components/ProjectPage/InfoSection'
import ProjectVideoSection from '../components/ProjectPage/ProjectVideoSection'
import QuoteSection from '../components/ProjectPage/QuoteSection'
import NewsSection from '../components/ProjectPage/NewsSection'
import MoreProjects from '../components/ProjectPage/MoreProjects'

const ProjectPageTemplate = ({ data, pageContext }) => {
  return (
    <Layout>
      <HeroSection heroImgData={data.heroImg.childImageSharp}>
        <HeroContent
          subtitle={pageContext.hero.subtitle}
          title={pageContext.hero.title}
        />
      </HeroSection>
      <InfoSection
        logoFluid={data.logoImg.childImageSharp}
        infoParagraphs={pageContext.infoSection.infoParagraphs}
        rightImgFluid={data.infoRightImg.childImageSharp}
        squareFt={pageContext.infoSection.squareFt}
        timelineWks={pageContext.infoSection.timelineWks}
        clientSince={pageContext.infoSection.clientSince}
      />
      <ProjectVideoSection
        overlayImgFluid={data.overlayImg.childImageSharp}
        vidSectionBgFluid={data.vidSectionBg.childImageSharp}
      />
      <QuoteSection
        leftQuoteImgFluid={data.leftQuoteImg.childImageSharp}
        quote={pageContext.quoteSection.quote}
        quoter={pageContext.quoteSection.quoter}
      />
      <NewsSection
        newsLogoImgFluid={data.newsLogoImg.childImageSharp}
        newsBgImgFluid={data.newsBgImg.childImageSharp}
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
        project1ImgFluid={data.project1Img.childImageSharp}
        project2ImgFluid={data.project2Img.childImageSharp}
        project3ImgFluid={data.project3Img.childImageSharp}
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
        gatsbyImageData
      }
    }
    logoImg: file(name: { eq: $logoImgName }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    infoRightImg: file(name: { eq: $infoRightImgName }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    overlayImg: file(name: { eq: $overlayImgName }) {
      childImageSharp {
        gatsbyImageData(height: 743)
      }
    }
    vidSectionBg: file(name: { eq: $vidSectionBg }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    leftQuoteImg: file(name: { eq: $leftQuoteImgName }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    newsLogoImg: file(name: { eq: $newsLogoImgName }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    newsBgImg: file(name: { eq: $newsBgImgName }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    project1Img: file(name: { eq: $project1ImgName }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    project2Img: file(name: { eq: $project2ImgName }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    project3Img: file(name: { eq: $project3ImgName }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`

export default ProjectPageTemplate
