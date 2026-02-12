import { create } from 'zustand';

export const useStore = create((set) => ({
  // Navigation
  isMenuOpen: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  closeMenu: () => set({ isMenuOpen: false }),

  // Theme
  activeSection: 'home',
  setActiveSection: (section) => set({ activeSection: section }),

  // Contact form
  contactForm: {
    name: '',
    email: '',
    subject: '',
    message: '',
  },
  setContactForm: (field, value) =>
    set((state) => ({
      contactForm: { ...state.contactForm, [field]: value },
    })),
  resetContactForm: () =>
    set({
      contactForm: { name: '', email: '', subject: '', message: '' },
    }),

  // Loading
  isLoading: true,
  setIsLoading: (loading) => set({ isLoading: loading }),
}));
