import type { Metadata } from "next";
import TShapedMarketerTool from "./TShapedMarketerTool";

export const metadata: Metadata = {
  title: "T-Shaped Marketer Tool | gabriel zamp.",
  description:
    "Interactive editor to map T-shaped marketing breadth and depth skills across foundational and channel expertise.",
};

export default function Page() {
  return <TShapedMarketerTool />;
}
