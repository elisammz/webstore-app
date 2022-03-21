import { height } from "@mui/system";
import React from "react";
import Carousel from "react-material-ui-carousel";
import styled from "styled-components";

import ImgSrc from "../assets/stories-background.jpg";

const StyledStories = styled.section`
  background-image: url(${ImgSrc});
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center right;
  height: 320px;

  .testimonial-container {
    margin: 35px 15px;
    position: flex;
    text-align: center;
  }

  .testimonial-heading {
    font-size: 16px;
    color: ##2d313e;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.2em;
  }

  .testimonial-name {
    color: #2d313e;
    text-transform: uppercase;
    padding: 0 auto;
    margin: 0 auto;
  }

  .testimonial {
    line-height: 1.9;
    font-size: 24px;
    margin: 0 auto;
  }
`;

export default function Stor(props) {
  var items = [
    {
      name: "Max Smith",
      description:
        "Our lab saved more than $50,000 using GeneX's fast and reliable HLA imputation solution. Thank you!",
      job: "Researcher",
    },
    {
      name: "Antonio Robert",
      description: "The accuracy of the prediction is unbelievable",
      job: "Researcher",
    },
  ];

  return (
    <StyledStories>
      <Carousel>
        {items.map((item, i) => (
          <div className="testimonial-container">
            <div key={i} item={item}>
              <div className=" testimonial-heading ">Real stories</div>
              <p className=" testimonial p-4">"{item.description}"</p>
              <h3 className="testimonial-name">{item.name}</h3>
              <p className="">{item.job}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </StyledStories>
  );
}
