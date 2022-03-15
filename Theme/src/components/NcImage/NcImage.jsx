import React, {
  useEffect,
  useRef,
  useState,
} from "react";
import checkInViewIntersectionObserver from "../../utils/isInViewPortIntersectionObserver";
import PlaceIcon from "./PlaceIcon";
import LoadingVideo from "../LoadingVideo/LoadingVideo";

const NcImage = ({
  containerClassName = "",
  alt = "nc-imgs",
  src = "",
  className = "object-cover w-full h-full",
  source_domain,
  date_download,
  ...args
}) => {

  //getting source_domain and date_download from PostFeaturedMedia


  let isMounted = false;
  const _containerRef = useRef(null);
  let _imageEl = null;



  const [__src, set__src] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);

  const _initActions = async () => {
    _checkInViewPort();
  };

  const _checkInViewPort = () => {
    if (!_containerRef.current) return;
    checkInViewIntersectionObserver({
      target: _containerRef.current ,
      distanceFromEnd: 0,
      callback: _imageOnViewPort,
    });
  };

  const _imageOnViewPort = () => {
    if (!src) {
      <LoadingVideo/>
    }
    _imageEl = new Image();
    if (_imageEl) {
      _imageEl.src = src;
      _imageEl.addEventListener("load", _handleImageLoaded);
    }
    return true;
  };

  const _handleImageLoaded = () => {
    if (!isMounted) return;
    setImageLoaded(true);
    set__src(src);
  };

  useEffect(() => {
    isMounted = true;
    _initActions();
    return () => {
      isMounted = false;
    };
  }, [src]);

  const _renderPlayingBtn = () => {

    return (
      <>


      <div
      className={`${className} flex items-center justify-center bg-neutral-200 dark:bg-neutral-6000 text-neutral-100 dark:text-neutral-500` }  style={{backgroundColor : "purple"}}
    >
      <div className="h-2/4 max-w-[50%]">
    
      <PlaceIcon/>
     
      </div>
    </div>
    </>
    );
  };

  const renderLoadingPlaceholder = () => {
    return (
      <div
        className={`${className} flex items-center justify-center bg-neutral-200 dark:bg-neutral-6000 text-neutral-100 dark:text-neutral-500`}
      >
        <div className="h-2/4 max-w-[50%]">
          <LoadingVideo />
        </div>
      </div>
    );
  };

  return (
    <div
      className={`nc-NcImage ${containerClassName}`}
      data-nc-id="NcImage"
      ref={_containerRef}

    >
      
      {__src && imageLoaded ? (
         <img src={__src} className={className} alt={alt} {...args}  />      
      ) : (
        renderLoadingPlaceholder()
      )}
    </div>
  );
};

export default NcImage;
