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

  return { rootTree }
}