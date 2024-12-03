export default async function handler(req, res) {
    try {

        const token = "$TOKEN";
        const ip = req.query.ip || "";
        
        const url = ip ? `https://ipinfo.io/${ip}/json?token=${token}` : `https://ipinfo.io/json?token=${token}`;

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch data from ipinfo.io");
        }

        const data = await response.json();
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in /api/location:", error.message);
        return res.status(500).json({error: "Internal Server Error"})
    }
}