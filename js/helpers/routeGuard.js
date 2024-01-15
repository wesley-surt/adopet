import { StorageService } from "../services/StorageService.js";
if (!!!StorageService.get("token")) window.location = "login.html";
