import create from "zustand";

const useStore = create((set, get) => ({
  bill: 0,
  people: 1,
  tipPercentage: 1,
  updateBill: (b) => set(state => ({bill: b})),
  updatePeople: (numberPeople) => set(state => ({people: numberPeople})),
  updateTipPercentage: (percentage) => set(state => ({tipPercentage: percentage})),
  calculateAmountTip: () => {
    const b = get().bill * get().tipPercentage
    const people = get().people

    return (b/people).toFixed(2);
  },
  calculateTotal: () => {
    const b = get().bill * get().tipPercentage
    const people = get().people
    const c = b / people

    return ((get().bill / get().people) + c).toFixed(2)
  },
  reset: () => set(state=>({bill: 0, people:0}))
}))

export default useStore;
