"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";

/** Preview routes render self-contained components with no external props. */
type RegistryPreview = ComponentType<Record<string, never>>;

function loadPreview(
  loader: () => Promise<{ default: RegistryPreview }>,
): RegistryPreview {
  return dynamic(loader);
}

const registry: Record<string, RegistryPreview> = {
  "AI-Input-Basic": loadPreview(() => import("@/resistry/Ai-Input-basic")),
  "AI-Input-pill": loadPreview(() => import("@/resistry/Ai-Input-pill")),
  "AI-Input-compact": loadPreview(() => import("@/resistry/Ai-Input-compact")),
  TypeWriterEffect: loadPreview(() => import("@/resistry/TypeWriterEffect")),
  Buttons: loadPreview(() =>
    import("@/resistry/Buttons").then((m) => ({
      default: function ButtonsPreview() {
        return (
          <div className="flex flex-wrap items-center gap-4 p-8">
            <m.ButtonsColorfull>Colorful</m.ButtonsColorfull>
            <m.ButtonsDarkToLight>Dark to light</m.ButtonsDarkToLight>
            <m.ButtonSimple>Simple</m.ButtonSimple>
            <m.ButtonBrand>Brand</m.ButtonBrand>
          </div>
        );
      },
    })),
  ),
  BentoHoverEffect: loadPreview(() =>
    import("@/resistry/BentoHoverEffect").then((m) => ({
      default: function BentoHoverEffectPreview() {
        return (
          <m.default
            cards={[
              {
                label: "Design",
                color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              },
              {
                label: "Build",
                color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
              },
              {
                label: "Ship",
                color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
              },
            ]}
          />
        );
      },
    })),
  ),
  AnimatedMenubar: loadPreview(() => import("@/resistry/AnimatedMenubar")),
  HoverDepthCard: loadPreview(() =>
    import("@/resistry/HoverDepthCard").then((m) => ({
      default: function HoverDepthCardPreview() {
        return (
          <m.default imageSrc="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80" />
        );
      },
    })),
  ),
  SpotlightCard: loadPreview(() => import("@/resistry/SpotlightCard")),
  SpotlightCardBorderGlow: loadPreview(() =>
    import("@/resistry/SpotlightCardBorderGlow"),
  ),
  SpotlightCardAnimatedBorder: loadPreview(() =>
    import("@/resistry/SpotlightCardAnimatedBorder"),
  ),
  Navigation_01: loadPreview(
    () => import("@/resistry/blocks/navigations/Navigation_01"),
  ),
  Navigation_02: loadPreview(
    () => import("@/resistry/blocks/navigations/Navigation_02"),
  ),
  Navigation_03: loadPreview(
    () => import("@/resistry/blocks/navigations/Navigation_03"),
  ),
  FeaturesSection_01: loadPreview(
    () => import("@/resistry/blocks/sections/FeaturesSection_01"),
  ),
  HeroSection_01: loadPreview(
    () => import("@/resistry/blocks/sections/hero-section_01"),
  ),
  Contact_01: loadPreview(
    () => import("@/resistry/blocks/sections/contact_01"),
  ),
  Inputs: loadPreview(() =>
    import("@/resistry/inputs").then((m) => ({
      default: function InputsPreview() {
        return (
          <div className="max-w-md space-y-4 p-8">
            <div>
              <label className="mb-1 block text-sm text-neutral-700 dark:text-neutral-300">
                Name
              </label>
              <m.Input name="name" placholder="John Doe" />
            </div>
            <div>
              <label className="mb-1 block text-sm text-neutral-700 dark:text-neutral-300">
                Message
              </label>
              <m.Textarea name="message" placholder="Your message..." />
            </div>
          </div>
        );
      },
    })),
  ),
  Commands: loadPreview(() =>
    import("@/resistry/commands").then((m) => ({
      default: function CommandsPreview() {
        return (
          <div className="max-w-xl space-y-4 p-8">
            <m.Command INSTALL_COMMAND="npx shadcn@latest add button" />
            <m.MultiChoiceCommand packageName="button" />
          </div>
        );
      },
    })),
  ),
};

export function useRegistryComponent(
  slug: string,
): RegistryPreview | null {
  return registry[slug] ?? null;
}
