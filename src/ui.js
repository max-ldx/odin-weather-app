export function initUI(weatherService) {
	const form = document.querySelector("#searchForm");

	form.addEventListener("submit", async (e) => {
		e.preventDefault();
		const formData = new FormData(form);
		const search = formData.get("search");
		const data = await weatherService.fetchData({ location: search });
		console.log(data);
	});
}
