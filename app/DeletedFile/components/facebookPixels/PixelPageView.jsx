'use client'
import { memo, useEffect } from "react";

const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;
const PixelPageView = () => {
    useEffect(() => {
        if (FB_PIXEL_ID) {
            import("react-facebook-pixel")
                .then((x) => x.default)
                .then((ReactPixel) => {
                    ReactPixel.init(FB_PIXEL_ID);
                    ReactPixel.pageView();
                })
                .catch(console.error);
        }
    }, []);
    return null;
}
export default memo(PixelPageView);