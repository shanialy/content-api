// export interface InviewPortType {
//   distanceFromEnd: number;
//   callback: () => boolean;
//   target: HTMLElement;
// }

const checkInViewIntersectionObserver = ({
  target,
  distanceFromEnd,
  callback,
}) => {
  const _funCallback = (
    entries,
    observer
  ) => {
    entries.map((entry) => {
      if (entry.isIntersecting) {
        // NEED CALLBACK WILL RETURN BOOLEAN ---- IF TRUE WE WILL UNOBSERVER AND FALSE IS NO
        const unobserve = callback();
        unobserve && observer.unobserve(entry.target);
      }
      return true;
    });
  };

  // _checkBrowserSupport-----
  if (typeof window.IntersectionObserver === "undefined") {
    console.error(
      "window.IntersectionObserver === undefined! => Your Browser is Notsupport"
    );
    return;
  }
  const options = {
    root: null,
    rootMargin: `${distanceFromEnd}px 0px`,
    threshold: 0,
  };
  const observer = new IntersectionObserver(_funCallback, options);
  target && observer.observe(target);
};

export default checkInViewIntersectionObserver;
