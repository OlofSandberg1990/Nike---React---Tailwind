import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center
    max-xl:flex-col-reverse gap-10 max-container">
       <div className="flex-1">
          <img src={offer} width={773} height={687} className="object-contain w-full"/>
       </div>

       <div className="flex flex-1 flex-col">
      
      <h2 className="font-palanquin capitalize text-4xl        
      font-bold lg:max-w-lg">
     
     <span className="text-coral-red"> Special 
      </span> Offer 
      
      
      </h2>
      <p className="
    mt-4 info-text">
        Det är smått otroligt vilka jävla dojor vi har att erbjuda!
        Skynda dig innan det är för sent!
      </p>
      <p className="mt-6 info-text">
        Ingen tid att förlora, klicka på knappen!
      </p>
      <div className="mt-11 flex flex-wrap gap-4">
      <Button label="Shop Now"
      iconURL={arrowRight}/>   
      <Button 
        label="Learn More"
        backgroundColor="bg-white"
        borderColor="border-slate-gray"
        textColor="border-slate-gray"

        />

      </div>
    </div>

    </section>
  )
}

export default SpecialOffer
