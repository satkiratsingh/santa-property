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

export async function getThreeProperties() {
  const query = `*[_type == "property"][0..2]`;
  const properties = await sanityClient.fetch(query);
  return properties;
}

export async function getPropertyByLimit(limit) {
  const query = `*[_type == "property"][0..${limit}]`;
  const properties = await sanityClient.fetch(query);
  return properties;
}

export async function searchPropertyByNameOrLocation(searchQuery) {
  const query = `*[_type == "property" && (title match "*${searchQuery}*" || location match "*${searchQuery}*")][0..9]`;
  const properties = await sanityClient.fetch(query, {
    query: query,
  });
  return properties;
}
