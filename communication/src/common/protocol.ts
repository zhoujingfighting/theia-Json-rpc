
export const MyServicePath = '/serveices/my-services'
export const MyService = Symbol('MyService')

export interface MyService {
	getNameString(name:string) : Promise<string>
	//表明的是返回一个promise类型的字符串

}