"use client";

import SecondaryTabsView, { type SecondaryTabItem } from "@/components/shared/secondary-tabs";

type SecondaryTabsProps = {
  tabs: SecondaryTabItem[];
};

export default function SecondaryTabs({ tabs }: Readonly<SecondaryTabsProps>) {
  return <SecondaryTabsView tabs={tabs} accent="indigo" />;
}
