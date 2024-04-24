import { create } from 'zustand'

interface GenerationState {
    productId: number
    setProductId: (productId: number) => void
}

export const useGenerationStore = create<GenerationState>()((set) => ({
    productId: 0,
    setProductId: (productId: number) =>({productId})
}))