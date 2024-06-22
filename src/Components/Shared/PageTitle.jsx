// eslint-disable-next-line react/prop-types
const PageTitle = ({ subHeading, heading }) => {
  return (
    <div>
      <div className="text-center my-8">
        <h3 className="text-[#D99904] text-xl ">---{subHeading}---</h3>
        <div className="divider font-extrabold md:w-2/6 lg:w-2/6 mx-auto"></div>
        <h3 className="text-3xl">{heading}</h3>
        <div className="divider font-extrabold md:w-2/6 lg:w-2/6 mx-auto"></div>
      </div>
    </div>
  );
};

export default PageTitle;
