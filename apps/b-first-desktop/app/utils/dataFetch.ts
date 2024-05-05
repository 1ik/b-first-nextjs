const baseUrl = "https://backend.bangladeshfirst.com/api/v1/public";

export async function getData(url: string) {
  try {
    const res = await fetch(`${baseUrl}/${url}`, { cache: "no-store" });
    if (!res.ok) throw new Error("Could not get data");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
