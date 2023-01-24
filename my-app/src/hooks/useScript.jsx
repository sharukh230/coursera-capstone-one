import { useState, useEffect } from "react";

export const useScript = (url, name) => {
  const [lib, setLib] = useState({});

  useEffect(() => {
    const script = document.createElement("script");
    // script.type = "text/plain";
    // script.type = "text/javascript";
    // script.type = "application/x-javascript";
    script.type = "application/json";
    script.src = url;

    script.async = true;
    script.crossOrigin = "anonymous";
    script.onload = () => setLib({ [name]: window[name] });

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url, name]);

  return lib;
};