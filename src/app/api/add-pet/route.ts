import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name');
  const id = searchParams.get('id');
  const description = searchParams.get('description');
  const image = searchParams.get('image');

  try {
    await sql`INSERT INTO pets (name, id, description, image) VALUES (${name}, ${id}, ${description}, ${image})`
  } catch (error) {
    return NextResponse.json({error}, {status: 500})
  }

  const pets = await sql`SELECT * FROM pets`
  return NextResponse.json({pets}, {status: 200});
}