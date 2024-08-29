import React, { useEffect, useState } from "react";
import { getPropertyByID } from "../utils/sanity";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import features_bed from "../images/icons/features_bed.png";
import features_bath from "../images/icons/features_bath.png";
import features_land from "../images/icons/features_landsize.png";
import { formatPriceInr } from "../utils/formatting";
import { urlFor } from "../utils/imageUrl";
import { getYouTubeVideoId } from "../utils/helper";

const Property = () => {
  const _id = useParams().id;

  const [property, setProperty] = useState({});
  const [mainImage, setMainImage] = useState("check");

  useEffect(() => {
    getPropertyByID(_id)
      .then((data) => {
        setProperty(data);
        setMainImage(urlFor(data.image).url());
      })
      .catch((error) => {
        console.log(error);
      });
  }, [_id]);

  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="pb-8 max-md:pb-6 max-sm:pb-0 bg-gradient-to-br from-[#048853] to-[#02452A]">
        <Navbar />
      </div>

      <div className="grid flex-1 grid-cols-2 px-20 py-10 max-sm:p-4 max-md:p-8 max-md:grid-cols-1">
        <div className="flex flex-col items-center m-10 max-md:m-4">
          <div className="flex items-center justify-center flex-1 w-full h-full">
            {mainImage &&
            mainImage.length > 0 &&
            (mainImage.includes("youtube") ||
              mainImage.includes("youtu.be") ||
              mainImage.includes("vimeo") ||
              mainImage.includes("vimeo.com")) ? (
              <iframe
                src={
                  "https://www.youtube.com/embed/" + property?.youtubeVideoId ??
                  getYouTubeVideoId(property?.youtubeVideoLink)
                }
                title={property?.title + "_video"}
                className="w-full h-full min-h-[320px] py-1"
                allowFullScreen
              />
            ) : (
              <img
                className="object-contain object-center h-full"
                src={mainImage}
                alt={property?.title}
              />
            )}
          </div>

          {(property?.images?.length || property?.youtubeVideoLink) && (
            <div className="flex w-full h-32 overflow-x-auto snap thin-x-scrollbar max-sm:h-14">
              {property?.images?.length > 0 &&
                property?.images?.map((img, index) => (
                  <div
                    key={index}
                    className="w-full h-full border-2 basis-1/4 flex-shrink-0 border-white hover:border-[#048853]"
                  >
                    <img
                      onClick={(e) => setMainImage(urlFor(img).url())}
                      src={urlFor(img).url()}
                      alt={property?.title + "_img_" + index}
                      className="object-contain object-center w-full h-full hover:cursor-pointer"
                    />
                  </div>
                ))}
              {property?.youtubeVideoLink && (
                <div
                  onClick={(e) => setMainImage(property?.youtubeVideoLink)}
                  className="w-full h-full border-2 basis-1/4 flex-shrink-0 relative group border-white hover:border-[#048853]"
                >
                  {property?.youtubeVideoId ? (
                    <img
                      className="object-contain object-center w-full h-full hover:cursor-pointer"
                      title="example"
                      src={`https://img.youtube.com/vi/${property?.youtubeVideoId}/hqdefault.jpg`}
                      alt="example2"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full bg-white">
                      <h1 className="font-bold text-[#923c3c] text-[32px]">
                        Video
                      </h1>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-[#0000003f] pointer-events-none">
                    <span className="absolute text-white text-[32px] transform -translate-x-1/2 -translate-y-1/2 material-symbols-outlined top-1/2 left-1/2">
                      play_circle
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="flex flex-col p-10 max-md:p-4">
          <h1 className="text-[48px] max-sm:text-[24px] font-bold">
            {property?.title}
          </h1>
          <h2 className="text-[20px] max-sm:text-[16px] font-medium">
            {property?.location}
          </h2>

          <div className="flex-1 w-full">
            <p className="mt-4 max-sm:text-[14px]">{property?.description}</p>
            <h1 className="text-[36px] max-sm:text-[24px] font-semibold">
              {formatPriceInr(property?.price)}
            </h1>
          </div>

          <div className="flex items-center justify-center p-6">
            <button className="px-5 py-2 text-[24px] max-sm:py-1 max-sm:px-3 max-sm:text-[16px] hover:border-2 hover:shadow-[0_0_14px_1px_gray] font-semibold max-sm:h-12 bg-[#00985B] text-white rounded-lg">
              Contact Agent
            </button>
          </div>

          <div className="flex flex-row items-center justify-between w-full px-4 py-2 mb-6">
            <div className="flex flex-col items-center">
              <div className="flex flex-row items-center">
                <div className="flex items-center justify-center w-6 h-6">
                  <img src={features_bed} className="w-6 h-6" alt="property" />
                </div>
                <p className="text-[14px] max-md:text-[12px] font-semibold ml-2">
                  {property?.bedrooms}
                </p>
              </div>
              <p className="text-[12px]">Bedrooms</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex flex-row items-center">
                <div className="flex items-center justify-center w-6 h-6">
                  <img src={features_bath} className="w-4 h-4" alt="property" />
                </div>
                <p className="text-[14px] max-md:text-[12px] font-semibold ml-2">
                  {property?.bathrooms}
                </p>
              </div>
              <p className="text-[12px]">Bathrooms</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex flex-row items-center">
                <div className="flex items-center justify-center w-6 h-6">
                  <img src={features_land} className="w-6 h-6" alt="property" />
                </div>
                <p className="text-[12px] max-md:text-[10px] font-semibold ml-2">
                  {property?.areaSize}
                </p>
              </div>
              <p className="text-[12px]">Property Size</p>
            </div>
          </div>
        </div>
      </div>

      <Footer showContact />
    </div>
  );
};

export default Property;
