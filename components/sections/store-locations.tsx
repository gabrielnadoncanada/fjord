"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./partials/section-header";

interface Store {
  id: string;
  name: string;
  address: string;
  mapsUrl: string;
}

const stores: Store[] = [
  {
    id: "prague",
    name: "Prague",
    address: "Vinohradská 121,\n130 00 Praha 3,\nCzech Republic",
    mapsUrl:
      "https://maps.google.com/?q=Vinohradská+121,+130+00+Praha+3,+Czech+Republic",
  },
  {
    id: "hamburg",
    name: "Hamburg",
    address: "Gänsemarkt 2,\n20354 Hamburg\nGermany",
    mapsUrl: "https://maps.google.com/?q=Gänsemarkt+2,+20354+Hamburg+Germany",
  },
];

function StoreCard({ store }: { store: Store }) {
  const handleGetDirections = () => {
    window.open(store.mapsUrl, "_blank");
  };

  return (
    <Card className="bg-gray-100 border-0 rounded-xl p-12">
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-normal text-black">{store.name}</h3>

        <div className="flex flex-col gap-5">
          <p className="text-[15px] leading-[1.6] text-black whitespace-pre-line">
            {store.address}
          </p>

          <Button
            onClick={handleGetDirections}
            className="bg-black text-white rounded px-3.5 py-2.5 text-sm font-normal hover:bg-black/90 transition-colors w-fit flex items-center gap-1"
          >
            Get Directions
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Button>
        </div>
      </div>
    </Card>
  );
}

export function StoreLocations() {
  return (
    <div className="flex flex-col gap-3">
      <SectionHeader title="Our Stores" />

      <div className="grid grid-cols-2 gap-3">
        {stores.map((store) => (
          <StoreCard key={store.id} store={store} />
        ))}
      </div>
    </div>
  );
}
