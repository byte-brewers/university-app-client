export interface IController {
  routerList: Array<IRouter>
}

interface IRouter {
  text: string
  road: IName
  id: number
}

interface IName {
  name: string
}
