import React, { useEffect } from "react";

const InstagramEmbed = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.async = true;
        script.src = "//www.instagram.com/embed.js";
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="instagram-div">
            <blockquote className="instagram-media" title="Triangle Asphalt Instagram" data-instgrm-permalink="https://www.instagram.com/triangleasphalt/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" />
        </div>
    );
};

export default InstagramEmbed;
