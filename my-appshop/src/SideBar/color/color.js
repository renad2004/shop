import "./color.css";
import Input from "../../componts/Input";

const Color = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="color" />
        <span className="checkmark all"></span>
        All
      </label>

      <Input
        handleChange={handleChange}
        value="black"
        title="Black"
        name="color"
        color="black"
      />

      <Input
        handleChange={handleChange}
        value="blue"
        title="Blue"
        name="color"
        color="blue"
      />

      <Input
        handleChange={handleChange}
        value="red"
        title="Red"
        name="color"
        color="red"
      />

      <Input
        handleChange={handleChange}
        value="green"
        title="Green"
        name="color"
        color="green"
      />

      <label className="sidebar-label-container">
        <input
          onChange={handleChange}
          type="radio"
          value="white"
          name="color"
        />
        <span
          className="checkmark"
          style={{ background: "white", border: "2px solid black" }}
        ></span>
        White
      </label>
    </div>
  );
};

export default Color;
