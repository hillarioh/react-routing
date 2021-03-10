import "./App.css";
import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Shop() {
  useEffect(() => {
    gameData();
  }, []);

  const [items, setItems] = useState([]);

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
        proxyurl + "https://fortnite-api.theapinetwork.com/upcoming/get",
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
      console.log(data.data);
      setItems(data.data);
    } catch (err) {
      console.log(`miene ${err}`);
    }
  };

  return (
    <div>
      {items.map((item, k) => (
        <h1 id={"it" + k} key={item.itemId}>
          <Link to={`/shop/${item.itemId}`}>{item.item.name}</Link>
        </h1>
      ))}
    </div>
  );
}

export default Shop;
