import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EventCard from "./EventCard";
import AddEventsForm from "./EventsForm/AddEventsForm";
import UpdateEventsForm from "./EventsForm/UpdateEventsForm";

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

  const handleAddEventForm = () => {
    document.getElementById("my_modal_2").showModal();
  };

  const hanldeUpdateEventForm = () => {
    document.getElementById("my_custom_modal_2").showModal();
  }

  return (
    <div className="overflow-hidden pb-[1]">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">My Events 🎉</h2>
        <div>
          <button onClick={handleAddEventForm}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
      <Slider {...settings}>
        <EventCard
          Image={
            "https://media.istockphoto.com/id/1298329918/fr/photo/toast-de-c%C3%A9l%C3%A9bration-danniversaire-avec-des-lumi%C3%A8res-de-corde-et-des-silhouettes-de-champagne.jpg?s=612x612&w=0&k=20&c=zNI7hWJRLzy4t9xZ4maMeXlbDKKF99kSMJRklkee7eM="
          }
          Title={"Birthday Party"}
          Description={"Birthday Party at my house"}
          Location={"Drive street New York, NY 10001"}
          hanldeUpdateEventForm={hanldeUpdateEventForm}
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
      <AddEventsForm />
      <UpdateEventsForm />
    </div>
  );
}

export default Events;
