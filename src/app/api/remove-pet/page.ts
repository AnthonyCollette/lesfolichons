import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  try {
    await sql`DELETE FROM pets WHERE 'id' = (${id})`
  } catch (error) {
    return NextResponse.json({error}, {status: 500})
  }

  const pets = await sql`SELECT * FROM pets`
  return NextResponse.json({pets}, {status: 200});
}