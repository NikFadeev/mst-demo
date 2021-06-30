import { applySnapshot, getSnapshot, onSnapshot } from "mobx-state-tree"
import { RootModel } from "."

export const setupRootStore = () => {
  const rootTree = RootModel.create({
    employer: {
      id: '1',
      name: "Bob's Burgers",
      location: "New York, NY",
      employees: []
    }
  })

  onSnapshot(rootTree, (snapshot) => console.log('spanshot: ', snapshot));

  const currentRootTree = getSnapshot(rootTree);

  applySnapshot(rootTree, {
    ...currentRootTree,
    employer: { ...currentRootTree.employer, location: 'Manhattan, NY' }
  })

  return { rootTree }
}