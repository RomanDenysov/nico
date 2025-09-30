"use client";

import { ContactCard } from "./contact-card";
import { TitleCard } from "./title-card";
import { WorkingHoursCard } from "./working-hours-card";

export function HomePageView() {
  return (
    <div className="flex flex-col gap-8 py-12">
      <TitleCard title="NICO" />

      <div className="columns-1 gap-x-8 sm:columns-2 lg:columns-3">
        <div className="mb-8 break-inside-avoid">
          <WorkingHoursCard />
        </div>
        <div className="mb-8 break-inside-avoid">
          <ContactCard />
        </div>
      </div>
    </div>
  );
}
