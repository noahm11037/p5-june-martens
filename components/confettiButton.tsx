"use client";

import { addToast } from "@heroui/toast";

const fireConfetti = () => {
  const duration = 6 * 1000;
  const end = Date.now() + duration;

  addToast({
    title: "Info",
    description:
      "This celebrate button is a component. You can add it anywhere!",
    color: "primary",
  });

  const colors = ["#a855f7", "#6366f1", "#ec4899", "#22d3ee"];
};
