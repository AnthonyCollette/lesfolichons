import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params } : any) {

    const {rows} = await sql`SELECT * FROM Pets where id = ${params.id}`
    return NextResponse.json(rows);
}