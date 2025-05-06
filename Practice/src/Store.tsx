import { create } from "zustand";

interface StoreProps {
  servingTeam: string;
  setServingTeam(team: string): void;
  score: { A: number; B: number };
  setScore(servingTeam: string): void;
  resetScore(team: string): void;
}

const useStore = create<StoreProps>((set) => ({
  servingTeam: "A",
  score: { A: 0, B: 0 },

  setServingTeam: (team) => {
    set({ servingTeam: team });
  },

  setScore: (servingTeam) => {
    set((state) => {
      if (servingTeam === "A") {
        return {
          score: {
            ...state.score,
            A: state.score.A + 1,
          },
        };
      } else if (servingTeam === "B") {
        return {
          score: {
            ...state.score,
            B: state.score.B + 1,
          },
        };
      }
      return state;
    });
  },

  resetScore: (team) => {
    set((state) => {
      if (team === "A") {
        return { score: { ...state.score, A: 0 } };
      } else if (team === "B") {
        return { score: { ...state.score, B: 0 } };
      }
      return state;
    });
  },
}));

export default useStore;
