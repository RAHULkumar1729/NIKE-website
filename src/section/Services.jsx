import { services } from '../constants'
import React from 'react'
import ServiceCard from '../components/ServiceCard'
export default function Services(){
    return(
        <section className='max-container flex justify-center flex-wrap gap-9'>
            {services.map((services)=>(
                <ServiceCard key={services.label} {...services}/>
            ))}   
        </section>
    )
}