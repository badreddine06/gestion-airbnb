import React from "react";

const StepTwoStarter = () => {
  return (
    <div className="flex items-center h-full mx-20">
      <div className="grid grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-4 text-airbnb-light-black">
          <div className="text-2xl">Step 2</div>
          <h1 className="text-4xl">
            <strong>Make your place stand out</strong>
          </h1>
          <p className="text-xl">
            In this step, you'll add some of the amenties your place offers,
            plus 5 or more photos. Then you'll creat a title and description. 
          </p>
        </div>
        <div>
          <video src="/home2.mp4" autoPlay loop controls={false} />
        </div>
      </div>
    </div>
  );
};

export default StepTwoStarter;
