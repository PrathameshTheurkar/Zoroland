import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface SwiperInstance {
    slideNext: () => void
    slidePrev: () => void
}

const Slider = () => {
    const [swiperInstance, setSwiperInstance] = useState<SwiperInstance | null>()

    const goNext = () => {
        swiperInstance?.slideNext()
    }

    const goPrev = () => {
        swiperInstance?.slidePrev()
    }

    return <motion.section
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{
            type: 'keyframes',
            stiffness: 260,
            damping: 20
        }}
    >
        <div className='w-auto absolute z-10 flex gap-4 p-3 justify-center'>
            <button className='bg-black/80 rounded-full p-1 lg:p-3 backdrop-blur-2xl' onClick={goPrev}>
                <ArrowLeft size={30}/>
            </button>
            <button className='bg-black/80 rounded-full p-1 lg:p-3 backdrop-blur-2xl' onClick={goNext}>
                <ArrowRight size={30}/>
            </button>
        </div>
        <Swiper
            spaceBetween={20}
            centeredSlides={false}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false
            }}
            modules={[Autoplay]}
            onSwiper={(swiper) => setSwiperInstance(swiper)}

        >
            <SwiperSlide><div className='absolute w-full'>dgsdg</div></SwiperSlide>
            <SwiperSlide><div className='absolute w-full'>dgsdgdgasgasg</div></SwiperSlide>
            <SwiperSlide><div className='absolute w-full'>dgsdgasfas</div></SwiperSlide>
        </Swiper>
    </motion.section>
}

export default Slider