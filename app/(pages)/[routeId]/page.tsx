"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { NextPage } from "next";

import axios from "axios";

interface Props {
  params: { routeId: string };
}

const Page: NextPage<Props> = ({ params }) => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const redirect = async () => {
      const res = await axios.options("/api/create", {
        data: { id: params.routeId },
      });

      res.data && router.replace(res.data.url);
    };

    setIsMounted(true);
    redirect();
  }, [params.routeId, router, isMounted]);

  if (!isMounted) return null;
};

export default Page;
