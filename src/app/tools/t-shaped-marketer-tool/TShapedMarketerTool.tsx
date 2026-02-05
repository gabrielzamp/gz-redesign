"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  BookOpen,
  ChevronDown,
  ChevronUp,
  Download,
  ExternalLink,
  Info,
  Plus,
  Trash2,
  X,
} from "lucide-react";

const INITIAL_DATA = {
  header: {
    title: "T-Shaped",
    highlight: "Marketer",
    subtitle: "Breadth (Top) × Depth (Stem)",
  },
  breadth: {
    foundational: [
      "Management",
      "Marketing",
      "Digital Mktg",
      "Performance",
      "Growth",
      "Branding",
      "Leadership",
      "Info Science",
      "Software Dev",
      "Applied AI",
    ],
    channels: [
      "Google Ads",
      "Meta Ads",
      "TikTok Ads",
      "LinkedIn Ads",
      "YouTube Ads",
      "Display",
      "SEO",
      "Social Media",
      "Email",
      "Content",
      "SMS",
      "Audiences",
    ],
  },
  depth: [
    {
      id: 1,
      category: "Growth Marketing",
      skills: [
        "Building growth process",
        "Identifying channels",
        "Strategy & execution",
        "Lead Gen",
        "SaaS growth",
        "Lifecycle emails",
        "Retention",
        "Funnel analysis",
      ],
    },
    {
      id: 2,
      category: "Data Analytics",
      skills: [
        "GA4 & GTM",
        "Data Viz",
        "Storytelling",
        "Attribution",
        "Product Analytics",
        "SQL",
        "Python Basics",
        "Reporting",
      ],
    },
    {
      id: 3,
      category: "PPC & Paid Media",
      skills: [
        "Campaign Architecture",
        "Keyword Research",
        "Copywriting",
        "Bid Strategy",
        "Budget Pacing",
        "Retargeting",
        "Scaling",
      ],
    },
    {
      id: 4,
      category: "SEO",
      skills: [
        "Technical SEO",
        "On-page",
        "Link building",
        "Gap analysis",
        "Local SEO",
        "Audits",
        "GSC & Screaming Frog",
      ],
    },
    {
      id: 5,
      category: "Leadership",
      skills: [
        "Cross-functional leadership",
        "Stakeholder mgmt",
        "Alignment",
        "Agile / Scrum",
        "Resource allocation",
        "Budget mgmt",
      ],
    },
    {
      id: 6,
      category: "AI Implementation",
      skills: [
        "Prompt engineering",
        "Workflow design",
        "Content generation",
        "Insight extraction",
        "Ad creation",
        "Custom GPTs",
      ],
    },
  ],
};

const InlineInput = ({
  value,
  onSave,
  onCancel,
  className = "",
}: {
  value: string;
  onSave: (val: string) => void;
  onCancel: () => void;
  className?: string;
}) => {
  const [text, setText] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSave(text);
    } else if (e.key === "Escape") {
      onCancel();
    }
  };

  return (
    <input
      ref={inputRef}
      value={text}
      onChange={(e) => setText(e.target.value)}
      onBlur={() => onSave(text)}
      onKeyDown={handleKeyDown}
      className={`outline-none bg-background border border-primary rounded px-1 min-w-[60px] w-full text-foreground ${className}`}
      onClick={(e) => e.stopPropagation()}
    />
  );
};

