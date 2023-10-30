// api > hello > route.ts
import {NextRequest, NextResponse} from "next/server";

export async function GET (request: NextRequest){
    const greeting = "Hello World!!"
    const json = {
        greeting
    };
    
    return NextResponse.json(json);
}

// sample: https://medium.com/@patel.d/quick-guide-add-get-api-in-next-js-13-app-router-69f6e5e938be