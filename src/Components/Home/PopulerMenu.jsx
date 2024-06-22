import useMenu from "../../Hooks/useMenu";

const PopulerMenu = () => {
  const [menu] = useMenu();
  console.log(menu);

  const populerMenu = menu.filter((items) => items.category === "popular");
  return (
    <div>
      <div className="grid grid-cols-2 gap-8 w-11/12 mx-auto">
        {populerMenu.map((items) => (
          <div className="" key={items.key}>
            <div className="flex items-center gap-4">
              <div>
                <img
                  style={{ borderRadius: "0px 200px 200px 200px" }}
                  className="h-24 "
                  src={items.image}
                  alt=""
                />
              </div>
              <div>
                <h3 className="font-cinzel text-xl font-semibold">
                  {items.name}---------
                </h3>
                <p className="font-inter text-[#737373]">{items.recipe}</p>
              </div>
              <div>
                <p className="text-[#BB8506] font-bold">${items.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="btn-menu text-center font-semibold hover:btn-menu-hover">View Full  Menu</button>
      </div>
    </div>
  );
};

export default PopulerMenu;
