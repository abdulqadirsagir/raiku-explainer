// app/api/search/route.ts
import { NextResponse } from 'next/server';
import { raikuTerms } from '@/lib/definitions';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  if (!query) {
    return NextResponse.json([]);
  }

  const lowerQuery = query.toLowerCase();

  // Filter logic
  const results = raikuTerms.filter((item) =>
    item.term.toLowerCase().includes(lowerQuery) || 
    item.definition.toLowerCase().includes(lowerQuery)
  );

  return NextResponse.json(results);
}
