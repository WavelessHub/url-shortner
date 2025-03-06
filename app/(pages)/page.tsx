"use client";

import { useEffect, useState } from "react";

import Form from "@/components/Form";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <Form />;
}
