export interface IControllerResponse<T> {
  statusCode: number;
  body: T | string;
}
