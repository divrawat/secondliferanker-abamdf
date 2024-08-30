import { useEffect } from 'react';

const AdSense = () => {
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error('AdSense error:', e);
        }
    }, []);

    return (
        <div className="adsense">
            <ins
                className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-1721485376950080"
                data-ad-slot="9515651808"
                data-ad-format="auto"
            ></ins>
        </div>
    );
};

export default AdSense;
