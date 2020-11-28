import React from 'react'
import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'
import SubcontractorSection from '../components/ContactPage/SubcontractorSection'
import LocationSection from '../components/ContactPage/LocationSection'
import ContactFormSection from '../components/ContactPage/ContactFormSection'

export default function AboutPage () {
  return (
    <Layout>
      <HeroSection isJustNav />
      <LocationSection />
      <ContactFormSection />
      <SubcontractorSection />
    </Layout>
  )
}
