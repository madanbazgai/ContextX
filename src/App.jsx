import ContextMenu from "../../Pipelines/DndModal/ContextMenu";
const App = () => {
  const [contextMenu, setcontextMenu] = useState({
    x: 0,
    y: 0,
    show: false,
  });
  const handleContextMenu = (e) => {
    e.preventDefault();
    const { pageX, pageY } = e;
    setcontextMenu({
      show: true,
      x: pageX,
      y: pageY,
    });
  };

  const contextMenuClose = () =>
    setcontextMenu({
      x: 0,
      y: 0,
      show: false,
    });
  return (
    <div>
      <button onContextMenu={(e) => handleContextMenu(e)}> Click Me! </button>

      <div>
        {contextMenu.show && (
          <ContextMenu
            x={contextMenu.x}
            y={contextMenu.y}
            closeContextMenu={contextMenuClose}
          />
        )}
      </div>
    </div>
  );
};

export default App;
