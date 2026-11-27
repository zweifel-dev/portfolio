// The Method section: the white paper "AI-Enabled Software Delivery" rebuilt as seven web pages.
// Page text lives in src/content/method/, one file per page; structured data in src/content/method/data.ts.
import overview from "../content/method/overview";
import foundation from "../content/method/foundation";
import stageContract from "../content/method/stage-contract";
import prove from "../content/method/prove";
import lifecycle from "../content/method/lifecycle";
import controls from "../content/method/controls";
import measurement from "../content/method/measurement";

export type MethodSlug = "" | "foundation" | "stage-contract" | "prove" | "lifecycle" | "controls" | "measurement";

export type FigureName =
  | "MaturityLadder"
  | "ResponsibilityMatrix"
  | "FoundationGrid"
  | "FoundationSetup"
  | "SystemGraph"
  | "StageContract"
  | "StageStates"
  | "ProveLoop"
  | "ProveMapping"
  | "DeliveryChain"
  | "StageContracts"
  | "ApprovalClasses"
  | "Scorecard"
  | "CapabilityPhases"
  | "TraceabilityChain";

export interface MethodSection {
  heading: string;
  /** Short anchor id; defaults to a slug of the heading */
  id?: string;
  body?: string[];
  list?: string[];
  /** Numbered instead of bulleted */
  ordered?: boolean;
  table?: { caption?: string; columns: string[]; rows: string[][] };
  figure?: FigureName;
  figureCaption?: string;
  callout?: { label: string; text: string };
  /** Text after the list, table or figure */
  after?: string[];
}

export interface MethodPage {
  slug: MethodSlug;
  order: number;
  /** Short name for the sub-navigation */
  navTitle: string;
  title: string;
  summary: string;
  sections: MethodSection[];
  sourceMap: string[];
  references?: "method" | "prove" | "both";
}

export const methodPages: MethodPage[] = [overview, foundation, stageContract, prove, lifecycle, controls, measurement].sort(
  (a, b) => a.order - b.order
);

export const methodPath = (slug: MethodSlug) => (slug ? `/method/${slug}` : "/method");

export const methodPageByPath = (path: string) => methodPages.find((p) => methodPath(p.slug) === path);
