import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request) {
  console.log("callback hiit")
  const {searchParams} = new URL(request.url);
  const code = searchParams.get("code");
  console.log("CODE:", code);
  if(code){
    const supabase = await createClient();
    await supabase.auth.exchangeCodeForSession(code);
     console.log("SESSION CREATED ✅");
  }
  return NextResponse.redirect(new URL("/",request.url))
}