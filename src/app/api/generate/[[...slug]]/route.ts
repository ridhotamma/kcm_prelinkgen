import mobileConfig from "@/../public/config/mobile.json"
import desktopConfig from "@/../public/config/mobile.json"
import { Platform } from "@/interface"
import { NextResponse } from "next/server"

export async function GET(
  request: Request,
  { params }: { params: { slug: string[] } }
) {

    const [targetPlatform, prelinkInventory, ...rest] = params.slug 
    return NextResponse.json({ mobileConfig, desktopConfig, Platform })
}
