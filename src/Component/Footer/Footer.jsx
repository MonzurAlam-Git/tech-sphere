import AboutTechHub from "./AboutTechHub";
import CustomerService from "./CustomerService";
import FollowUs from "./FollowUs";
import FooterBottom from "./FooterBottom";
import QuickLinks from "./QuickLinks";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <AboutTechHub />
          <QuickLinks />
          <CustomerService />
          <FollowUs />
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
}
