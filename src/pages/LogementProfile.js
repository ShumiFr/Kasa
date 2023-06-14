import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LogementBanner from "../components/LogementBanner";
import LogementTitle from "../components/LogementTitle";
import LogementHost from "../components/LogementHost";
import Tag from "../components/Tag";
import Rate from "../components/Rate";
import Collapse from "../components/Collapse";
import { logementList } from "../datas/logementList";
import { useParams } from "react-router-dom";
import Error404 from "./Error";
import ArrowBanner from "../components/ArrowBanner";

const LogementProfile = () => {
  const { id } = useParams();
  const logement = logementList.find((logement) => logement.id === id);
  const rates = [1, 2, 3, 4, 5];
  const [activeBanner, setActiveBanner] = useState(0);

  const handleClickNextBanner = () => {
    if (activeBanner === logement.pictures.length - 1) {
      setActiveBanner(0);
    } else {
      setActiveBanner(activeBanner + 1);
    }
  };

  const handleClickPreviousBanner = () => {
    if (activeBanner === 0) {
      setActiveBanner(logement.pictures.length - 1);
    } else {
      setActiveBanner(activeBanner - 1);
    }
  };

  if (!logement) {
    return <Error404 />;
  }
  return (
    <div>
      <Header />
      <div className="logement-banner">
        <div className="arrows-banner-zone">
          <ArrowBanner
            onClick={handleClickPreviousBanner}
            className={
              logement.pictures.length > 1
                ? "arrow-left fa-solid fa-chevron-up"
                : null
            }
          />
          <ArrowBanner
            onClick={handleClickNextBanner}
            className={
              logement.pictures.length > 1
                ? "arrow-right fa-solid fa-chevron-up"
                : null
            }
          />
        </div>
        {logement.pictures.map((e, index) => (
          <LogementBanner
            className={`img-banner ${
              index === activeBanner ? "active-banner" : ""
            }`}
            key={index}
            imgSrc={e}
            title={`${logement.title} - Bannière n°${activeBanner + 1}`}
          />
        ))}
        <span className="counter">
          {logement.pictures.length > 1
            ? `${activeBanner + 1}/${logement.pictures.length}`
            : null}
        </span>
      </div>
      <div className="description-zone">
        <div className="logement-title-and-description">
          <LogementTitle title={logement.title} location={logement.location} />
          <div className="tag-zone">
            {logement.tags.map((e, index) => (
              <Tag key={index} tag={e} />
            ))}
          </div>
        </div>
        <div className="logement-host-and-rates">
          <div className="host-zone">
            <LogementHost
              hostPicture={logement.host.picture}
              hostName={logement.host.name}
            />
          </div>
          <div className="rates-zone">
            {rates.map((e, index) => (
              <Rate
                key={index}
                color={parseInt(logement.rating) >= e ? "colored" : ""}
              />
            ))}
          </div>
        </div>
      </div>
      <ul className="collapses">
        <Collapse
          title="Description"
          description={logement.description}
          openByDefault={false}
        />
        <Collapse
          title="Équipements"
          description={logement.equipments.map((e, index) => (
            <span key={index}>{e}</span>
          ))}
          openByDefault={false}
        />
      </ul>
      <Footer />
    </div>
  );
};

export default LogementProfile;
