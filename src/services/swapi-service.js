export default class SwapiService {
    _apiBase = "https://swapi.dev/api";

    async getResource(url) {
        try {
            const response = await fetch(`${this._apiBase}${url}`);

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            return await response.json();
        } catch (error) {
            console.error("Ошибка:", error);
        }
    }

    async getAllPeople() {
        const res = await this.getResource("/people/");
        return res.results;
    }

    getPerson(id) {
        return this.getResource(`/people/${id}`);
    }

    async getAllPlanets() {
        const res = await this.getResource("/planets/");
        return res.results;
    }

    getPlanet(id) {
        return this.getResource(`/planets/${id}`);
    }

    async getAllStarships() {
        const res = await this.getResource("/starships/");
        return res.results;
    }

    getStarship(id) {
        return this.getResource(`/starships/${id}`);
    }
}
