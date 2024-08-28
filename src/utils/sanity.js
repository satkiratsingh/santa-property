import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "vfyy693m",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-08-28",
});

export async function getProperties() {
  const query = `*[_type == "property"]`;
  const properties = await sanityClient.fetch(query);
  return properties;
}
