import { json } from 'express';
import * as fs from 'node:fs/promises';

let jsonDB;

try {
	jsonDB = JSON.parse(await fs.readFile("./activities.json", "utf-8"));
} catch(err) {
	await fs.writeFile("./activities.json", JSON.stringify({ data: []}), "utf-8");
	jsonDB = JSON.parse(await fs.readFile("./activities.json", "utf-8"));
}

export async function saveDb(content) {
	jsonDB.data.push(content);
	let result = await fs.writeFile("./activities.json", JSON.stringify(jsonDB), "utf-8");
	return jsonDB;
}

export function getDb(content) {
	return jsonDB;
}

export async function replaceDb(id, newContent) {
	return new Promise( async (resolve, reject) => {
		let indexOfActivity = getDb().data.findIndex((el) => {
			return el.id === id;
		})

		if (indexOfActivity === -1) return reject("That ID does not exist in the DB");
		
		jsonDB.data[indexOfActivity] = newContent;
		
		let result = await fs.writeFile("./activities.json", JSON.stringify(jsonDB), "utf-8");

		resolve(jsonDB.data[indexOfActivity]);
	})
}