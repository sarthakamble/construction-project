import React, { useEffect, useState } from "react";
import "./Map.css";
import { default as mapIcon } from "../../assets/icons/map.png";
const Map = () => {
  const [fetchData, setFetchData] = useState(null);
  const [loading, setLoading] = useState(true);

  //   the function with async method
  const map = async () => {
    try {
      const response = await fetch(
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.544409023878!2d73.1079831!3d18.9957177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e83ee4089223%3A0x4580410c6e677978!2sNeelkanth%20Prestige%2C%20Swami%20Nityanand%20Rd%2C%20Nityanand%20Nagar%2C%20HOC%20Colony%2C%20Panvel%2C%20Navi%20Mumbai%2C%20Maharashtra%20410206!5e0!3m2!1sen!2sin!4v1713593719998!5m2!1sen!2sin"
      );

      setFetchData(response);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(true);
    }
  };

  //   using useEffect to call the function
  useEffect(() => {
    map();
  }, []);
  return (
    <div className="map boxTwo">
      {/* incase map doesnt load from online */}
      {loading ? (
        <div className="mapNotFound">
          <h4>OOPs live map not found</h4>
          <img src={mapIcon} alt="map" width="70%" />
        </div>
      ) : (
        // if map load it will display this iframe
        <iframe
         
          src={fetchData.url}
          style={{ border: 0 }}
          loading="lazy"
          title="google live map"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      )}
    </div>
  );
};

export default Map;
