export const getAdsObj = function (adsArr:any) {
    if (!adsArr) return;
    const obj = Object.fromEntries(adsArr?.map((item: any) => [item.position, item.image_path]));
    return obj;
  };