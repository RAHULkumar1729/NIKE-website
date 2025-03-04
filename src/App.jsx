import Hero from './section/Hero'
import CustomerReviews from './section/CustomerReviews'
import Footer from './section/Footer'
import PopularProducts from './section/PopularProducts'
import Services from './section/Services'
import SuperQuality from './section/SuperQuality'
import SpecialOffer from './section/SpecialOffers'
import Subscribe from './section/Subscribe'
import Nav from './components/nav'

export default function App() {
  return (
    <main className="relative">
      <Nav />
      <section className="x1:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews/>
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  )
}