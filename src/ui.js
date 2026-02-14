import { getIcon } from "./icon-mapper.js";

export function initUI(weatherService) {
	const form = document.querySelector("#searchForm");

	form.addEventListener("submit", async (e) => {
		e.preventDefault();
		const formData = new FormData(form);
		const search = formData.get("search");
		const data = await weatherService.fetchData({ location: search });
		console.log(data);
		render(data);
	});
}

function render(data) {
	const address = document.querySelector("#address");
	const temp = document.querySelector("#temp");
	const feelslike = document.querySelector("#feelslike");
	const tempmin = document.querySelector("#tempmin");
	const tempmax = document.querySelector("#tempmax");
	const next24Hours = document.querySelector("#next-24-hours");
	next24Hours.textContent = null;

	address.textContent = data.address;
	temp.textContent = `${data.temp} °C`;
	feelslike.textContent = `Feels like: ${data.feelslike} °C`;
	tempmin.textContent = `${data.tempmin} °C`;
	tempmax.textContent = `${data.tempmax} °C`;

	for (const hour of data.next24Hours) {
		const hourContainer = document.createElement("div");
		const hourElement = document.createElement("div");
		hourElement.textContent = hour.datetime;
		const iconElement = getIcon(hour.icon);
		const tempElement = document.createElement("div");
		tempElement.textContent = hour.temp;

		hourContainer.appendChild(hourElement);
		hourContainer.appendChild(iconElement);
		hourContainer.appendChild(tempElement);
		next24Hours.appendChild(hourContainer);
	}
}
