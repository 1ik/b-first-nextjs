import { revalidatePath } from "next/cache";

export async function POST() {
  revalidatePath("/");
  return Response.json({
    revalidated: true,
    revalidated_at: Date.now(),
  });
}
