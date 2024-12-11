import React, { useEffect, useState } from "react";
import "../hero.css";

const DiamondCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [visible, setVisible] = useState(true); // State to control visibility
  
    useEffect(() => {
      // Update cursor position
      const handleMouseMove = (event:any) => {
        setPosition({ x: event.clientX, y: event.clientY });
        setVisible(true); // Ensure cursor is visible when moving
      };
  
      // Hide cursor on click
      const handleMouseDown = () => setVisible(false);
  
      // Show cursor again on mouse up
      const handleMouseUp = () => setVisible(true);
  
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mousedown", handleMouseDown);
      document.addEventListener("mouseup", handleMouseUp);
  
      // Cleanup event listeners
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mousedown", handleMouseDown);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }, []);
  
    return (
      <div
        className="diamond-cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: visible ? 1 : 0, // Hide the cursor when not visible
        }}
      ></div>
    );
  };
  
  export default DiamondCursor;