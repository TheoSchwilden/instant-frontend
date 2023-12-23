import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EventCard from "./EventCard";

function Events() {
  const settings = {
    className: "center",
    centerMode: false,
    centerPadding: "0px",
    infinite: false,
    slidesToShow: 1,
    swipeToSlide: true,
    arrows: false,
  };

  return (
    <div className="overflow-hidden min-h-screen pb-[1]">
      <h2 className="text-2xl font-bold">My Events 🎉</h2>
      <Slider {...settings}>
        <EventCard
          Image={
            "https://media.istockphoto.com/id/1298329918/fr/photo/toast-de-c%C3%A9l%C3%A9bration-danniversaire-avec-des-lumi%C3%A8res-de-corde-et-des-silhouettes-de-champagne.jpg?s=612x612&w=0&k=20&c=zNI7hWJRLzy4t9xZ4maMeXlbDKKF99kSMJRklkee7eM="
          }
          Title={"Birthday Party"}
          Description={"Birthday Party at my house"}
          Location={"Drive street New York, NY 10001"}
        />
        <EventCard
          Image={
            "https://media.istockphoto.com/id/1298329918/fr/photo/toast-de-c%C3%A9l%C3%A9bration-danniversaire-avec-des-lumi%C3%A8res-de-corde-et-des-silhouettes-de-champagne.jpg?s=612x612&w=0&k=20&c=zNI7hWJRLzy4t9xZ4maMeXlbDKKF99kSMJRklkee7eM="
          }
          Title={"Movie Night"}
          Description={"Did u see the last movie of Marvel ?"}
          Location={"Oceanside, NY 11572"}
        />
      </Slider>
      <h2 className="text-2xl font-bold mt-8">Events i joined 🎉</h2>
      <Slider {...settings}>
        <EventCard
          Image={
            "https://media.istockphoto.com/id/1298329918/fr/photo/toast-de-c%C3%A9l%C3%A9bration-danniversaire-avec-des-lumi%C3%A8res-de-corde-et-des-silhouettes-de-champagne.jpg?s=612x612&w=0&k=20&c=zNI7hWJRLzy4t9xZ4maMeXlbDKKF99kSMJRklkee7eM="
          }
          Title={"Birthday Party"}
          Description={"Birthday Party at my house"}
          Location={"Drive street New York, NY 10001"}
        />
        <EventCard
          Image={
            "https://media.istockphoto.com/id/1298329918/fr/photo/toast-de-c%C3%A9l%C3%A9bration-danniversaire-avec-des-lumi%C3%A8res-de-corde-et-des-silhouettes-de-champagne.jpg?s=612x612&w=0&k=20&c=zNI7hWJRLzy4t9xZ4maMeXlbDKKF99kSMJRklkee7eM="
          }
          Title={"Movie Night"}
          Description={"Did u see the last movie of Marvel ?"}
          Location={"Oceanside, NY 11572"}
        />
      </Slider>
    </div>
  );
}

export default Events;
