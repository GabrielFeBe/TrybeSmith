export default function errorHandler(status:string):number {
  const statusHTTPMap:Record<string, number> = {
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    SUCESS: 200,
    UNPROCESSABLE_ENTITY: 422,
    SUCESS_1: 201,
    
  };

  return statusHTTPMap[status] ?? 500;
}