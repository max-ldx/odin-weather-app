import {
	Cloud,
	CloudFog,
	CloudMoon,
	CloudRain,
	CloudSun,
	createElement,
	Moon,
	Snowflake,
	Sun,
	Wind,
} from "lucide";

export function getIcon(iconCode) {
	if (iconCode === "snow") {
		return createElement(Snowflake);
	} else if (iconCode === "rain") {
		return createElement(CloudRain);
	} else if (iconCode === "fog") {
		return createElement(CloudFog);
	} else if (iconCode === "wind") {
		return createElement(Wind);
	} else if (iconCode === "cloudy") {
		return createElement(Cloud);
	} else if (iconCode === "partly-cloudy-day") {
		return createElement(CloudSun);
	} else if (iconCode === "partly-cloudy-night") {
		return createElement(CloudMoon);
	} else if (iconCode === "clear-day") {
		return createElement(Sun);
	} else if (iconCode === "clear-night") {
		return createElement(Moon);
	} else {
		return "";
	}
}
