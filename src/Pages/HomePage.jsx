import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

 import 
 { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } 
 from 'recharts';

function Home() {

    const data = [
        {
          name: '2018',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: '2019',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: '2020',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: '2021',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: '2022',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: '2023',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: '2024',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>IMAGE SLIDER</h3>
        </div>

     
            <Carousel
  additionalTransfrom={0}
  arrows
  autoPlay
  autoPlaySpeed={2000}
  centerMode={false}
  className=""
  containerClass="container-with-dots"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={2}
  swipeable
>
  <div className='card'>
 
   <img className='card-inner' src="/car.jpg" alt="" style={{height:"290px", }} />
    </div>
  <div className='card'>
  
  <img className='card-inner' src="/car3.webp" alt="" style={{height:"290px", }}/>
    </div>
  <div className='card'>
  
   <img className='card-inner' src="/car4.jpg" alt="" style={{height:"290px", }}/>
    </div>
  <div className='card'>
  
  <img className='card-inner' src="/car5.jpg" alt="" style={{height:"290px", }} />
    </div>
  <div className='card'>
  
  <img  className='card-inner' src="/car6.jpg" alt="" style={{height:"290px", }}/>
    </div>
  <div className='card'>
  
  <img className='card-inner' src="/car7.webp" alt="" style={{height:"290px", }} />
    </div>
  <div className='card'>
  
  <img className='card-inner' src="/car8.jpeg" alt="" style={{height:"290px", }}/>
    </div>
 
  
</Carousel>


{/* Chart starting */}

<div className='chart-title'>
            <h3>CHART</h3>
        </div>
        
        <div className='charts'>
        
     
     

            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

        
        </div>
    </main>
  )
}

export default Home