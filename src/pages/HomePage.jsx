import Services from '../components/Services';
import WhyHireUs from '../components/WhyHireUs';
import FaqSection from '../components/FaqSection';
import HeroSection from '../components/HeroSection';
import Testimonials from '../components/Testimonials';
import StatsSection from '../components/StatsSection';
import SEO from '../components/SEO';
// import TeamSection from '../components/TeamSection';
// import PartnersSection from '../components/PartnersSection';

const HomePage = () => {
  return (
    <>
      <SEO 
        title="Jasa Pengacara Perceraian jakarta, bogor, depok, tangerang, bekasi - Lawfirm AKB & CO"
        description="Lawfirm AKB & CO menyediakan jasa pengacara perceraian profesional di Jakarta, Bogor, Depok, Tangerang, Bekasi. Bantuan hak asuh anak & harta gono-gini."/>
      <HeroSection />
      <StatsSection />
      <WhyHireUs />
      {/* <TeamSection /> */}
      {/* <PartnersSection /> */}
      <Services /> 
      <Testimonials />
      <FaqSection />
    </>
  );
};

export default HomePage;