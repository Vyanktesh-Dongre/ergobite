
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientReviews = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3.5,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const reviews = [
        { title: 'Review 1', content: 'This is an amazing service! Highly recommend it.' },
        { title: 'Review 2', content: 'Exceptional quality and great customer support.' },
        { title: 'Review 3', content: 'The solutions provided were top-notch and highly effective.' },
        { title: 'Review 4', content: 'A fantastic experience from start to finish.' },
    ];

    return (
        <div className="w-full h-[785px] py-[60px]" style={{ background: 'linear-gradient(180deg, #FDB235 0%, #FFEF00 100%)' }}>
            <div className="text-center">
                <h1 className="text-black text-[36px] font-bold">What Our Clients Say</h1>
                <p className="text-black text-[18px]">Hear from our satisfied clients who have experienced the transformative power of our innovative solutions.</p>
            </div>
            <div className="py-[60px]">
                <Slider {...settings}>
                    {reviews.map((review, index) => (
                        <section key={index}>
                            <div className=" w-[400px] h-[310px] bg-white rounded-[48px] mx-[10px]  p-6">
                            <div>
                                <h2 className="text-[24px] font-bold mb-2">{review.title}</h2>
                                <p className="text-[16px]">{review.content}</p>
                            </div>
                        </div>
                        </section>
                        
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ClientReviews;


