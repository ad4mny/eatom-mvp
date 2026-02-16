"use client";

import SecondaryTabsView from "@/components/shared/secondary-tabs";
import { secondaryTabs } from "../_lib/navigation";

export default function SecondaryTabs() {
  const tabs = secondaryTabs.map((tab) => ({
    slug: tab.slug,
    title: tab.label,
    description: tab.description,
    href: tab.href,
  }));

  return <SecondaryTabsView tabs={tabs} accent="teal" />;
}
