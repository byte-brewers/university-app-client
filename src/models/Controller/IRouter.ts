export interface IRouter {
  routerList: Array<IItem>
}

interface IItem {
  text: string
  road: IName
  id: number
}

interface IName {
  name: string
}
