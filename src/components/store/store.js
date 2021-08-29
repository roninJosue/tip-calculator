import create from "zustand";

const useStore = create((set) => ({
  bill: 100.00,
  people: 0,
  tipPercentage: 0,
  updateBill: (b) => set(state => ({bill: b})),
  updatePeople: (numberPeople) => set(state => ({people: numberPeople})),
  updateTipPercentage: (percentage) => set(state => ({tipPercentage: percentage}))
}))

export default useStore;
