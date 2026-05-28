
import { Suspense } from "react"
import PageHero from "../../pageHero"
import PageHeroContent from "../../pageHeroContent"
import ContactContent from "./contactContent"
import { pageHeroConfig } from "@/config/contactConfig"
import PageHeroSkeleton from "@/components/skeleton/pageHeroSkeleton"
const ContactSection = () => {
  return (
    <>
      <Suspense fallback={<PageHeroSkeleton />}>
        <PageHero imgSrc={pageHeroConfig.imgSrc}>
          <PageHeroContent title={pageHeroConfig.title} breadcrumb={pageHeroConfig.breadcrumb} />
        </PageHero>
      </Suspense>

      <ContactContent />
    </>
  )
}

export default ContactSection