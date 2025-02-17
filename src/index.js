import React from "react";
import ReactDOM from "react-dom/client";

class SwapiService {
    _apiBase = "https://swapi.dev/api";

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
    }
}

const apiUrl = "https://swapi.dev/api/people/1/";

async function fetchData(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Ошибка:", error);
    }
}

fetchData(apiUrl);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
        <h1>Hello Worlddsvsd</h1>
    </div>
);
