"use client";

import { HighlightChip, HighlightChipProps } from "@bfirst/components-highlight-chip";
import "../../../../../libs/fonts/montserrat/index.css";

export default function TrendingTopics({ title, items, className }: HighlightChipProps) {
  return <HighlightChip className={`montserrat-regular ${className}`} title={title} items={items} />;
}
