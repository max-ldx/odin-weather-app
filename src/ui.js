export function initUI(weatherService) {
	const form = document.querySelector("#searchForm");

	form.addEventListener("submit", async (e) => {
		e.preventDefault();
		const formData = new FormData(form);
		const search = formData.get("search");
		const data = await weatherService.fetchData({ location: search });
		render(data);
	});
}

function render(data) {
	const address = document.querySelector("#address");
    const temp = document.querySelector("#temp");
    const feelslike = document.querySelector("#feelslike");
    const tempmin = document.querySelector("#tempmin");
    const tempmax = document.querySelector("#tempmax");

	address.textContent = data.address;
    temp.textContent = `${data.temp} °C`;
    feelslike.textContent = `Feels like: ${data.feelslike} °C`;
    tempmin.textContent = `${data.tempmin} °C`;
    tempmax.textContent = `${data.tempmax} °C`;
}
