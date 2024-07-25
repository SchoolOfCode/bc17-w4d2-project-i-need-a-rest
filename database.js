import * as fs from "node:fs/promises";

let jsonDb;

try {
	jsonDb = JSON.parse(await fs.readFile("./activities.json", "utf-8"));
} catch (err) {
	await fs.writeFile("./activities.json", JSON.stringify({ data: [] }), "utf-8");
	jsonDb = JSON.parse(await fs.readFile("./activities.json", "utf-8"));
}

export async function saveDb(content) {
	jsonDb.data.push(content);
	let result = await fs.writeFile("./activities.json", JSON.stringify(jsonDb), "utf-8");
	return jsonDb;
}

export function getDb(content) {
	return jsonDb;
}

export async function replaceDb(id, newContent) {
	return new Promise(async (resolve, reject) => {
		let indexOfActivity = getDb().data.findIndex((el) => {
			return el.id === id;
		});

		if (indexOfActivity === -1) return reject("That ID does not exist in the DB");

		jsonDb.data[indexOfActivity] = {
			...jsonDb.data[indexOfActivity],
			...newContent
		};

		let result = await fs.writeFile("./activities.json", JSON.stringify(jsonDb), "utf-8");

		resolve(jsonDb.data[indexOfActivity]);
	});
}

export async function deleteDb(id) {
	return new Promise(async (resolve, reject) => {
		let indexOfActivity = getDb().data.findIndex((el) => {
			return el.id === id;
		});

		if (indexOfActivity === -1) return reject("That ID does not exist in the DB");

		let deletedActivity = jsonDb.data.splice(indexOfActivity, 1);

		let result = await fs.writeFile("./activities.json", JSON.stringify(jsonDb), "utf-8");

		resolve(deletedActivity);
	});
}
