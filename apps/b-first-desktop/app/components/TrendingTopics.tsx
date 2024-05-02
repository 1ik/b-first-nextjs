"use client";

import { HighlightChip, HighlightChipProps } from "@bfirst/components-highlight-chip";

export default function TrendingTopics({ title, items }: HighlightChipProps) {
  return <HighlightChip title="Trending Topics" items={items} />;
}
