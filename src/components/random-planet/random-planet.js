import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";

import "./random-planet.css";

export default class RandomPlanet extends Component {
    swapiService = new SwapiService();

    state = {
        name: null,
        population: null,
        rotationPeriod: null,
        diameter: null,
    };

    constructor() {
        super();
        this.updatePlanet();
    }

    updatePlanet() {
        let numberPlanet = Math.floor(Math.random() * 25) + 1;

        this.swapiService.getPlanet(numberPlanet).then((planet) => {
            this.setState({
                name: planet.name,
                population: planet.population,
                rotationPeriod: planet.rotation_period,
                diameter: planet.diameter,
            });
        });
    }

    onPlanetLoaded(planet) {
        this.setState(planet);
    }

    render() {
        const { name, population, rotationPeriod, diameter } = this.state;

        return (
            <div className="random-planet jumbotron rounded">
                <img
                    className="planet-image"
                    src="https://starwars-visualguide.com/assets/img/planets/5.jpg"
                />
                <div>
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Population</span>
                            <span>{population}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Rotation Period</span>
                            <span>{rotationPeriod}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Diameter</span>
                            <span>{diameter}</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
