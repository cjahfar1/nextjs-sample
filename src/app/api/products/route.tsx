import { cookies, headers } from "next/headers";
export async function GET(request: Request) {
    const data =[{
        id:1,
        title:'T Shirt'
    }];

    const cookieList = cookies();
    const tokenCookie = cookieList.get('authToken');
    console.log("tokenCookie", tokenCookie);
   
    return Response.json({ data })
  }

  export async function POST(request: Request) {
    const prod = await request.json();
    const cookieList = cookies();
    const tokenCookie = cookieList.get('authToken');
    console.log("tokenCookie", tokenCookie);

    const headerList = headers();
    console.log('Authorization', headerList.get('Authorization'))
    const data =[{
        id:1,
        title:'T Shirt',
        prod: prod
    }];
   
    return Response.json({ data })
  }