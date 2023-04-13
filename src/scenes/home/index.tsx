import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGhaphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section
    id="home"
    className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
    >
        {/* Image  and Main Header*/}
        <div>
            {/* main header */}
            <div>
             {/* Headings */}
             <div>
                <div>
                    <div>
                        <img src={HomePageText} alt="home-page-text" />
                    </div>
                </div>

                <p>
                Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
                Studios to get the Body Shapes That you Dream of.. Get Your Dream
                Body Now.
                </p>
              </div>
              {/* Actions */}
                <ActionButton setSelectedPage = {setSelectedPage}>
                    Join Now
                </ActionButton>
                <AnchorLink
                className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                onClick={()=> setSelectedPage(SelectedPage.ContactUs)}
                href={`#${SelectedPage.ContactUs}`}
                >
                    <p>Learn More</p>
                </AnchorLink>
            </div>

            {/* Image */}
            <div>
                <img src={HomePageGhaphic} alt="home-pageGraphic" />
            </div>  
        </div>

        {/* Sponsors */}
        {isAboveMediumScreens && (
            <div>
                <div>
                    <div>
                        <img src={SponsorRedBull} alt="redbull-sponsor" />
                        <img src={SponsorForbes} alt="forbes-sponsor" />
                        <img src={SponsorFortune} alt="fortune-sponsor" />
                    </div>
                </div>
            </div>
        )}
    </section>
  )
}

export default Home;