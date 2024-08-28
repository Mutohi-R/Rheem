import { useState } from 'react'

import './faq.scss'
import FaqItem from './FaqItem'
import faqs from '../../data/faqs.json'

const FaqAccordion = () => {

    const [selectedFaq, setSelectedFaq] = useState(null)

    const handleFaqClick = (index) => {
        if (selectedFaq === index) {
            setSelectedFaq(null)
        } else {
            setSelectedFaq(index)
        }
        
        console.log("clicked" + selectedFaq)
    }

  return (
    <article className="faq-accordion">
        {
            faqs.map((faq, index) => (
                <FaqItem key={index} faq={faq} selectedFaq={selectedFaq} index={index} onClick={() => handleFaqClick(index)}/>
            ))
        }
      
    </article>
  )
}

export default FaqAccordion
