"use client";

import { HighlightChip, HighlightChipProps } from "@bfirst/components-highlight-chip";

export default function TrendingTopics({ title, items, className }: HighlightChipProps) {
  return <HighlightChip className={className} title={title} items={items} />;
}
