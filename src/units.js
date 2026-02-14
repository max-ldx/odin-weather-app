const units = ["°C", "°F"];
let currentUnit = 0;

export function getCurrentUnit() {
	return units[currentUnit];
}

export function setCurrentUnit(metric = true) {
	currentUnit = metric ? 0 : 1;
}
