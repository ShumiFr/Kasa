import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LogementTitle from "../components/LogementTitle";
import LogementHost from "../components/LogementHost";
import Tag from "../components/Tag";
import Rate from "../components/Rate";
import Collapse from "../components/Collapse";
import { logementList } from "../datas/logementList";
import { useParams } from "react-router-dom";
import Error404 from "./Error";
import Carousel from "../components/Carousel";

const LogementProfile = () => {
  const { id } = useParams();
  const logement = logementList.find((logement) => logement.id === id);
  const rates = [1, 2, 3, 4, 5];

  if (!logement) {
    return <Error404 />;
  }

  return (
    <div>
      <Header />
      <Carousel pictures={logement.pictures} title={logement.title} />
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
