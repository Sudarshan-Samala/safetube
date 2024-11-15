import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  email: string;
  isParent: boolean;
  isGuest?: boolean;
}

interface StoreState {
  user: User | null;
  voiceMode: boolean;
  screenTime: number;
  toggleVoiceMode: () => void;
  updateScreenTime: (time: number) => void;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string, isParent: boolean) => Promise<void>;
  startGuestTrial: () => void;
  logout: () => void;
}

const useStore = create<StoreState>((set) => ({
  user: null,
  voiceMode: false,
  screenTime: 0,
  toggleVoiceMode: () => set((state) => ({ voiceMode: !state.voiceMode })),
  updateScreenTime: (time) => set({ screenTime: time }),
  login: async (email, password) => {
    // TODO: Implement actual authentication
    set({
      user: {
        id: '1',
        name: 'Test User',
        email,
        isParent: false,
      },
    });
  },
  signup: async (email, password, name, isParent) => {
    // TODO: Implement actual authentication
    set({
      user: {
        id: '1',
        name,
        email,
        isParent,
      },
    });
  },
  startGuestTrial: () => {
    set({
      user: {
        id: 'guest',
        name: 'Guest User',
        email: '',
        isParent: false,
        isGuest: true,
      },
    });
  },
  logout: () => set({ user: null }),
}));