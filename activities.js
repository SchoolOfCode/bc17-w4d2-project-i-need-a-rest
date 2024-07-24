import crypto from "crypto";
import { saveDb, getDb } from "./database.js";

const activity_types = ["running", "swimming", "jogging", "weightlifting", "walking"];

export function generateActivities(amount = 1) {
	return new Promise(function (resolve) {
		let arr = [];

		for (let i = 0; i < amount; i++) {
			arr.push({
				id: crypto.randomUUID(),
				activity_submitted: Date.now(),
				activity_type: activity_types[Math.floor(Math.random() * activity_types.length)],
				activity_duration: Math.floor(Math.random() * 60)
			});
		}

		resolve(arr);
	});
}

export function createNewActivity(activityType = "jog", activityDuration = "30") {
	return new Promise((resolve) => {
		resolve(saveDb({
			id: crypto.randomUUID(),
			activity_submitted: Date.now(),
			activity_type: activityType,
			activity_duration: activityDuration,
		}));
	});
}

// let result = await createNewActivity("walking", "59");

export function getAllActivities() {
	return new Promise((resolve) => {
		resolve(getDb());
	})
}