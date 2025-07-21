import React from "react";

import AboutUsSection from "./AboutUsSection";
import LuxuryRooms from "./LuxuryRooms";
import Amenities from "./Amenities";
import HotelStats from "./HotelStats";
import { VideoSection } from "./Videosection";
import HotelBookingCard from "./HotelBookingCard";
import PlanAVisit from "./PlanAVisit";
import Testimonials from "./Testimonials";
import StayWithUs from "./StayWithUs";
import Impact from "./Impact";

function Home() {
  return (
    <div>
      <VideoSection />
      <HotelBookingCard />
      <AboutUsSection />
      <LuxuryRooms />
      <Amenities />
      {/* <HotelStats /> */}
      <Impact />
      <StayWithUs />
      <PlanAVisit />
      <Testimonials />
    </div>
  );
}

export default Home;
