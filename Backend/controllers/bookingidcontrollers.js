
const { client, connectToDatabase } = require('../database/connection');
connectToDatabase();



async function getAllBookingIds(req, res) {
    try {
        await client.connect();
        const db = client.db('tquest');
        const cursor = await db.collection('customer').find({}, { projection: { booking_id: 1 } });
        const bookingIdsSet = new Set(); // Using a Set to store distinct booking IDs
        await cursor.forEach(doc => {
            bookingIdsSet.add(doc.booking_id);
        });
        const bookingIds = Array.from(bookingIdsSet); // Convert Set to Array
        res.json(bookingIds);
    } catch (err) {
        console.error('Error fetching booking IDs:', err);
        res.status(500).json({ error: 'Failed to fetch booking IDs' });
    } 
}

module.exports = { getAllBookingIds };