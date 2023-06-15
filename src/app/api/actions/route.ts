import { NextRequest, NextResponse } from 'next/server';
import { OPEN_AI_COMPLETIONS_URL, OPEN_AI_GPT_MODEL } from '@/utils/constants';

async function POST(req: NextRequest, res: Response) {
    const { messages } = await req.json();

    const body = JSON.stringify({
        messages,
        model: OPEN_AI_GPT_MODEL,
        stream: false,
    })

    try {
        const response = await fetch(OPEN_AI_COMPLETIONS_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
            },
            body
        });

        const data = await response.json();

        return new NextResponse(JSON.stringify(data), {
            status: 200
        });
    } catch (error: any) {
        return new NextResponse(error, {
            status: 500
        });
    }
};

export { POST };
