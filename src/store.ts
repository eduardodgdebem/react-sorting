import create from "zustand";

type canvasStore = {
  startSorting: boolean;
  isSorting: boolean;
  setStartSorting: (startSorting: boolean) => void;
  setIsSorting: (isSorting: boolean) => void;
};

const useStore = create<canvasStore>((set) => ({
  startSorting: false,
  isSorting: false,
  setStartSorting: (value: boolean) => set(() => ({ startSorting: value })),
  setIsSorting: (value: boolean) => set(() => ({ isSorting: value })),
}));

export const useCanvasStore = useStore;
