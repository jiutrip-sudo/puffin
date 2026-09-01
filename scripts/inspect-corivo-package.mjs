import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

function loadEnvLocal() {
  const envPath = resolve(import.meta.dirname, "..", ".env.local");
  if (!existsSync(envPath)) return;
  for (const line of readFileSync(envPath, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!process.env[key]) process.env[key] = value;
  }
}

loadEnvLocal();

const instanceId =
  process.env.CORIVO_CLIENT_ID ?? "ae034790-70dd-4df5-93a0-957be2883176";
const packageTourId = Number(process.argv[2] ?? "82173");

async function fetchItems() {
  const query = `
    query packageItems(
      $packageTourId: Int!
      $travelers: TravelerCombinationInput!
      $choices: Boolean!
      $product: Boolean!
    ) {
      packageItems(packageId: $packageTourId, travelers: $travelers) {
        type
        dayFrom
        dayTo
        choices @include(if: $choices) {
          id
          product @include(if: $product) {
            ... on HotelRoom {
              category
              classification { id code name }
            }
          }
        }
      }
    }
  `;
  const res = await fetch("https://gateway.corivo.io/graphql", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-client-id": instanceId,
    },
    body: JSON.stringify({
      query,
      variables: {
        packageTourId,
        travelers: { adults: 2, children: 0, infants: 0 },
        choices: true,
        product: true,
      },
    }),
  });
  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    process.exit(1);
  }
  const items = json.data.packageItems;
  console.log(
    JSON.stringify(
      {
        packageTourId,
        types: items.map((i) => ({
          type: i.type,
          dayFrom: i.dayFrom,
          dayTo: i.dayTo,
          choices: (i.choices ?? []).map((c) => ({
            id: c.id,
            product: c.product,
          })),
        })),
      },
      null,
      2,
    ),
  );
}

fetchItems().catch((e) => {
  console.error(e);
  process.exit(1);
});
