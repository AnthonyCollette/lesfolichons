import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { unstable_noStore as noStore } from 'next/cache';

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
    noStore()
    const {rows} = await sql`SELECT * FROM Pets`
    return NextResponse.json(rows);
}