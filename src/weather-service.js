export class WeatherService {
	#api_key = "8LKYVXFVK64VFX7JLVTTWE2BJ";

	async fetchData({ location = "", system = "metric" } = {}) {
		try {
			const response = await fetch(
				`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next24hours?unitGroup=${system}&key=${this.#api_key}&contentType=json`,
			);
			if (!response.ok) {
				throw new Error("Failed to fetch data from weather API");
			}
			const data = await response.json();
			return filterData(data);
		} catch (error) {
			console.log(error);
		}
	}
}

function filterData(data) {
	const filteredData = {};

	filteredData.address = data.resolvedAddress;
	filteredData.temp = data.currentConditions.temp;
	filteredData.feelslike = data.currentConditions.feelslike;
	filteredData.tempmin = data.days[0].tempmin;
	filteredData.tempmax = data.days[0].tempmax;

	const now = new Date(Date.now());
	const hour = now.getHours();
	const next24Hours = [];
	const currentDayHours = data.days[0].hours.slice(hour);
    const nextDayHours = data.days[1].hours.slice(0, hour + 1);
	next24Hours.push(...currentDayHours, ...nextDayHours);

	filteredData.next24Hours = next24Hours;

	return filteredData;
}