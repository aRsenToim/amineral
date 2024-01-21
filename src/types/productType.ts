


export interface IProduct {
 id: number
 idMineral: string
 title: string
 img: string
 group: IGroup
 properties: {
  syngony: string
  formula: string
  hardness: string
  density: string
  cleavage: string
  kink: string
  color: string
  strokeColor: string
  shine: string
  luminescence: boolean
 }
}

export interface IGroup {
 id: string
 title: string
}