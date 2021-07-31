import React, { useState, useEffect } from "react";
import axios from "axios";

// Components
import TourItem from "./TourItem";
import Loader from "./Loader";

const url = "https://course-api.com/react-tours-project";

const TourList = () => {
  const [tourList, setTourList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTourList = async (url) => {
    setIsLoading(true);
    try {
      const response = await axios.get(url);
      await setTourList(response.data);
      await setTimeout(() => setIsLoading(false), 500);
    } catch (err) {
      throw new Error(err);
    }
  };

  const removeTourItem = (id) => {
    const newTourList = tourList.filter((tour) => id !== tour.id);
    setTourList(newTourList);
  };

  useEffect(() => {
    fetchTourList(url);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (tourList.length === 0 && !isLoading) {
    return (
      <button className="refresh-list-btn" onClick={() => fetchTourList(url)}>
        refresh list
      </button>
    );
  }

  return (
    <div className="tour-list">
      {tourList.map((tour) => {
        const { id, name, info, image, price } = tour;
        return (
          <TourItem
            key={id}
            name={name}
            info={info}
            image={image}
            price={price}
            removeTourItem={() => removeTourItem(id)}
          />
        );
      })}
    </div>
  );
};

export default TourList;
