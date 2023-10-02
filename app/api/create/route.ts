import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/prisma/client";

interface PostParams {
  url: string;
  uuid: string;
  origin: string;
}

interface GetParams {
  id: string;
}

export async function OPTIONS(request: NextRequest) {
  try {
    const { id }: GetParams = await request.json();

    if (!id)
      return NextResponse.json(
        { error: "Please give the Route ID." },
        { status: 400 }
      );

    const data = await prisma.url.findUnique({ where: { id } });

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { url, uuid, origin }: PostParams = await request.json();

    if (!url)
      return NextResponse.json(
        { error: "Please enter a URL." },
        { status: 400 }
      );

    if (!uuid)
      return NextResponse.json(
        { error: "Please enter a UUID." },
        { status: 400 }
      );

    const data = await prisma.url.create({
      data: {
        url,
        id: uuid,
        shortenedUrl: `${origin}/${uuid}`,
      },
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
