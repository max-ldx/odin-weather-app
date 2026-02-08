import { initUI } from "./ui.js";
import { WeatherService } from "./weather-service.js";

const weatherService = new WeatherService();
initUI(weatherService);
