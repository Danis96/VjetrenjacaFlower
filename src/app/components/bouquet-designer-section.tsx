import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Minus, Plus, RotateCcw, RotateCw, Sparkles, X } from "lucide-react";
import type { AppContent } from "../content";

type BouquetDesignerSectionProps = {
  content: AppContent;
};

type BouquetPlacement = {
  id: number;
  optionIndex: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  zIndex: number;
};

type DragState =
  | {
      source: "palette";
      optionIndex: number;
      pointerId: number;
      clientX: number;
      clientY: number;
    }
  | {
      source: "bouquet";
      optionIndex: number;
      flowerId: number;
      pointerId: number;
      clientX: number;
      clientY: number;
    };

type FlowerPalette = {
  outer: string;
  middle: string;
  center: string;
  stem: string;
  leaf: string;
  shadow: string;
};

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

const BOUQUET_HEIGHT = 700;
const FLOWER_SIZE = 92;
const FLOWER_HEIGHT = 172;
const MAX_SELECTED_OPTIONS = 4;

const flowerPalettes: FlowerPalette[] = [
  { outer: "#f2dbe4", middle: "#f7c6d4", center: "#d36d93", stem: "#648761", leaf: "#a5c891", shadow: "rgba(132, 82, 108, 0.18)" },
  { outer: "#ffdcd2", middle: "#ffb8a0", center: "#f08361", stem: "#6b8b5e", leaf: "#b9d69e", shadow: "rgba(161, 106, 81, 0.18)" },
  { outer: "#ddeadd", middle: "#c7ddc0", center: "#7ca26f", stem: "#567a55", leaf: "#97bf8f", shadow: "rgba(92, 127, 96, 0.18)" },
  { outer: "#f4e5cf", middle: "#ead4a2", center: "#bd9552", stem: "#7e7156", leaf: "#d8c48e", shadow: "rgba(148, 122, 79, 0.2)" }
];

function getStagePoint(clientX: number, clientY: number, rect: DOMRect | null) {
  if (!rect) {
    return null;
  }

  return {
    x: clamp(clientX - rect.left, FLOWER_SIZE * 0.45, rect.width - FLOWER_SIZE * 0.45),
    y: clamp(clientY - rect.top, FLOWER_SIZE * 0.42, rect.height - FLOWER_SIZE * 0.22)
  };
}

function buildPlacement(optionIndex: number, x: number, y: number, sequence: number): BouquetPlacement {
  const spread = optionIndex * 11 + sequence * 7;

  return {
    id: sequence,
    optionIndex,
    x,
    y,
    rotation: -18 + (spread % 36),
    scale: 0.96 + ((optionIndex + sequence) % 4) * 0.045,
    zIndex: sequence + 1
  };
}

