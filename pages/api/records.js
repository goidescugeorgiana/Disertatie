import { sendOk, sendNotFound } from '@/js/utils/apiMethods.js';
import { getCollection } from "@/js/utils/functions";
import { ObjectId } from 'mongodb';

const COLLECTION_NAME = 'records';

const getRecords = async () => {
	const collection = await getCollection(COLLECTION_NAME);
	return collection.find({}).toArray();
};

const getRecord = async (id) => {
	const collection = await getCollection(COLLECTION_NAME);
	return collection.findOne({ _id: new ObjectId(id) });
};

export default async function handler(req, res) {
	if (req.method !== 'GET') {
		return sendMethodNotAllowed(res);
	}

	if (req.query.id) {
		const id = req.query.id;
		const record = await getRecord(id);
		if (record) {
			return sendOk(res, record);
		} else {
			return sendNotFound(res, 'Record not found');
		}
	} else {
		const records = await getRecords();
		return sendOk(res, records);
	}
}
