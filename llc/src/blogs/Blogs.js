import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import images from './image 125.png'
import arrow from './Frame (2).png'
import { Button,Flex,Box ,Heading} from '@chakra-ui/react';
import { MdKeyboardArrowRight } from 'react-icons/md';
const blogs = [
  { id: 1, title: "How to Learn React", description: "A beginner's guide to learning React." },
  { id: 2, title: "JavaScript ES6 Features", description: "Learn about the new features in ES6." },
  { id: 3, title: "Understanding Redux", description: "An overview of how Redux works with React." },
  { id: 4, title: "CSS Grid Layout", description: "Mastering CSS Grid for modern layouts." },
  { id: 5, title: "State Management in React", description: "A deep dive into state management with React." },
  { id: 6, title: "State Management in React", description: "A deep dive into state management with React." },
];

const Blogs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleButtonClick = (blogId) => {
    setActiveIndex(blogId);
  };

  return (
    <section className='blogs'>
        <Box textAlign={'center'} p={12}>
        <Heading padding={10} colorPalette="white">
          Blogs
        </Heading>
        <p>
          Lorem ipsum dolor sit amet consectetur. Id mattis placerat congue nam
          <br />
          Enim nunc vulputate in nunc risus aliquet mattis quisque.
        </p>
      </Box>
      <Swiper
        spaceBetween={150}
        // slidesPerView={'auto'}
        slidesPerView={4}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        pagination={{ clickable: true }}
        style={{ overflow: 'hidden' }}
      >
        {blogs.map((blog) => (
          <SwiperSlide key={blog.id}>
            <div
              // style={{
              //   minWidth: '300px',
              //   padding: '20px',
              //   backgroundColor: 'black',
              //   borderRadius: '8px',
              //   boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              //   position: 'relative',
              // }}
              className='slider-div'
            >
              <img className='blogs-images'src={images}/>
              <div className='below-content'>
                <div className='text-section'>
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
                </div>
              <div>
              <div className='arrowIcons'>
                <MdKeyboardArrowRight />
              </div>
              </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Flex align="center" justify="center" p={10} >
      <Button  variant="outline"
                style={{
                  padding: '10px 15px',
                  borderRadius: '5px',
                  transition: 'all 0.3s ease',
                }}
              >
                Read Full Article<MdKeyboardArrowRight />
              </Button></Flex>
    </section>
  );
};

export default Blogs;
