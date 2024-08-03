import { getNewsUrl } from "@bfirst/utilities";
import { redirect } from "next/dist/server/api-utils";
import { notFound } from "next/navigation";
import { getData } from "../../../../utils/dataFetch";

export default async function NewsDetailsPage({ params }) {
  const detailsData = await getData(`story/details/${params.id}`);

  if (!detailsData) return notFound();

  return redirect(getNewsUrl(detailsData?.news));
}
