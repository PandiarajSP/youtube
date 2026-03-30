import Button from "./Button";

const list = [
  "All","Music","Tamil Cinema","English Cinema","News","G.V","Gaming",
  "AR","Rahman","Live","Album"
  
];

const ButtonList = () => {
  return (
    <div className="flex items-center w-full overflow-hidden">
     
      {/* Scrollable viewport */}
      <div className="flex-1 overflow-x-auto">
        
        {/* Horizontal row */}
        <div className="flex w-max">
          {list.map((btn, index) => (
            <Button key={index} buttonText={btn} />
          ))}
        </div>

      </div>

    
    </div>
  );
};

export default ButtonList;