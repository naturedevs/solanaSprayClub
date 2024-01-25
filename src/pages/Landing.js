import { Button } from "@material-tailwind/react";

import Hero from "./sections/Hero";
import HeroText from "./sections/HeroText";
import RoadMap from "./sections/RoadMap";
import OurTeam from "./sections/OurTeam";
import Credit from "./sections/Credit";

export default function Landing() {
    return (
        <div className="w-full overflow-x-hidden items-center">
            <Hero/>
            <HeroText/>
            <RoadMap/>
            <OurTeam/>
            <Credit/>
        </div>
    )
}