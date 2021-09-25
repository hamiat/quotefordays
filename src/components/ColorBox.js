const ColorBox = ( {selectedColor, colorChange}) => {
  return (
    <div className="pick-color">
      <label htmlFor="base">Color:</label>
      <input 
      id="base" 
      type="color" 
      value={selectedColor}
      onChange={colorChange} />
    </div>
  );
};

export default ColorBox;
