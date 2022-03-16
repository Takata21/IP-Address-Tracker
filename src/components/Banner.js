import React from 'react';

const Banner = ({ isLoading, ipInfo }) => {
  return (
    <div className="absolute left-0 right-0 banner-index flex flex-col w-11/12 m-auto gap-3 justify-center bg-white py-6 rounded text-center xl:flex-row xl:py-7 ">
      {isLoading ? (
        <p className="text-center">Loading</p>
      ) : (
        <>
          <div className="flex flex-col items-center justify-center xl:gap-1 xl:flex-row">
            <small className="text-gray-400 font-medium uppercase">
              ip address:
            </small>
            <p className="font-medium capitalize">{ipInfo?.ip}</p>
          </div>
          <div className="flex flex-col items-center justify-center xl:gap-1 xl:flex-row info-border">
            <small className="text-gray-400 font-medium uppercase">
              location:
            </small>
            <p className="font-medium capitalize">
              {ipInfo?.location.city}, {ipInfo?.location.region}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center xl:gap-1 xl:flex-row info-border">
            <small className="text-gray-400 font-medium uppercase">
              timezone:
            </small>
            <p className="font-medium capitalize">
              UTC {ipInfo?.location.timezone}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center xl:gap-1 xl:flex-row info-border">
            <small className="text-gray-400 font-medium uppercase">isp: </small>
            <p className="font-medium capitalize">{ipInfo?.isp}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Banner;