export function BouquetDesignerSection({ content }: BouquetDesignerSectionProps) {
  const { designer } = content;
  const [placements, setPlacements] = useState<BouquetPlacement[]>([]);
  const [dragState, setDragState] = useState<DragState | null>(null);
  const [dragPoint, setDragPoint] = useState<{ x: number; y: number } | null>(null);
  const [isOverStage, setIsOverStage] = useState(false);
  const [nextId, setNextId] = useState(1);
  const [selectedFlowerId, setSelectedFlowerId] = useState<number | null>(null);
  const [selectedFinishId, setSelectedFinishId] = useState<string>(designer.finishes[0]?.id ?? "none");
  const [selectedOptionIndices, setSelectedOptionIndices] = useState<number[]>([]);
  const stageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!dragState) {
      return;
    }

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerId !== dragState.pointerId) {
        return;
      }

      const stageRect = stageRef.current?.getBoundingClientRect() ?? null;
      const point = getStagePoint(event.clientX, event.clientY, stageRect);

      setDragState((current) =>
        current && current.pointerId === event.pointerId
          ? { ...current, clientX: event.clientX, clientY: event.clientY }
          : current
      );
      setDragPoint(point);

      if (!stageRect) {
        setIsOverStage(false);
        return;
      }

      const withinStage =
        event.clientX >= stageRect.left &&
        event.clientX <= stageRect.right &&
        event.clientY >= stageRect.top &&
        event.clientY <= stageRect.bottom;

      setIsOverStage(withinStage);
    };

    const handlePointerUp = (event: PointerEvent) => {
      if (event.pointerId !== dragState.pointerId) {
        return;
      }

      const stageRect = stageRef.current?.getBoundingClientRect() ?? null;
      const point = getStagePoint(event.clientX, event.clientY, stageRect);
      const droppedInside =
        Boolean(stageRect) &&
        event.clientX >= (stageRect?.left ?? 0) &&
        event.clientX <= (stageRect?.right ?? 0) &&
        event.clientY >= (stageRect?.top ?? 0) &&
        event.clientY <= (stageRect?.bottom ?? 0);

      if (dragState.source === "palette" && droppedInside && point) {
        const placement = buildPlacement(dragState.optionIndex, point.x, point.y, nextId);
        setPlacements((current) => [...current, placement]);
        setSelectedFlowerId(placement.id);
        setNextId((current) => current + 1);
      }

      if (dragState.source === "bouquet") {
        setPlacements((current) =>
          current.map((flower) =>
            flower.id === dragState.flowerId && point
              ? { ...flower, x: point.x, y: point.y, zIndex: current.length + 1 }
              : flower
          )
        );
      }

      setDragState(null);
      setDragPoint(null);
      setIsOverStage(false);
    };

    const handlePointerCancel = (event: PointerEvent) => {
      if (event.pointerId !== dragState.pointerId) {
        return;
      }

      setDragState(null);
      setDragPoint(null);
      setIsOverStage(false);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", handlePointerCancel);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerCancel);
    };
  }, [dragState, nextId]);

  const activeOption =
    dragState?.source === "palette"
      ? designer.options[dragState.optionIndex]
      : dragState?.source === "bouquet"
        ? designer.options[dragState.optionIndex]
        : null;
  const activePlacement =
    dragState?.source === "bouquet"
      ? placements.find((flower) => flower.id === dragState.flowerId) ?? null
      : null;
  const selectedOptions = selectedOptionIndices
    .map((optionIndex) => ({ optionIndex, option: designer.options[optionIndex] }))
    .filter(({ option }) => Boolean(option));
  const selectedFinish = designer.finishes.find((finish) => finish.id === selectedFinishId) ?? designer.finishes[0];
  const selectedFlower = placements.find((flower) => flower.id === selectedFlowerId) ?? null;
  const flowersSubtotal = placements.reduce((sum, flower) => sum + designer.options[flower.optionIndex].price, 0);
  const estimatedTotal = designer.basePriceValue + flowersSubtotal + selectedFinish.price;
  const arrangementCounts = placements.reduce<Record<string, number>>((counts, flower) => {
    const label = designer.options[flower.optionIndex].label;
    counts[label] = (counts[label] ?? 0) + 1;
    return counts;
  }, {});
  const flowerSummary =
    Object.entries(arrangementCounts)
      .map(([label, count]) => `${label} x${count}`)
      .join(", ") || "-";
  const orderBody = [
    designer.orderIntro,
    "",
    `${designer.orderBaseLine}: ${designer.basePriceValue} KM`,
    `${designer.orderFlowersLine}: ${flowerSummary}`,
    `${designer.orderFinishLine}: ${selectedFinish.label} (${selectedFinish.price} KM)`,
    `${designer.orderTotalLine}: ${estimatedTotal} KM`,
    "",
    designer.orderClosing
  ].join("\n");
  const quickOrderHref = `mailto:info@vjetrenjaca.ba?subject=${encodeURIComponent(designer.orderSubject)}&body=${encodeURIComponent(orderBody)}`;

  const rotateSelectedFlower = (delta: number) => {
    if (!selectedFlowerId) {
      return;
    }

    setPlacements((current) =>
      current.map((flower) =>
        flower.id === selectedFlowerId
          ? { ...flower, rotation: clamp(flower.rotation + delta, -180, 180), zIndex: current.length + 1 }
          : flower
      )
    );
  };

  const resizeSelectedFlower = (delta: number) => {
    if (!selectedFlowerId) {
      return;
    }

    setPlacements((current) =>
      current.map((flower) =>
        flower.id === selectedFlowerId
          ? { ...flower, scale: clamp(flower.scale + delta, 0.8, 1.55), zIndex: current.length + 1 }
          : flower
      )
    );
  };

  const toggleOptionSelection = (optionIndex: number) => {
    setSelectedOptionIndices((current) => {
      if (current.includes(optionIndex)) {
        return current.filter((index) => index !== optionIndex);
      }

      if (current.length >= MAX_SELECTED_OPTIONS) {
        return current;
      }

      return [...current, optionIndex];
    });
  };

  return (
    <section id="design-your-bouquet" className="relative px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-[#fffaf7]/90 p-6 shadow-[0_24px_80px_rgba(121,94,108,0.12)] backdrop-blur dark:border-white/10 dark:bg-[#221d22]/90 sm:p-8 md:p-10"
        >
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-r from-[#f7d9e3]/60 via-[#fff7f2] to-[#e5f0df]/70 dark:from-[#5d3f50]/45 dark:via-[#221d22] dark:to-[#384936]/35" />
          <div className="relative">
            <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
              <div className="max-w-3xl">
                <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#e8d5db] bg-white/70 px-3 py-2 text-[10px] uppercase tracking-[0.22em] text-[#7b6871] dark:border-white/10 dark:bg-white/6 dark:text-[#dcc8d1] sm:px-4 sm:text-xs sm:tracking-[0.28em]">
                  <Sparkles className="h-4 w-4" />
                  {designer.badge}
                </span>
                <h2 className="mt-6 max-w-3xl text-4xl leading-none text-[#2d2d2d] dark:text-[#f6edf0] sm:text-5xl md:text-6xl">
                  {designer.title}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-[#5f5960] dark:text-[#cabec5] md:text-lg">
                  {designer.description}
                </p>
              </div>

              <div className="flex max-w-xl flex-wrap gap-3 xl:justify-end">
                {designer.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#f8e8ee] px-4 py-2 text-sm text-[#755d69] dark:bg-[#352932] dark:text-[#ead9e0]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {designer.steps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-[1.75rem] border border-[#ead9de] bg-white/80 p-5 dark:border-white/10 dark:bg-white/6"
                >
                  <p className="text-sm uppercase tracking-[0.25em] text-[#9f8d96] dark:text-[#bca8b2]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 text-2xl text-[#2d2d2d] dark:text-[#f6edf0]">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#645d63] dark:text-[#ccbfc7]">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.82, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2rem] border border-[#e9d8dd] bg-[#fff4ef] p-5 shadow-[0_24px_80px_rgba(121,94,108,0.12)] dark:border-white/10 dark:bg-[#241f25] sm:p-7"
        >
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-[#f7d9e3]/30 via-transparent to-[#e5f0df]/35 dark:from-[#5d3f50]/25 dark:to-[#384936]/18" />
          <div className="relative">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.22em] text-[#8d727e] dark:text-[#bfaab4]">
                  {designer.catalogEyebrow}
                </p>
                <h3 className="mt-2 text-2xl text-[#2d2d2d] dark:text-[#f6edf0] sm:text-3xl">{designer.catalogTitle}</h3>
                <p className="mt-3 text-sm leading-6 text-[#6c6469] dark:text-[#cbbec5]">{designer.catalogHint}</p>
              </div>
              <div className="shrink-0 rounded-full bg-[#f8e8ee] px-4 py-2 text-xs uppercase tracking-[0.16em] text-[#7f6471] dark:bg-[#352932] dark:text-[#ead9e0]">
                {selectedOptionIndices.length}/{MAX_SELECTED_OPTIONS} {designer.catalogSelectedLabel}
              </div>
            </div>

            <div className="mt-6 flex gap-4 overflow-x-auto pb-2">
              {designer.options.map((option, index) => {
                const Icon = option.icon;
                const isSelected = selectedOptionIndices.includes(index);
                const isDisabled = !isSelected && selectedOptionIndices.length >= MAX_SELECTED_OPTIONS;

                return (
                  <button
                    key={option.label}
                    type="button"
                    onClick={() => toggleOptionSelection(index)}
                    disabled={isDisabled}
                    className={`group min-w-[270px] max-w-[270px] overflow-hidden rounded-[1.6rem] border text-left transition-all ${
                      isSelected
                        ? "border-[#c793a7] bg-[#fff7fb] shadow-[0_18px_40px_rgba(121,94,108,0.12)] dark:border-[#f2cfd9] dark:bg-[#332833]"
                        : isDisabled
                          ? "cursor-not-allowed border-white/40 bg-white/50 opacity-55 dark:border-white/10 dark:bg-white/5"
                          : "border-white/70 bg-white/80 hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-white/6 dark:hover:bg-white/10"
                    }`}
                  >
                    <div className="relative h-40 overflow-hidden">
                      <img src={option.image} alt={option.imageAlt} className="h-full w-full object-cover" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1c1519]/78 via-[#1c1519]/18 to-transparent" />
                      <div className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/78 text-[#6f5965] shadow-lg dark:bg-[#2f2630]/82 dark:text-[#f6edf0]">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="absolute right-3 top-3 rounded-full bg-[#2d232a]/72 px-3 py-1 text-[11px] uppercase tracking-[0.15em] text-white">
                        {option.price} KM
                      </div>
                      <div className="absolute inset-x-4 bottom-4">
                        <h4 className="text-xl text-white">{option.label}</h4>
                        <p className="mt-1 text-sm text-white/82">{option.note}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-3 p-4">
                      <span className="text-xs uppercase tracking-[0.18em] text-[#8d727e] dark:text-[#bfaab4]">
                        {designer.catalogMaxLabel}
                      </span>
                      <span
                        className={`rounded-full px-3 py-1 text-xs uppercase tracking-[0.16em] ${
                          isSelected
                            ? "bg-[#f1d7e0] text-[#7c5e6b] dark:bg-[#513844] dark:text-[#f6dbe4]"
                            : "bg-[#f8e8ee] text-[#7f6471] dark:bg-[#352932] dark:text-[#ead9e0]"
                        }`}
                      >
                        {isSelected ? designer.selectedFlowerCta : designer.selectFlowerCta}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.5fr)_minmax(320px,0.72fr)] xl:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.82, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[2rem] border border-[#e9d8dd] bg-[#fff4ef] p-5 shadow-[0_24px_80px_rgba(121,94,108,0.12)] dark:border-white/10 dark:bg-[#241f25] sm:p-7"
          >
            <div className="grid gap-6 2xl:grid-cols-[minmax(280px,0.66fr)_minmax(0,1.34fr)]">
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-[#8d727e] dark:text-[#bfaab4]">
                      {designer.studioEyebrow}
                    </p>
                    <h3 className="mt-3 text-3xl leading-none text-[#2d2d2d] dark:text-[#f6edf0]">
                      {designer.studioTitle}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setPlacements([]);
                      setSelectedFlowerId(null);
                    }}
                    className="rounded-full border border-[#dfc4cd] bg-white/80 px-4 py-2 text-sm text-[#6f5965] transition-colors hover:bg-white dark:border-white/10 dark:bg-white/6 dark:text-[#ead6de] dark:hover:bg-white/10"
                  >
                    {designer.resetCta}
                  </button>
                </div>

                <p className="mt-4 text-sm leading-6 text-[#6c6469] dark:text-[#cbbec5]">{designer.dragHint}</p>

                <div className="mt-5 rounded-[1.5rem] border border-white/60 bg-white/70 p-4 dark:border-white/10 dark:bg-white/6">
                  <p className="text-xs uppercase tracking-[0.22em] text-[#8d727e] dark:text-[#bfaab4]">
                    {designer.draggableEyebrow}
                  </p>
                  <h4 className="mt-2 text-xl text-[#2d2d2d] dark:text-[#f6edf0]">{designer.draggableTitle}</h4>
                  <p className="mt-2 text-sm leading-6 text-[#6c6469] dark:text-[#cbbec5]">{designer.draggableHint}</p>

                  {selectedOptions.length > 0 ? (
                    <div className="mt-4 grid gap-3 sm:grid-cols-2 2xl:grid-cols-1">
                      {selectedOptions.map(({ option, optionIndex }) => {
                        const Icon = option.icon;
                        const isDraggingPaletteItem = dragState?.source === "palette" && dragState.optionIndex === optionIndex;

                        return (
                          <button
                            key={`${option.label}-${optionIndex}`}
                            type="button"
                            onPointerDown={(event) => {
                              event.preventDefault();
                              (event.currentTarget as HTMLButtonElement).setPointerCapture(event.pointerId);
                              setDragState({
                                source: "palette",
                                optionIndex,
                                pointerId: event.pointerId,
                                clientX: event.clientX,
                                clientY: event.clientY
                              });
                              setDragPoint(
                                getStagePoint(
                                  event.clientX,
                                  event.clientY,
                                  stageRef.current?.getBoundingClientRect() ?? null
                                )
                              );
                            }}
                            className={`group flex touch-none items-center gap-4 rounded-[1.5rem] border px-4 py-4 text-left transition-all ${
                              isDraggingPaletteItem
                                ? "border-[#c793a7] bg-white shadow-lg dark:border-[#f2cfd9]"
                                : "border-white/70 bg-white/80 hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-white/6 dark:hover:bg-white/10"
                            }`}
                          >
                            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-[1.1rem]">
                              <img src={option.image} alt={option.imageAlt} className="h-full w-full object-cover" loading="lazy" />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#1c1519]/38 to-transparent" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f7d9e3] text-[#6f5965] dark:bg-[#352932] dark:text-[#ead6de]">
                                  <Icon className="h-4 w-4" />
                                </div>
                                <div className="min-w-0">
                                  <h4 className="truncate text-lg text-[#2d2d2d] dark:text-[#f6edf0]">{option.label}</h4>
                                  <p className="truncate text-sm text-[#6c6469] dark:text-[#cbbec5]">{option.note}</p>
                                </div>
                              </div>
                              <div className="mt-3 flex items-center justify-between gap-3">
                                <span className="rounded-full bg-[#f8e8ee] px-3 py-1 text-xs uppercase tracking-[0.18em] text-[#7f6471] dark:bg-[#352932] dark:text-[#ead9e0]">
                                  {designer.dragAction}
                                </span>
                                <span className="text-sm text-[#7a6570] dark:text-[#dbc9d1]">{option.price} KM</span>
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="mt-4 rounded-[1.25rem] border border-dashed border-[#dfc7ce] bg-white/40 px-4 py-5 text-sm leading-6 text-[#6c6469] dark:border-white/10 dark:bg-white/5 dark:text-[#cbbec5]">
                      {designer.draggableEmpty}
                    </p>
                  )}
                </div>

                <div className="mt-5 rounded-[1.5rem] border border-white/60 bg-white/70 p-4 dark:border-white/10 dark:bg-white/6">
                  <p className="text-xs uppercase tracking-[0.22em] text-[#8d727e] dark:text-[#bfaab4]">
                    {designer.finishEyebrow}
                  </p>
                  <h4 className="mt-2 text-xl text-[#2d2d2d] dark:text-[#f6edf0]">{designer.finishTitle}</h4>
                  <p className="mt-2 text-sm leading-6 text-[#6c6469] dark:text-[#cbbec5]">{designer.finishHint}</p>

                  <div className="mt-4 grid gap-3">
                    {designer.finishes.map((finish) => {
                      const isActive = finish.id === selectedFinishId;
                      return (
                        <button
                          key={finish.id}
                          type="button"
                          onClick={() => setSelectedFinishId(finish.id)}
                          className={`min-w-0 rounded-[1.25rem] border px-4 py-3 text-left transition-all ${
                            isActive
                              ? "border-[#c793a7] bg-[#fff7fb] shadow-sm dark:border-[#f2cfd9] dark:bg-[#332833]"
                              : "border-white/70 bg-white/80 hover:bg-white dark:border-white/10 dark:bg-white/6 dark:hover:bg-white/10"
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <FinishBadge finishId={finish.id} />
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center justify-between gap-3">
                                <span className="text-sm font-semibold text-[#2d2d2d] dark:text-[#f6edf0]">{finish.label}</span>
                                <span className="shrink-0 text-sm text-[#7a6570] dark:text-[#dbc9d1]">{finish.price} KM</span>
                              </div>
                              <p className="mt-1 text-sm leading-6 text-[#6c6469] dark:text-[#cbbec5]">{finish.note}</p>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div>
                <div
                  ref={stageRef}
                  className={`relative overflow-hidden rounded-[1.75rem] border border-dashed bg-[radial-gradient(circle_at_50%_18%,_rgba(255,255,255,0.32),_transparent_25%),radial-gradient(circle_at_50%_100%,_rgba(71,91,63,0.2),_rgba(34,31,37,0)_56%),linear-gradient(180deg,_rgba(72,54,67,0.12),_rgba(30,24,31,0.08))] p-4 transition-colors dark:bg-[radial-gradient(circle_at_50%_12%,_rgba(255,255,255,0.06),_transparent_22%),radial-gradient(circle_at_50%_100%,_rgba(70,96,67,0.24),_rgba(21,25,24,0)_58%),linear-gradient(180deg,_rgba(52,38,49,0.86),_rgba(28,23,30,0.96))] ${
                    isOverStage ? "border-[#c793a7]" : "border-[#dfc7ce] dark:border-white/10"
                  }`}
                  style={{ minHeight: BOUQUET_HEIGHT }}
                >
                  <div className="pointer-events-none absolute inset-x-6 bottom-4 h-40 rounded-[999px] bg-[radial-gradient(circle,_rgba(255,255,255,0.16),_transparent_60%)] blur-2xl dark:bg-[radial-gradient(circle,_rgba(255,255,255,0.08),_transparent_72%)]" />
                  <FinishPreview finishId={selectedFinish.id} />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-[#8d727e] dark:text-[#bfaab4]">{designer.canvasLabel}</p>
                      <p className="mt-2 text-sm text-[#6d5d66] dark:text-[#d4c7ce]">{designer.emptyHint}</p>
                    </div>
                    <span className="flex min-h-16 min-w-16 flex-col items-center justify-center rounded-full bg-white/80 px-3 py-2 text-sm leading-tight text-[#6f5965] dark:bg-white/8 dark:text-[#ead6de]">
                      <span className="text-base font-medium">{placements.length}</span>
                      <span className="text-xs uppercase tracking-[0.12em]">{designer.stemCountLabel}</span>
                    </span>
                  </div>

                  {placements.length === 0 ? (
                    <div className="pointer-events-none absolute inset-x-6 bottom-10 top-24 flex items-center justify-center rounded-[1.5rem] border border-white/50 bg-white/25 text-center dark:border-white/8 dark:bg-white/5">
                      <p className="max-w-xs text-sm leading-6 text-[#6d5d66] dark:text-[#d4c7ce]">{designer.emptyState}</p>
                    </div>
                  ) : null}

                  {placements.map((flower) => {
                    const option = designer.options[flower.optionIndex];
                    const isDraggingPlacedFlower =
                      dragState?.source === "bouquet" && dragState.flowerId === flower.id;

                    return (
                      <div
                        key={flower.id}
                        className="absolute"
                        style={{
                          left: flower.x,
                          top: flower.y,
                          width: FLOWER_SIZE,
                          height: FLOWER_HEIGHT,
                          transform: `translate(-50%, -78%) rotate(${flower.rotation}deg) scale(${flower.scale})`,
                          zIndex: isDraggingPlacedFlower ? placements.length + 2 : flower.zIndex,
                          opacity: isDraggingPlacedFlower ? 0 : 1
                        }}
                      >
                        <button
                          type="button"
                          aria-label={`${option.label} ${designer.dragAction}`}
                          onPointerDown={(event) => {
                            event.preventDefault();
                            (event.currentTarget as HTMLButtonElement).setPointerCapture(event.pointerId);
                            setSelectedFlowerId(flower.id);
                            setDragState({
                              source: "bouquet",
                              optionIndex: flower.optionIndex,
                              flowerId: flower.id,
                              pointerId: event.pointerId,
                              clientX: event.clientX,
                              clientY: event.clientY
                            });
                            setDragPoint(
                              getStagePoint(
                                event.clientX,
                                event.clientY,
                                stageRef.current?.getBoundingClientRect() ?? null
                              )
                            );
                          }}
                          className="absolute inset-0 touch-none transition-transform"
                        >
                          <FlowerSprite optionIndex={flower.optionIndex} label={option.label} image={option.image} />
                        </button>

                        <button
                          type="button"
                          aria-label={`${designer.removeFlower} ${option.label}`}
                          onPointerDown={(event) => {
                            event.stopPropagation();
                          }}
                          onClick={(event) => {
                            event.stopPropagation();
                            setPlacements((current) => current.filter((item) => item.id !== flower.id));
                            setSelectedFlowerId((current) => (current === flower.id ? null : current));
                          }}
                          className="absolute right-1 top-0 flex h-7 w-7 items-center justify-center rounded-full border border-white/70 bg-[#2d2d2d]/88 text-white shadow-lg transition-transform hover:scale-105 dark:border-white/10 dark:bg-[#f6edf0] dark:text-[#241f25]"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    );
                  })}

                  {dragPoint && activeOption ? (
                    <div
                      className="pointer-events-none absolute"
                      style={{
                        left: dragPoint.x,
                        top: dragPoint.y,
                        width: FLOWER_SIZE,
                        height: FLOWER_HEIGHT,
                        transform:
                          dragState?.source === "bouquet" && activePlacement
                            ? `translate(-50%, -78%) rotate(${activePlacement.rotation}deg) scale(${activePlacement.scale})`
                            : "translate(-50%, -78%) rotate(8deg) scale(1.05)",
                        zIndex: placements.length + 8
                      }}
                    >
                      <FlowerSprite optionIndex={dragState?.optionIndex ?? 0} label={activeOption.label} image={activeOption.image} ghost />
                    </div>
                  ) : null}
                </div>

                <div className="mt-5 rounded-[1.5rem] border border-white/60 bg-white/70 p-4 dark:border-white/10 dark:bg-white/6">
                  <p className="text-xs uppercase tracking-[0.22em] text-[#8d727e] dark:text-[#bfaab4]">
                    {designer.selectedFlowerLabel}
                  </p>
                  {selectedFlower ? (
                    <div className="mt-3 space-y-4">
                      <div>
                        <p className="text-lg text-[#2d2d2d] dark:text-[#f6edf0]">
                          {designer.options[selectedFlower.optionIndex].label}
                        </p>
                        <p className="text-sm text-[#6c6469] dark:text-[#cbbec5]">{designer.rotateHint}</p>
                      </div>

                      <div className="grid gap-3 md:grid-cols-2">
                        <div className="rounded-[1.25rem] border border-[#dfc4cd] bg-white/80 p-3 dark:border-white/10 dark:bg-[#2d262c]">
                          <div className="flex items-center justify-between gap-3">
                            <p className="text-xs uppercase tracking-[0.2em] text-[#8d727e] dark:text-[#bfaab4]">Size</p>
                            <p className="text-xs uppercase tracking-[0.2em] text-[#8d727e] dark:text-[#bfaab4]">
                              {Math.round(selectedFlower.scale * 100)}%
                            </p>
                          </div>
                          <div className="mt-3 flex flex-wrap items-center gap-2">
                            <button
                              type="button"
                              onClick={() => resizeSelectedFlower(-0.08)}
                              className="inline-flex items-center gap-2 rounded-full border border-[#dfc4cd] bg-white px-4 py-2 text-sm text-[#6f5965] transition-colors hover:bg-[#fff7fb] dark:border-white/10 dark:bg-[#352d34] dark:text-[#ead6de] dark:hover:bg-[#403640]"
                            >
                              <Minus className="h-4 w-4" />
                              Smaller
                            </button>
                            <button
                              type="button"
                              onClick={() => resizeSelectedFlower(0.08)}
                              className="inline-flex items-center gap-2 rounded-full border border-[#dfc4cd] bg-white px-4 py-2 text-sm text-[#6f5965] transition-colors hover:bg-[#fff7fb] dark:border-white/10 dark:bg-[#352d34] dark:text-[#ead6de] dark:hover:bg-[#403640]"
                            >
                              <Plus className="h-4 w-4" />
                              Bigger
                            </button>
                          </div>
                        </div>

                        <div className="rounded-[1.25rem] border border-[#dfc4cd] bg-white/80 p-3 dark:border-white/10 dark:bg-[#2d262c]">
                          <p className="text-xs uppercase tracking-[0.2em] text-[#8d727e] dark:text-[#bfaab4]">Rotation</p>
                          <div className="mt-3 flex flex-wrap items-center gap-2">
                            <button
                              type="button"
                              onClick={() => rotateSelectedFlower(-12)}
                              className="inline-flex items-center gap-2 rounded-full border border-[#dfc4cd] bg-white px-4 py-2 text-sm text-[#6f5965] transition-colors hover:bg-[#fff7fb] dark:border-white/10 dark:bg-[#352d34] dark:text-[#ead6de] dark:hover:bg-[#403640]"
                            >
                              <RotateCcw className="h-4 w-4" />
                              {designer.rotateLeft}
                            </button>
                            <button
                              type="button"
                              onClick={() => rotateSelectedFlower(12)}
                              className="inline-flex items-center gap-2 rounded-full border border-[#dfc4cd] bg-white px-4 py-2 text-sm text-[#6f5965] transition-colors hover:bg-[#fff7fb] dark:border-white/10 dark:bg-[#352d34] dark:text-[#ead6de] dark:hover:bg-[#403640]"
                            >
                              <RotateCw className="h-4 w-4" />
                              {designer.rotateRight}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p className="mt-3 text-sm leading-6 text-[#6c6469] dark:text-[#cbbec5]">{designer.selectedFlowerEmpty}</p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.82, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="xl:sticky xl:top-24"
          >
            <div className="relative overflow-hidden rounded-[2rem] bg-[#2d2d2d] p-5 text-white shadow-[0_24px_80px_rgba(45,45,45,0.22)] dark:bg-[#f1e7ec] dark:text-[#1c171c] sm:p-7">
              <div className="absolute -right-14 -top-10 h-40 w-40 rounded-full bg-[#f7d9e3]/20 blur-2xl dark:bg-[#ffffff]/45" />
              <div className="absolute -bottom-10 -left-8 h-36 w-36 rounded-full bg-[#a8c3a1]/20 blur-2xl dark:bg-[#d6e7ce]/40" />
              <div className="relative">
                <p className="text-sm uppercase tracking-[0.25em] text-white/60 dark:text-[#655761]">{designer.orderSummaryEyebrow}</p>
                <h3 className="mt-4 text-3xl leading-none sm:text-4xl" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                  {designer.orderSummaryTitle}
                </h3>
                <div className="mt-6 space-y-3 rounded-[1.5rem] border border-white/10 bg-white/6 p-4 dark:border-[#d7c7cf]/40 dark:bg-[#fff8fb]/70">
                  <div className="flex items-center justify-between gap-3 text-sm">
                    <span className="text-white/75 dark:text-[#564b52]">{designer.basePriceLabel}</span>
                    <span>{designer.basePriceValue} KM</span>
                  </div>
                  <div className="flex items-center justify-between gap-3 text-sm">
                    <span className="text-white/75 dark:text-[#564b52]">{designer.flowersPriceLabel}</span>
                    <span>{flowersSubtotal} KM</span>
                  </div>
                  <div className="flex items-center justify-between gap-3 text-sm">
                    <span className="text-white/75 dark:text-[#564b52]">{designer.finishPriceLabel}</span>
                    <span>{selectedFinish.price} KM</span>
                  </div>
                  <div className="h-px bg-white/10 dark:bg-[#d9c9d0]" />
                  <div className="flex items-center justify-between gap-3 text-base font-semibold">
                    <span>{designer.totalPriceLabel}</span>
                    <span>{estimatedTotal} KM</span>
                  </div>
                </div>
                <p className="mt-4 text-3xl leading-none sm:text-4xl" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                  {estimatedTotal} KM
                </p>
                <p className="mt-3 max-w-sm text-sm leading-6 text-white/75 dark:text-[#564b52]">
                  {designer.priceDescription}
                </p>
                <p className="mt-4 text-sm leading-6 text-white/70 dark:text-[#655761]">{designer.quickOrderHint}</p>
                <a
                  href={quickOrderHref}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#2d2d2d] transition-transform hover:scale-[1.02] dark:bg-[#1f1a20] dark:text-[#f6edf0]"
                >
                  {designer.quickOrderCta}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FlowerSprite({
  optionIndex,
  label,
  image,
  ghost = false
}: {
  optionIndex: number;
  label: string;
  image: string;
  ghost?: boolean;
}) {
  const palette = flowerPalettes[optionIndex % flowerPalettes.length];
  const bloomClipId = `bloom-clip-${optionIndex}-${ghost ? "ghost" : "solid"}`;

  return (
    <svg
      viewBox="0 0 120 196"
      className={`h-full w-full overflow-visible drop-shadow-[0_18px_28px_rgba(25,19,25,0.16)] ${ghost ? "opacity-90" : ""}`}
      role={ghost ? undefined : "img"}
      aria-hidden={ghost ? true : undefined}
      aria-label={ghost ? undefined : label}
    >
      <defs>
        <clipPath id={bloomClipId}>
          <circle cx="60" cy="55" r="20" />
        </clipPath>
      </defs>

      <ellipse cx="60" cy="170" rx="20" ry="8" fill={palette.shadow} />

      <path
        d="M42 53 C44 33 76 31 78 54 C79 71 69 83 60 83 C50 83 40 71 42 53"
        fill="rgba(255,255,255,0.84)"
        opacity="0.92"
      />
      <circle cx="60" cy="55" r="22" fill="rgba(255,255,255,0.8)" opacity="0.9" />
      <image href={image} x="38" y="33" width="44" height="44" preserveAspectRatio="xMidYMid slice" clipPath={`url(#${bloomClipId})`} />
      <circle cx="60" cy="55" r="20" fill="none" stroke="rgba(255,255,255,0.92)" strokeWidth="3" />
      <circle cx="60" cy="55" r="23" fill="none" stroke={palette.middle} strokeOpacity="0.34" strokeWidth="2" />
      <path d="M48 43 C55 36 68 36 73 45" fill="none" stroke="rgba(255,255,255,0.58)" strokeWidth="2.5" strokeLinecap="round" />

      <path d="M58 77 C57 106 54 136 53 184" fill="none" stroke={palette.stem} strokeWidth="6" strokeLinecap="round" />
      <path d="M57 104 C42 96 32 100 26 116 C41 121 50 119 58 109" fill={palette.leaf} opacity="0.96" />
      <path d="M58 126 C41 122 31 129 30 147 C45 147 55 142 60 131" fill={palette.leaf} opacity="0.88" />
      <path d="M60 145 C44 142 35 149 36 168 C50 168 58 162 62 151" fill={palette.leaf} opacity="0.82" />
      <path d="M61 96 C74 86 85 90 94 102 C82 108 71 107 61 102" fill={palette.leaf} opacity="0.98" />
      <path d="M60 118 C74 114 85 121 90 137 C75 136 66 131 60 122" fill={palette.leaf} opacity="0.9" />
      <path d="M60 140 C76 138 85 147 87 165 C72 164 64 158 60 148" fill={palette.leaf} opacity="0.84" />
    </svg>
  );
}

function FinishPreview({ finishId }: { finishId: string }) {
  if (finishId === "paper") {
    return (
      <div className="pointer-events-none absolute inset-x-0 bottom-2 flex justify-center">
        <svg viewBox="0 0 560 360" className="h-[340px] w-[540px] opacity-[0.98]">
          <defs>
            <linearGradient id="paper-shadow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(34,23,32,0)" />
              <stop offset="100%" stopColor="rgba(34,23,32,0.26)" />
            </linearGradient>
            <linearGradient id="paper-outer-left" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f8ecef" />
              <stop offset="58%" stopColor="#eecfd8" />
              <stop offset="100%" stopColor="#d9aeb9" />
            </linearGradient>
            <linearGradient id="paper-outer-right" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fff7ea" />
              <stop offset="58%" stopColor="#f3dfca" />
              <stop offset="100%" stopColor="#ddc0a0" />
            </linearGradient>
            <linearGradient id="paper-inner-left" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fff8fa" />
              <stop offset="100%" stopColor="#f1dade" />
            </linearGradient>
            <linearGradient id="paper-inner-right" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fffbf3" />
              <stop offset="100%" stopColor="#f3e6d3" />
            </linearGradient>
            <linearGradient id="paper-front" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#fffaf7" />
              <stop offset="100%" stopColor="#efd8d1" />
            </linearGradient>
            <linearGradient id="paper-cuff" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#f7e7de" />
              <stop offset="100%" stopColor="#ebcdc8" />
            </linearGradient>
            <radialGradient id="paper-glow" cx="50%" cy="78%" r="52%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.22)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>
            <linearGradient id="paper-ribbon" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#b56e87" />
              <stop offset="100%" stopColor="#dca0b4" />
            </linearGradient>
          </defs>
          <ellipse cx="280" cy="306" rx="132" ry="28" fill="url(#paper-shadow)" />
          <path d="M78 292 L188 118 L274 290 L198 306 Z" fill="url(#paper-outer-left)" />
          <path d="M482 292 L372 118 L286 290 L362 306 Z" fill="url(#paper-outer-right)" />
          <path d="M128 270 L222 150 L278 296 L206 304 Z" fill="url(#paper-inner-left)" opacity="0.98" />
          <path d="M432 270 L338 150 L282 296 L354 304 Z" fill="url(#paper-inner-right)" opacity="0.98" />
          <path d="M162 273 Q280 212 398 273 L334 334 H226 Z" fill="url(#paper-front)" />
          <path d="M180 258 Q280 202 380 258" fill="none" stroke="rgba(255,255,255,0.56)" strokeWidth="5" strokeLinecap="round" />
          <path d="M195 285 Q280 252 365 285 L327 325 H233 Z" fill="url(#paper-cuff)" opacity="0.94" />
          <path d="M226 250 Q280 225 334 250" fill="none" stroke="rgba(208,156,172,0.8)" strokeWidth="3" strokeLinecap="round" />
          <path d="M198 251 C227 264 255 270 280 270 C305 270 333 264 362 251" fill="none" stroke="url(#paper-ribbon)" strokeWidth="10" strokeLinecap="round" />
          <path d="M198 251 C227 264 255 270 280 270 C305 270 333 264 362 251" fill="none" stroke="#fbe6ec" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
          <path d="M252 266 C238 245 238 229 259 220 C276 231 273 248 263 268" fill="#f6dde5" />
          <path d="M308 266 C322 245 322 229 301 220 C284 231 287 248 297 268" fill="#f6dde5" />
          <path d="M279 268 C271 246 272 230 280 220 C288 230 289 246 281 268" fill="#f0ccd8" />
          <circle cx="280" cy="248" r="11" fill="url(#paper-ribbon)" />
          <path d="M243 268 C226 300 216 322 210 352" fill="none" stroke="#c98aa0" strokeWidth="3.4" strokeLinecap="round" opacity="0.85" />
          <path d="M263 270 C250 300 243 324 241 356" fill="none" stroke="#e8bfd0" strokeWidth="2.6" strokeLinecap="round" opacity="0.9" />
          <path d="M317 268 C334 300 344 322 350 352" fill="none" stroke="#c98aa0" strokeWidth="3.4" strokeLinecap="round" opacity="0.85" />
          <path d="M297 270 C310 300 317 324 319 356" fill="none" stroke="#e8bfd0" strokeWidth="2.6" strokeLinecap="round" opacity="0.9" />
          <ellipse cx="280" cy="230" rx="132" ry="66" fill="url(#paper-glow)" />
        </svg>
      </div>
    );
  }

  if (finishId === "vase") {
    return (
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center">
        <svg viewBox="0 0 360 380" className="h-[340px] w-[320px] opacity-[0.98]">
          <defs>
            <linearGradient id="vase-glass" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.72)" />
              <stop offset="35%" stopColor="rgba(210,231,235,0.34)" />
              <stop offset="100%" stopColor="rgba(150,181,190,0.24)" />
            </linearGradient>
            <linearGradient id="vase-water" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(160,208,202,0.48)" />
              <stop offset="100%" stopColor="rgba(111,156,154,0.24)" />
            </linearGradient>
            <radialGradient id="vase-glow" cx="50%" cy="24%" r="58%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.22)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>
          </defs>
          <ellipse cx="180" cy="338" rx="84" ry="18" fill="rgba(25,24,28,0.22)" />
          <path
            d="M144 58 C148 98 142 134 114 190 C92 234 100 300 138 326 H222 C260 300 268 234 246 190 C218 134 212 98 216 58 Z"
            fill="url(#vase-glass)"
            stroke="rgba(255,255,255,0.68)"
            strokeWidth="4"
          />
          <path d="M138 88 H222" stroke="rgba(255,255,255,0.54)" strokeWidth="3" />
          <path d="M126 222 C156 236 204 236 234 222" fill="none" stroke="url(#vase-water)" strokeWidth="32" strokeLinecap="round" />
          <path d="M122 214 C152 202 208 202 238 214" fill="none" stroke="rgba(222,248,245,0.46)" strokeWidth="6" strokeLinecap="round" />
          <path d="M156 74 C156 130 148 202 140 292" stroke="rgba(111,148,105,0.48)" strokeWidth="3" strokeLinecap="round" />
          <path d="M180 72 C180 134 180 208 180 296" stroke="rgba(111,148,105,0.56)" strokeWidth="3" strokeLinecap="round" />
          <path d="M204 74 C204 130 212 202 220 292" stroke="rgba(111,148,105,0.48)" strokeWidth="3" strokeLinecap="round" />
          <path d="M150 72 Q180 54 210 72" fill="none" stroke="rgba(255,255,255,0.74)" strokeWidth="3" strokeLinecap="round" />
          <path d="M132 64 Q180 18 228 64" fill="url(#vase-glow)" opacity="0.9" />
          <path d="M150 60 C136 116 126 190 136 316" fill="none" stroke="rgba(255,255,255,0.34)" strokeWidth="4" strokeLinecap="round" />
          <path d="M214 66 C226 120 236 196 226 314" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>
    );
  }

  return null;
}

function FinishBadge({ finishId }: { finishId: string }) {
  if (finishId === "paper") {
    return (
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#fff4ed,#efcfd4)] text-[#7f6471] dark:bg-[linear-gradient(135deg,#43313d,#7a5564)] dark:text-[#f6edf0]">
        <svg viewBox="0 0 48 48" className="h-9 w-9" aria-hidden="true">
          <path d="M8 35 L20 12 L24 38 Z" fill="#f4dce0" />
          <path d="M40 35 L28 12 L24 38 Z" fill="#f0e1c6" />
          <path d="M15 33 Q24 26 33 33" fill="#fff7f2" />
          <path d="M16 31 Q24 25 32 31" fill="none" stroke="#c98aa0" strokeWidth="2.4" strokeLinecap="round" />
        </svg>
      </div>
    );
  }

  if (finishId === "vase") {
    return (
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#f3fbfb,#d6e6e8)] text-[#5f7380] dark:bg-[linear-gradient(135deg,#23343c,#38525e)] dark:text-[#eaf7fb]">
        <svg viewBox="0 0 48 48" className="h-9 w-9" aria-hidden="true">
          <path d="M18 7 C19 13 17 18 12 27 C9 32 10 38 15 41 H33 C38 38 39 32 36 27 C31 18 29 13 30 7 Z" fill="rgba(255,255,255,0.58)" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.5" />
          <path d="M15 27 C19 29 29 29 33 27" fill="none" stroke="rgba(114,176,170,0.7)" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </div>
    );
  }

  return (
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#f7edf0,#efe5ea)] text-[#8a717c] dark:bg-[linear-gradient(135deg,#382c33,#4a3841)] dark:text-[#f1dfe6]">
      <svg viewBox="0 0 48 48" className="h-8 w-8" aria-hidden="true">
        <path d="M14 32 Q24 18 34 32" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M18 27 C20 19 22 14 24 10 C26 14 28 19 30 27" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    </div>
  );
}
