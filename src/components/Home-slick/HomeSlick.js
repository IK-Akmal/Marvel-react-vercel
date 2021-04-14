import "./HomeSlick.css";
import Slider from "react-slick"

export default function HomeSlick() {

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [

            {
                breakpoint: 767,
                settings: {
                    dots: false,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    }

    return (

        <Slider {...settings} >
            <div className="poster-slider slider-1">

            </div>
            <div className="poster-slider slider-2">

            </div>
        </Slider>

    )
}