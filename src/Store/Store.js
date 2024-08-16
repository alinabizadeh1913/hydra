import { create } from "zustand";

const useStore = create(set => ({
    isOpen : false,
    changeState : (newState) => set(state => ({ isOpen : newState }))
}))

export default useStore;