import { getIcon } from "./icon-mapper.js";
import { getCurrentUnit, setCurrentUnit } from "./units.js";

export function initUI(weatherService) {
	const form = document.querySelector("#searchForm");
	const unitsSelector = document.querySelector("#units");

	form.addEventListener("submit", async (e) => {
		e.preventDefault();
		await search();
	});

	async function search() {
		const formData = new FormData(form);
		const search = formData.get("search");
		const unit = unitsSelector.value;
		setCurrentUnit(unit === "metric");
		const data = await weatherService.fetchData({
			location: search,
			system: unitsSelector.value,
		});
		render(data);
	}
}

function render(data) {
	const currentUnit = getCurrentUnit();
	const address = document.querySelector("#address");
	const temp = document.querySelector("#temp");
	const feelslike = document.querySelector("#feelslike");
	const tempmin = document.querySelector("#tempmin");
	const tempmax = document.querySelector("#tempmax");
	const next24Hours = document.querySelector("#next-24-hours");
	next24Hours.textContent = null;

	address.textContent = data.address;
	temp.textContent = `${data.temp} ${currentUnit}`;
	feelslike.textContent = `Feels like: ${data.feelslike} ${currentUnit}`;
	tempmin.textContent = `${data.tempmin} ${currentUnit}`;
	tempmax.textContent = `${data.tempmax} ${currentUnit}`;

	for (const hour of data.next24Hours) {
		const hourContainer = document.createElement("div");
		const hourElement = document.createElement("div");
		hourElement.textContent = hour.datetime;
		const iconElement = getIcon(hour.icon);
		const tempElement = document.createElement("div");
		tempElement.textContent = `${hour.temp} ${currentUnit}`;

		hourContainer.appendChild(hourElement);
		hourContainer.appendChild(iconElement);
		hourContainer.appendChild(tempElement);
		next24Hours.appendChild(hourContainer);
	}
}
