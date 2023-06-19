import React from "react";

export default function useDesktopViewport(){
    const [width, setWidth] = React.useState(document.getElementById('width').clientWidth);
  
    React.useEffect(() => {
      const handleWindowResize = () => setWidth(document.getElementById('width').clientWidth);
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
  
    
    return { width };
  }