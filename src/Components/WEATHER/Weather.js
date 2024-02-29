    import React from "react";
    import "./Style.css";
    import styled from "@emotion/styled";
    import { useEffect } from "react";
    import { TextField, Button } from "@mui/material";
    import { DataGrid, rows, columns } from "@mui/x-data-grid";

    const Text = styled(TextField)`
      color: white;

      width: 100%;
    `;
    function Weather() {
      const [city, setCity] = React.useState(null);
      const [search, setSearch] = React.useState("");

      useEffect(() => {
        const fetchAppi = async () => {
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=2895d35387429c2bf7e4a59bef718c13`;
          const response = await fetch(url);
          const resJson = await response.json();
          setCity(resJson.main);
        };
        fetchAppi();
      }, [search]);

      const handlchange = (event) => {
        event.preventDefault(); 
        setSearch(event.target.value);
      };

      return (
        <>
          <h1 style={{ color: "white" }}>
            Check Weather In<span > Your City </span>{" "}
          </h1>
          <div className="container">
            <div className="Box">
              <h1 style={{ color: "black" }}>
                Weather <span>App</span>
              </h1>
              <Text
                style={{ color: "white" }}
                id="standard-basic"
                label="Enter City"
                variant="standard"
                onChange={handlchange}
              />

              {!city ? (
                <p style={{color:"white"}}> No data found</p>
              ) : (
                <div>
                  <h1 style={{ color: "white" }}>{search.toUpperCase()}</h1>
                  <h2 style={{ color: "white" }}>
                    {city.temp}
                    <span>&#8451;</span>
                  </h2>
                  <p style={{ color: "white" }}>
                    Min-temp : {city.temp_min}
                    <span>&#37;</span> || Max-temp :{city.temp_max}
                    <span>&#37;</span>
                  </p>
                </div>
              )}
            </div>
          </div>
        </>
      );
    }

    export default Weather;
