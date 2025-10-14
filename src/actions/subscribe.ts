"use server";

export async function subscribe(email: string) {
  try {
    const res = await fetch(
      "https://blog.souravlayek.com/members/api/send-magic-link/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      }
    );

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      return { ok: false, error: data?.message ?? "Subscription failed" };
    }

    return { ok: true };
  } catch {
    return { ok: false, error: "Something went wrong." };
  }
}
