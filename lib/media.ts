import media from "./media.json";

export type MediaItem = {
  src: string;
  width: number;
  height: number;
  blurDataURL: string;
  category: string;
};

export type MediaName = keyof typeof media;

const store = media as Record<string, MediaItem>;

export function img(name: MediaName | string): MediaItem {
  const m = store[name];
  if (!m) throw new Error(`Missing image in manifest: ${name}`);
  return m;
}

export function imgProps(name: MediaName | string) {
  const m = img(name);
  return {
    src: m.src,
    width: m.width,
    height: m.height,
    placeholder: "blur" as const,
    blurDataURL: m.blurDataURL,
  };
}

/** For fixed-aspect uniform grid tiles (next/image fill). */
export function imgFill(name: MediaName | string) {
  const m = img(name);
  return {
    src: m.src,
    fill: true as const,
    placeholder: "blur" as const,
    blurDataURL: m.blurDataURL,
  };
}
