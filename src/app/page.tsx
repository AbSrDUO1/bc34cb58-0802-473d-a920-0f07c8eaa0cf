"use client";

import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navigation/NavbarLayoutFloatingInline';
import VoidHero from '@/components/sections/layouts/hero/VoidHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import ExpandingGridTokenomics from '@/components/sections/layouts/tokenomics/ExpandingGridTokenomics';
import FooterLogoEmphasis from '@/components/footer/FooterLogoEmphasis';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "futuristicAndOutOfBox", colorTemplate: 2, textAnimation: "highlight" }}>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          logoSrc="/images/logo.svg"
          logoAlt="NeonPulse Logo"
          links={["#hero", "#about", "#how-to-buy", "#tokenomics", "#footer"]}
          sticky={true}
          buttonText="Get Early Access"
        />
      </div>

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <VoidHero
          title="Welcome to NeonPulse"
          description="Your gateway to the future of crypto trading"
          tagLabel="Innovative"
          primaryButtonText="Start Now"
          secondaryButtonText="Learn More"
        />
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <SocialsAbout
          title="About NeonPulse"
          descriptions={["Join an innovative crypto movement.", "Experience seamless trading with real-time analytics.", "Empowering users with unprecedented tools."]}
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D
          variant="reveal"
          steps={[
            { title: "Step 1", description: "Create an account.", image: "/images/placeholder1.avif", position: "top", isCenter: true },
            { title: "Step 2", description: "Verify your identity.", image: "/images/placeholder2.avif", position: "center", isCenter: true },
            { title: "Step 3", description: "Make your first trade!", image: "/images/placeholder3.avif", position: "bottom", isCenter: true },
          ]}
        />
      </div>

      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <ExpandingGridTokenomics
          title="NeonPulse Tokenomics"
          description="Our token is designed with optimum efficiency in mind"
          cardItems={[
            { id: 1, title: "Total Supply", description: "1 Billion Tokens" },
            { id: 2, title: "Market Cap", description: "$100 Million" },
            { id: 3, title: "Daily Volume", description: "$5 Million" }
          ]}
        />
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasis
          logoSrc="/images/logo.svg"
          logoAlt="NeonPulse Logo"
          columns={[
            { items: [
              { label: "Terms of Service", onClick: () => alert('ToS') },
              { label: "Privacy Policy", onClick: () => alert('Privacy') } 
            ] },
            { items: [
              { label: "Contact", onClick: () => alert('Contact') },
              { label: "FAQ", onClick: () => alert('FAQ') }
            ] },
            { items: [
              { label: "Help", onClick: () => alert('Help') },
              { label: "Support", onClick: () => alert('Support') }
            ] }
          ]}
          logoText="NeonPulse"
        />
      </div>
    </SiteThemeProvider>
  );
}