const InfoModal = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4 print:hidden">
    <div className="bg-background w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col border border-border">
      <div className="bg-secondary/50 border-b border-border p-4 flex justify-between items-center">
        <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-primary" />
          The T-Shaped Marketer Framework
        </h2>
        <button onClick={onClose} className="text-muted-foreground hover:text-foreground p-1 transition-colors">
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="p-6 overflow-y-auto space-y-6 text-slate-600 leading-relaxed">
        <section>
          <h3 className="text-lg font-bold text-slate-800 mb-2">What is a T-Shaped Marketer?</h3>
          <p className="mb-3">
            A T-shaped marketer is a &quot;Jack of all trades, master of some.&quot; The concept, popularized in marketing by CXL and others,
            visualizes skills as the letter <strong>T</strong>:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong className="text-sky-700">The Horizontal Bar (Breadth):</strong> Represents broad, cross-functional knowledge across
              the entire marketing discipline (e.g., Content, Data, UX, Branding). This allows for better collaboration and strategic
              oversight.
            </li>
            <li>
              <strong className="text-sky-700">The Vertical Bar (Depth):</strong> Represents deep, expert-level proficiency in 2–3 specific
              verticals (e.g., SEO, PPC, or Analytics).
            </li>
          </ul>
        </section>

        <section className="bg-sky-50 p-4 rounded-lg border border-sky-100">
          <h3 className="text-lg font-bold text-sky-900 mb-2">Why T-Shaped?</h3>
          <p className="text-sm">
            In modern marketing, rapid changes (like algorithm updates) and complex customer journeys make single-specialty roles rigid.
            T-shaped marketers offer:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-3">
            <div className="bg-white p-3 rounded border border-sky-100 shadow-sm">
              <strong className="block text-sky-800 mb-1">Adaptability</strong>
              <span className="text-xs">Quickly pivot between strategies and tools as the market shifts.</span>
            </div>
            <div className="bg-white p-3 rounded border border-sky-100 shadow-sm">
              <strong className="block text-sky-800 mb-1">Collaboration</strong>
              <span className="text-xs">Bridge gaps between specialists (e.g., designers & analysts).</span>
            </div>
            <div className="bg-white p-3 rounded border border-sky-100 shadow-sm">
              <strong className="block text-sky-800 mb-1">Problem Solving</strong>
              <span className="text-xs">Diagnose systemic issues across the entire funnel, not just one channel.</span>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-lg font-bold text-slate-800 mb-2">How to use this tool</h3>
          <p className="text-sm">
            Use the editor to map your own profile. <strong>Top Bar:</strong> List skills where you have working knowledge.
            <strong> Stem:</strong> Build out the deep pillars where you are an expert.
          </p>
        </section>

        <div className="pt-4 border-t border-slate-100 text-xs text-slate-400 flex items-center gap-1">
          Source methodology adapted from
          <a
            href="https://cxl.com/blog/t-shaped-marketer/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-600 hover:underline flex items-center gap-0.5"
          >
            CXL <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default function TShapedMarketerToolPage() {
  const [data, setData] = useState(INITIAL_DATA);
  const [editing, setEditing] = useState<
    | { type: "breadth"; subType: "foundational" | "channels"; index: number }
    | { type: "depth"; categoryId: number; field: "category" }
    | { type: "depth"; categoryId: number; index: number; field: "skill" }
    | null
  >(null);
  const [showInfo, setShowInfo] = useState(false);

  const moveItem = <T,>(array: T[], fromIndex: number, toIndex: number) => {
    if (toIndex < 0 || toIndex >= array.length) return array;
    const newArray = [...array];
    const [movedItem] = newArray.splice(fromIndex, 1);
    newArray.splice(toIndex, 0, movedItem);
    return newArray;
  };

  const handleHeaderChange = (field: "title" | "highlight" | "subtitle", value: string) => {
    setData((prev) => ({ ...prev, header: { ...prev.header, [field]: value } }));
  };

  const addBreadthItem = (type: "foundational" | "channels") => {
    const newItem = "New Skill";
    setData((prev) => ({
      ...prev,
      breadth: {
        ...prev.breadth,
        [type]: [...prev.breadth[type], newItem],
      },
    }));
    setTimeout(() => {
      setEditing({ type: "breadth", subType: type, index: data.breadth[type].length });
    }, 10);
  };

  const saveBreadthItem = (type: "foundational" | "channels", index: number, newValue: string) => {
    if (!newValue.trim()) return removeBreadthItem(type, index);
    setData((prev) => ({
      ...prev,
      breadth: {
        ...prev.breadth,
        [type]: prev.breadth[type].map((item, i) => (i === index ? newValue : item)),
      },
    }));
    setEditing(null);
  };

  const removeBreadthItem = (type: "foundational" | "channels", index: number) => {
    setData((prev) => ({
      ...prev,
      breadth: {
        ...prev.breadth,
        [type]: prev.breadth[type].filter((_, i) => i !== index),
      },
    }));
  };

  const moveBreadthItem = (type: "foundational" | "channels", index: number, direction: number) => {
    setData((prev) => ({
      ...prev,
      breadth: {
        ...prev.breadth,
        [type]: moveItem(prev.breadth[type], index, index + direction),
      },
    }));
  };

  const addDepthCategory = () => {
    const newId = Date.now();
    setData((prev) => ({
      ...prev,
      depth: [...prev.depth, { id: newId, category: "New Category", skills: ["New Skill"] }],
    }));
  };

  const removeDepthCategory = (id: number) => {
    if (window.confirm("Delete this entire category?")) {
      setData((prev) => ({
        ...prev,
        depth: prev.depth.filter((cat) => cat.id !== id),
      }));
    }
  };

  const saveDepthCategoryName = (id: number, newName: string) => {
    if (!newName.trim()) return;
    setData((prev) => ({
      ...prev,
      depth: prev.depth.map((cat) => (cat.id === id ? { ...cat, category: newName } : cat)),
    }));
    setEditing(null);
  };

  const moveDepthCategory = (index: number, direction: number) => {
    setData((prev) => ({
      ...prev,
      depth: moveItem(prev.depth, index, index + direction),
    }));
  };

  const addDepthSkill = (catId: number) => {
    setData((prev) => ({
      ...prev,
      depth: prev.depth.map((cat) =>
        cat.id === catId ? { ...cat, skills: [...cat.skills, "New Skill"] } : cat,
      ),
    }));
  };

  const saveDepthSkill = (catId: number, skillIndex: number, newValue: string) => {
    if (!newValue.trim()) return removeDepthSkill(catId, skillIndex);
    setData((prev) => ({
      ...prev,
      depth: prev.depth.map((cat) =>
        cat.id === catId
          ? { ...cat, skills: cat.skills.map((s, i) => (i === skillIndex ? newValue : s)) }
          : cat,
      ),
    }));
    setEditing(null);
  };

  const removeDepthSkill = (catId: number, skillIndex: number) => {
    setData((prev) => ({
      ...prev,
      depth: prev.depth.map((cat) =>
        cat.id === catId ? { ...cat, skills: cat.skills.filter((_, i) => i !== skillIndex) } : cat,
      ),
    }));
  };

  const moveDepthSkill = (catId: number, skillIndex: number, direction: number) => {
    setData((prev) => ({
      ...prev,
      depth: prev.depth.map((cat) => {
        if (cat.id !== catId) return cat;
        return {
          ...cat,
          skills: moveItem(cat.skills, skillIndex, skillIndex + direction),
        };
      }),
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="min-h-screen bg-secondary/30 flex flex-col md:flex-row font-sans pt-0">
      {showInfo && <InfoModal onClose={() => setShowInfo(false)} />}

      <div className="w-full md:w-1/3 lg:w-1/4 bg-background border-r border-border h-auto md:h-screen overflow-y-auto p-4 print:hidden shadow-xl z-50">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            
            Builder
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => setShowInfo(true)}
              className="flex items-center gap-2 bg-secondary text-secondary-foreground border border-border px-3 py-1.5 rounded-lg text-sm hover:bg-secondary/80 transition-colors"
              title="About T-Shaped Marketer"
            >
              <Info className="w-4 h-4" />
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 bg-primary text-primary-foreground px-3 py-1.5 rounded-lg text-sm hover:bg-primary/90 transition-colors"
              title="Download PDF"
            >
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="space-y-8">
          <section className="space-y-3">
            <h3 className="text-xs font-bold uppercase text-slate-400 tracking-wider">Header Info</h3>
            <input
              className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-sky-500 outline-none"
              value={data.header.title}
              onChange={(e) => handleHeaderChange("title", e.target.value)}
              placeholder="Main Title (e.g. T-Shaped)"
            />
            <input
              className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-sky-500 outline-none"
              value={data.header.highlight}
              onChange={(e) => handleHeaderChange("highlight", e.target.value)}
              placeholder="Highlight (e.g. Marketer)"
            />
            <input
              className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-sky-500 outline-none"
              value={data.header.subtitle}
              onChange={(e) => handleHeaderChange("subtitle", e.target.value)}
              placeholder="Subtitle"
            />
          </section>

          <section className="space-y-3">
            <h3 className="text-xs font-bold uppercase text-slate-400 tracking-wider flex justify-between items-center">
              Top Bar (Breadth)
            </h3>

            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-semibold text-sky-700">Foundational</span>
                <button
                  onClick={() => addBreadthItem("foundational")}
                  className="text-sky-600 hover:bg-sky-100 p-1 rounded"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
              <div className="flex flex-col gap-2">
                {data.breadth.foundational.map((item, idx) => {
                  const isEditing =
                    editing?.type === "breadth" &&
                    editing?.subType === "foundational" &&
                    editing?.index === idx;
                  return (
                    <div
                      key={item + idx}
                      className="group flex items-center justify-between bg-white border border-sky-100 px-2 py-1.5 rounded text-xs text-slate-600"
                    >
                      <div className="flex items-center gap-2 w-full">
                        <div className="flex flex-col gap-0.5 text-slate-300 opacity-50 hover:opacity-100">
                          <button
                            onClick={() => moveBreadthItem("foundational", idx, -1)}
                            disabled={idx === 0}
                            className="hover:text-sky-600 disabled:opacity-30"
                          >
                            <ChevronUp className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => moveBreadthItem("foundational", idx, 1)}
                            disabled={idx === data.breadth.foundational.length - 1}
                            className="hover:text-sky-600 disabled:opacity-30"
                          >
                            <ChevronDown className="w-3 h-3" />
                          </button>
                        </div>

                        {isEditing ? (
                          <InlineInput
                            value={item}
                            onSave={(val) => saveBreadthItem("foundational", idx, val)}
                            onCancel={() => setEditing(null)}
                          />
                        ) : (
                          <span
                            onClick={() => setEditing({ type: "breadth", subType: "foundational", index: idx })}
                            className="cursor-pointer hover:text-sky-600 hover:underline flex-1"
                            title="Click to edit"
                          >
                            {item}
                          </span>
                        )}
                      </div>
                      {!isEditing && (
                        <button
                          onClick={() => removeBreadthItem("foundational", idx)}
                          className="text-red-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-semibold text-amber-700">Channels</span>
                <button onClick={() => addBreadthItem("channels")} className="text-amber-600 hover:bg-amber-100 p-1 rounded">
                  <Plus className="w-3 h-3" />
                </button>
              </div>
              <div className="flex flex-col gap-2">
                {data.breadth.channels.map((item, idx) => {
                  const isEditing =
                    editing?.type === "breadth" && editing?.subType === "channels" && editing?.index === idx;
                  return (
                    <div
                      key={item + idx}
                      className="group flex items-center justify-between bg-white border border-amber-100 px-2 py-1.5 rounded text-xs text-slate-600"
                    >
                      <div className="flex items-center gap-2 w-full">
                        <div className="flex flex-col gap-0.5 text-slate-300 opacity-50 hover:opacity-100">
                          <button
                            onClick={() => moveBreadthItem("channels", idx, -1)}
                            disabled={idx === 0}
                            className="hover:text-amber-600 disabled:opacity-30"
                          >
                            <ChevronUp className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => moveBreadthItem("channels", idx, 1)}
                            disabled={idx === data.breadth.channels.length - 1}
                            className="hover:text-amber-600 disabled:opacity-30"
                          >
                            <ChevronDown className="w-3 h-3" />
                          </button>
                        </div>

                        {isEditing ? (
                          <InlineInput
                            value={item}
                            onSave={(val) => saveBreadthItem("channels", idx, val)}
                            onCancel={() => setEditing(null)}
                          />
                        ) : (
                          <span
                            onClick={() => setEditing({ type: "breadth", subType: "channels", index: idx })}
                            className="cursor-pointer hover:text-amber-600 hover:underline flex-1"
                            title="Click to edit"
                          >
                            {item}
                          </span>
                        )}
                      </div>
                      {!isEditing && (
                        <button
                          onClick={() => removeBreadthItem("channels", idx)}
                          className="text-red-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="text-xs font-bold uppercase text-slate-400 tracking-wider">Stem (Depth)</h3>
              <button onClick={addDepthCategory} className="text-xs flex items-center gap-1 text-sky-600 hover:underline">
                <Plus className="w-3 h-3" /> Add Category
              </button>
            </div>

            <div className="space-y-3">
              {data.depth.map((cat, catIdx) => (
                <div key={cat.id} className="bg-white border border-slate-200 rounded-lg p-3 shadow-sm group">
                  <div className="flex justify-between items-center mb-2 border-b border-slate-100 pb-2">
                    <div className="flex items-center gap-2 flex-1">
                      <div className="flex flex-col gap-0.5 text-slate-300 mr-1">
                        <button
                          onClick={() => moveDepthCategory(catIdx, -1)}
                          disabled={catIdx === 0}
                          className="hover:text-sky-600 disabled:opacity-30"
                        >
                          <ChevronUp className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => moveDepthCategory(catIdx, 1)}
                          disabled={catIdx === data.depth.length - 1}
                          className="hover:text-sky-600 disabled:opacity-30"
                        >
                          <ChevronDown className="w-3 h-3" />
                        </button>
                      </div>

                      {editing?.type === "depth" &&
                      "field" in editing &&
                      editing.categoryId === cat.id &&
                      editing.field === "category" ? (
                        <InlineInput
                          value={cat.category}
                          onSave={(val) => saveDepthCategoryName(cat.id, val)}
                          onCancel={() => setEditing(null)}
                          className="font-semibold text-sm"
                        />
                      ) : (
                        <span
                          onClick={() => setEditing({ type: "depth", categoryId: cat.id, field: "category" })}
                          className="font-semibold text-sm text-slate-700 w-full cursor-pointer hover:text-sky-600 hover:bg-slate-50 px-1 rounded truncate"
                        >
                          {cat.category}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1 ml-2">
                      <button onClick={() => addDepthSkill(cat.id)} className="p-1 hover:bg-slate-100 rounded text-sky-500">
                        <Plus className="w-3 h-3" />
                      </button>
                      <button onClick={() => removeDepthCategory(cat.id)} className="p-1 hover:bg-red-50 rounded text-red-400">
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  <div className="space-y-1">
                    {cat.skills.map((skill, idx) => {
                      const isEditing =
                        editing?.type === "depth" &&
                        "index" in editing &&
                        editing.categoryId === cat.id &&
                        editing.index === idx &&
                        editing.field === "skill";
                      return (
                        <div
                          key={skill + idx}
                          className="flex justify-between items-center text-xs text-slate-500 hover:bg-slate-50 p-1 rounded group/skill"
                        >
                          <div className="flex items-center gap-2 w-full">
                            <div className="flex flex-col gap-0 text-slate-300 opacity-0 group-hover/skill:opacity-100 transition-opacity">
                              <button
                                onClick={() => moveDepthSkill(cat.id, idx, -1)}
                                disabled={idx === 0}
                                className="hover:text-sky-600 disabled:opacity-30 -mb-1"
                              >
                                <ChevronUp className="w-3 h-3" />
                              </button>
                              <button
                                onClick={() => moveDepthSkill(cat.id, idx, 1)}
                                disabled={idx === cat.skills.length - 1}
                                className="hover:text-sky-600 disabled:opacity-30"
                              >
                                <ChevronDown className="w-3 h-3" />
                              </button>
                            </div>

                            {isEditing ? (
                              <InlineInput
                                value={skill}
                                onSave={(val) => saveDepthSkill(cat.id, idx, val)}
                                onCancel={() => setEditing(null)}
                              />
                            ) : (
                              <span
                                onClick={() =>
                                  setEditing({ type: "depth", categoryId: cat.id, index: idx, field: "skill" })
                                }
                                className="cursor-pointer hover:text-sky-600 hover:underline w-full"
                                title="Click to edit"
                              >
                                {skill}
                              </span>
                            )}
                          </div>
                          {!isEditing && (
                            <button
                              onClick={() => removeDepthSkill(cat.id, idx)}
                              className="text-red-300 hover:text-red-500 opacity-0 group-hover/skill:opacity-100"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <div className="flex-1 bg-slate-50 md:h-screen md:overflow-y-auto p-4 md:p-8 print:p-0 print:bg-white print:overflow-visible print:h-auto">
        <div className="bg-white shadow-xl rounded-xl print:shadow-none min-h-full p-8 print:p-0 max-w-[1200px] mx-auto scale-[0.85] md:scale-100 origin-top flex flex-col justify-between">
          <div className="mx-auto w-full flex flex-col items-center relative font-sans text-slate-900">
            <header className="text-center mb-8 z-10 print:mb-6">
              <h1 className="text-4xl font-bold tracking-tight text-slate-800">
                {data.header.title} <span className="text-sky-600">{data.header.highlight}</span>
              </h1>
              <p className="mt-2 text-sm text-slate-500">{data.header.subtitle}</p>
            </header>

            <section className="w-full relative z-20">
              <div className="rounded-xl border border-slate-300 bg-white shadow-lg p-6 space-y-6 print:shadow-none print:border-slate-800">
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <span className="text-[0.65rem] tracking-[0.2em] uppercase text-slate-400 font-bold whitespace-nowrap">
                      Foundational
                    </span>
                    <div className="h-px bg-slate-100 flex-1"></div>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2">
                    {data.breadth.foundational.map((item, i) => (
                      <div
                        key={item + i}
                        className="rounded border border-sky-100 bg-sky-50 px-2 py-1.5 text-[0.7rem] text-center font-medium text-slate-600 print:border-slate-200 print:bg-slate-50"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <span className="text-[0.65rem] tracking-[0.2em] uppercase text-slate-400 font-bold whitespace-nowrap">Channels</span>
                    <div className="h-px bg-slate-100 flex-1"></div>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2">
                    {data.breadth.channels.map((item, i) => (
                      <div
                        key={item + i}
                        className="rounded border border-amber-100 bg-amber-50 px-2 py-1.5 text-[0.7rem] text-center font-medium text-slate-600 print:border-slate-200 print:bg-slate-50"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-slate-50 border border-slate-300 rounded-full flex items-center justify-center z-30 shadow-sm print:hidden">
                <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
              </div>
            </section>

            <div className="absolute top-[250px] bottom-0 left-1/2 w-px border-r-2 border-dashed border-slate-300 -translate-x-1/2 z-0 print:border-slate-400"></div>

            <section className="w-full max-w-4xl relative z-10 pt-12 pb-12 print:pt-6">
              <div className="grid gap-6 grid-cols-1 md:grid-cols-2 items-start">
                {data.depth.map((cat) => (
                  <div
                    key={cat.id}
                    className="flex flex-col rounded-lg border border-slate-200 bg-white p-4 shadow-sm break-inside-avoid print:shadow-none print:border-slate-300"
                  >
                    <h2 className="text-sm font-bold text-slate-800 mb-3 border-b border-slate-100 pb-2 print:border-slate-300">
                      {cat.category}
                    </h2>

                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((skill, sIdx) => (
                        <span
                          key={skill + sIdx}
                          className="bg-slate-50 border border-slate-200 text-slate-600 rounded px-2 py-1 text-[0.7rem] print:bg-white print:border-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="text-center mt-12 mb-4 pt-4 border-t border-slate-200">
            <p className="text-xs text-slate-400 flex items-center justify-center gap-1">
              Methodology adapted from
              <a
                href="https://cxl.com/blog/t-shaped-marketer/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 hover:underline flex items-center gap-0.5"
              >
                CXL&apos;s T-Shaped Marketer Framework <ExternalLink className="w-3 h-3" />
              </a>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media print {
          @page { size: portrait; margin: 1cm; }
          body { background: white; }
          .print\\:hidden { display: none !important; }
        }
      `}</style>
    </main>
  );
}
