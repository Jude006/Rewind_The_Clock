import React from 'react'
import ContactBanner from '../components/contact/ContactBanner'
import ContactInfo from '../components/contact/ContactInfo'
import ContactForm from '../components/contact/ContactForm'
import FAQPreview from '../components/contact/FAQPreview'

const Contact = () => {
  return (
    <>
      <ContactBanner />
      <ContactInfo />
      <ContactForm />
      <FAQPreview />
    </>
  )
}

export default Contact
