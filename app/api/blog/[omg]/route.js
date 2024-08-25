import { promises as fs } from 'fs';

export async function GET(request) {
    try {
        const data = await fs.readFile("blogdata/computer.json", 'utf-8');
        const parsedData = JSON.parse(data);
        return new Response(JSON.stringify(parsedData), {
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (err) {
        console.error("Error reading file:", err);
        return new Response("Error reading file", { status: 500 });
    }
}
