// lib/effiApi.ts
const BASE_URL = 'https://partner-api.effi.com.au/api';

export async function importLead(data: any) {
  const res = await fetch(`${BASE_URL}/Leads/Import/3.0`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.NEXT_PUBLIC_EFFI_API_KEY!,
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(error);
  }

  return res.json();
}
