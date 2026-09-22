/** Felles typer for stortingskontakt. */

export type SourceRef = {
  label: string;
  url: string;
  note?: string;
};

export type Representative = {
  id: string;
  name: string;
  party: string;
  roles: string[];
  email: string;
  profileUrl: string;
  profileSources: SourceRef[];
  verifiedAt: string; // ISO date YYYY-MM-DD
};

export type CaseRepresentativeLink = {
  representativeId: string;
  whyContact: string;
  reasonSources: SourceRef[];
  specificAsk?: string;
  order: number;
  reasonVerifiedAt: string;
};

export type CaseContactContent = {
  caseId: string;
  purposeTitle: string;
  purposeBody: string[];
  writingHelp?: {
    title: string;
    bullets: string[];
    sources: SourceRef[];
    draftNote?: string;
  };
  representatives: CaseRepresentativeLink[];
};
