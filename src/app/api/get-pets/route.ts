import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
    const {rows} = await sql`SELECT * FROM Pets`
    return NextResponse.json(rows);
}