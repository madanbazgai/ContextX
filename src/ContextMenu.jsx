import { useEffect, useRef } from "react";

export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

const ContextMenu = ({ x, y, closeContextMenu }) => {
  const contextMenuRef = useRef(null);
  useOnClickOutside(contextMenuRef, closeContextMenu);
  return (
    <div
      ref={contextMenuRef}
      onClick={() => closeContextMenu()}
      className="context-menu-div"
      style={{
        top: `${y}px`,
        left: `${x}px`,
        position: "absolute",
      }}
    >
      <button className="context-menu-button">
        Share
      </button>
      <button className="context-menu-button">
       Print
      </button>
      <button className="context-menu-button">
         Download
      </button>
    </div>
  );
};

export default ContextMenu;