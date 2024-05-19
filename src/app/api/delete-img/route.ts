import { del } from '@vercel/blob';

export const dynamic = 'force-dynamic'
 
export const runtime = 'edge';
 
export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const urlToDelete = searchParams.get('url') as string;
  await del(urlToDelete);
 
  return new Response();
}