const API_URL = process.env.EXPO_PUBLIC_API_URL;

export async function fetchUser() {
  const res = await fetch(`${API_URL}/users`);
  if (!res.ok) throw new Error("Failed to fetch user");
  return res.json();
}