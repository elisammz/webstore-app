import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { API, graphqlOperation, Storage } from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import styled from "styled-components";

import { createProduct } from "../api/mutations";
import * as mutations from "../api/mutations";
import config from "../aws-exports";

// Components

import BrandButton from "../components/styles/BrandButton.styled";

//Styled components
const StyledContainer = styled.div`
  background-color: white;
  color: #21252a;
  width: 90%;
  margin: 20px auto;
  padding 10px;
  border-style: solid;
  border: 1px #c7c7c7 solid;


  .admin-form {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 3rem 0;
    font-size: 14px;
  }

  .signout-btn{
    padding: 15px 200px;
    cursor: pointer;
  }
`;

const {
  aws_user_files_s3_bucket_region: region,
  aws_user_files_s3_bucket: bucket,
} = config;

const Admin = () => {
  const [image, setImage] = useState(null);
  const [productDetails, setProductDetails] = useState({
    title: "",
    description: "",
    image: "",
    price: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (productDetails.description)
        return await API.graphql({
          query: mutations.createProduct,
          variables: { input: productDetails },
          authMode: "AMAZON_COGNITO_USER_POOLS",
        });

      setProductDetails({
        title: "",
        description: "",
        image: "",
        price: "",
      });

      console.log(productDetails);
    } catch (err) {
      console.log("error creating Product:", err);
    }
  };

  const handleImageUpload = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const extension = file.name.split(".")[1];
    const name = file.name.split(".")[0];
    const key = `images/${uuidv4()}${name}.${extension}`;
    const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`;
    try {
      // Upload the file to s3
      await Storage.put(key, file, {
        level: "public",
        contentType: file.type,
      });
      //
      // Shows the uploaded image
      const image = await Storage.get(key, { level: "public" });
      setImage(image);
      setProductDetails({ ...productDetails, image: url });
      console.log("image uploaded");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section>
      <AmplifyAuthenticator>
        <StyledContainer>
          <header>
            <h3>Add New Product</h3>
          </header>
          <form className="admin-form" onSubmit={handleSubmit}>
            <div>
              {image ? (
                <img src={image} alt="" width={300} />
              ) : (
                <input
                  type="file"
                  accept="image/jpg"
                  onChange={(e) => handleImageUpload(e)}
                />
              )}
            </div>

            <div>
              <div>
                <p>
                  <label htmlFor="title">Title</label>
                </p>

                <p>
                  <input
                    name="title"
                    type="text"
                    placeholder="Type the title"
                    onChange={(e) =>
                      setProductDetails({
                        ...productDetails,
                        title: e.target.value,
                      })
                    }
                    required
                  />
                </p>
              </div>
              <div>
                <p>
                  <label htmlFor="description">Description</label>
                </p>
                <p>
                  <input
                    name="description"
                    type="text"
                    placeholder="Type the description of the product"
                    onChange={(e) =>
                      setProductDetails({
                        ...productDetails,
                        description: e.target.value,
                      })
                    }
                  />
                </p>
              </div>
              <div>
                <p>
                  <label htmlFor="price">Price in USD ($)</label>
                  <input
                    name="price"
                    type="text"
                    placeholder="What is its price (USD)"
                    onChange={(e) =>
                      setProductDetails({
                        ...productDetails,
                        price: e.target.value,
                      })
                    }
                  />
                </p>
              </div>
              <div>
                <p>
                  <label>Is this a featured product? </label>{" "}
                  <input
                    type="checkbox"
                    className="featured-checkbox"
                    checked={productDetails.featured}
                    onChange={() =>
                      setProductDetails({
                        ...productDetails,
                        featured: !productDetails.featured,
                      })
                    }
                  />
                </p>
              </div>
              <div>
                <button className="btn" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
          <div className="signout-btn">
            <AmplifySignOut></AmplifySignOut>
          </div>
        </StyledContainer>
      </AmplifyAuthenticator>
    </section>
  );
};

export default Admin;
