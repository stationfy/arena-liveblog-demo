"use client";

import { useEffect } from "react";

export default function Liveblog() {
  useEffect(() => {
    loadScript(
      "https://sandbox.arena.im/public/js/arenalib.js?p=to-intercept&e=rFCka5W"
    );
  }, []);

  return (
    <div
      className="arena-liveblog"
      data-publisher="to-intercept"
      data-event="rFCka5W"
      data-version="2"
    ></div>
  );
}

function loadScript(src: string) {
  let r = false;
  const s = document.createElement("script");
  s.async = true;
  s.type = "text/javascript";
  s.src = src;
  const t = document.getElementsByTagName("script")[0];
  t.parentNode?.insertBefore(s, t);
}
