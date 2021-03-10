import "./App.css";
import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Item(props) {
  useEffect(() => {
    gameData();
  }, []);

  const [item, setItem] = useState({
    images: {},
  });

  var myHeaders = new Headers();
  myHeaders.append("Authorization", "457b94f1-b1f84ac6-7f5f9ecf-c251cff4");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const proxyurl = "https://cors-anywhere.herokuapp.com/";

  const fetchItems = () =>
    new Promise((resolve, reject) => {
      fetch(
        proxyurl +
          `https://fortnite-api.theapinetwork.com/item/get?id=${props.match.params.id}`,
        requestOptions
      )
        .then((response) => {
          if (response.status >= 200 && response.status < 300) {
            resolve(response.json());
          } else {
            reject(new Error(response.statusText));
          }
        })
        .catch((error) => console.log("error", error));
    });

  const gameData = async () => {
    try {
      const data = await fetchItems();
      console.log(data.data.item);
      setItem(data.data.item);
    } catch (err) {
      console.log(`miene ${err}`);
    }
  };

  return (
    <div>
      <h1>{item.name} </h1>
      <h1>{item.description} </h1>
      <img src={item.images.background} alt="we" />
    </div>
  );
}

export default Item;
