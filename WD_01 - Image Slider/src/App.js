import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Carousel } from 'react-responsive-carousel'

function App() {
  return (
    <div className="App">
  {/* <section className='vh-100 gradient-custom'>
        <div className="container-fluid h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="card bg-dark col-md-8 col-lg-6 col-xl-8">
              <div className="d-flex justify-content-center pt-2"></div> */}
              <h2 align='center'>Image Slider in React</h2>
              <Carousel  className="carousel-style" autoPlay infiniteLoop="1" interval={2000} >
                <div className="slider-item-div">
                  <img alt='pic1' src='https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=' />
                </div>
                <div className="slider-item-div">
                  <img alt='pic2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV6-DQF2pBwNFV9KzPafu9RghrNF1tZ8J3AA&s' />
                </div>
                <div className="slider-item-div">
                  <img alt='pic3' src='https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg' />
                </div>
                <div className="slider-item-div">
                  <img alt='pic4' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeFscT4DKhHfndv4iBDdJgOoyWpxUDHKRo1w&s' />
                </div>
                <div className="slider-item-div">
                  <img alt='pic5' src='https://media.istockphoto.com/id/1488944909/photo/environment-concept-green-glass-globe-with-a-tree-in-the-forest-with-sunlight-sustainability.webp?b=1&s=170667a&w=0&k=20&c=f89zMjUr7FldJzgS0p8mJyuTxBWgvhv0kBQL7fcSnjs=' />
                </div>
              </Carousel>
              </div>
    //         </div>
    //       </div>
    //   </section >
    // </div >
  );
}

export default App;
