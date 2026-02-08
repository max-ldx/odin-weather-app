import { WeatherService } from "./weather-service.js";

const weatherService = new WeatherService();
const data = await weatherService.fetchData({ location: "Thimister" });
const filteredData = filterData(data);
console.log(filterData);

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
