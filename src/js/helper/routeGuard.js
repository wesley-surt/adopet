import { StorageService } from "../service/StorageService.js";
if (!!!StorageService.get("token")) window.location = "login.html";
