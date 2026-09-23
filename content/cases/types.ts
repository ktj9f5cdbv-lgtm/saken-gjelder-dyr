import type { SourceRef } from "@/content/representatives/types";

export type HistoryStep = {
  dateLabel: string;
  title: string;
  body: string;
  sources: SourceRef[];
  current?: boolean;
};
