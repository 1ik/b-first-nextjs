"use client";

import { HighlightChip, HighlightChipProps } from "@bfirst/components-highlight-chip";
import Link from "next/link";

export default function TrendingTopics({ title, items, className }: HighlightChipProps) {
  return <HighlightChip className={className} title={title} items={items} Link={Link}/>;
}
