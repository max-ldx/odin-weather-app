export class WeatherService {
	#api_key = "8LKYVXFVK64VFX7JLVTTWE2BJ";

	async fetchData({ location = "", system = "metric" } = {}) {
		try {
			const response = await fetch(
				`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${system}&key=${this.#api_key}&contentType=json`,
			);
			if (!response.ok) {
				throw new Error("Failed to fetch data from weather API");
			}
			const data = await response.json();
			// TODO: filter data
			return data;
		} catch (error) {
			console.log(error);
		}
	}
}
