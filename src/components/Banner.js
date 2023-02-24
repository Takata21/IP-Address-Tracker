import React from 'react'

const Banner = ({ isLoading, ipInfo }) => {
  return (
    <div className="absolute left-0 right-0 flex flex-col justify-center w-11/12 gap-3 py-6 m-auto text-center bg-white rounded banner-index xl:flex-row xl:py-7 ">
      {isLoading ? (
        <p className="text-center">Loading</p>
      ) : (
        <>
          <div className="flex flex-col items-center justify-center xl:gap-1 xl:flex-row">
            <small className="font-medium text-gray-400 uppercase">
              ip address:
            </small>
            <p className="font-medium capitalize">{ipInfo?.ip}</p>
          </div>
          <div className="flex flex-col items-center justify-center xl:gap-1 xl:flex-row info-border">
            <small className="font-medium text-gray-400 uppercase">
              location:
            </small>
            <p className="font-medium capitalize">
              {ipInfo?.location?.city}, {ipInfo?.location?.region}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center xl:gap-1 xl:flex-row info-border">
            <small className="font-medium text-gray-400 uppercase">
              timezone:
            </small>
            <p className="font-medium capitalize">
              UTC {ipInfo?.location.timezone}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center xl:gap-1 xl:flex-row info-border">
            <small className="font-medium text-gray-400 uppercase">isp: </small>
            <p className="font-medium capitalize">{ipInfo?.isp}</p>
          </div>
        </>
      )}
    </div>
  )
}

export default Banner
