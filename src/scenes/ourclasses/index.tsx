import { SelectedPage } from '@/shared/types';
import image1 from "@/assests/image1.png";
import image2 from "@/assests/image1.png";
import image3 from "@/assests/image1.png";
import image4 from "@/assests/image1.png";
import image5 from "@/assests/image1.png";
import image6 from "@/assests/image1.png";
import { motion } from 'framer-motion';


type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section 
    className='w-full bg-primary-100 py-40'
    id="ourclasses"
    >
        <motion.div
            onViewportEnter={()=> setSelectedPage(SelectedPage.OurClasses)}
        >
            
        </motion.div>
    </section>
  )
}

export default OurClasses