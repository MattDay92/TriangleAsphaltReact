// AdminCarouselUpload.js
import React, { useState, useEffect } from "react";
import {
    ref,
    push,
    onValue,
    remove,
    update,
    getDatabase
} from "firebase/database";
import {
    ref as storageRef,
    uploadBytes,
    getDownloadURL,
    deleteObject
} from "firebase/storage";

export default function AdminCarouselUpload({ storage }) {
    const [image, setImage] = useState(null);
    const [caption, setCaption] = useState("");
    const [slides, setSlides] = useState([]);

    const db = getDatabase();

    // Fetch slides from Realtime DB
    useEffect(() => {
        const slidesRef = ref(db, "slides");
        onValue(slidesRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const formatted = Object.keys(data).map((key) => ({
                    id: key,
                    ...data[key],
                }));
                setSlides(formatted);
            } else {
                setSlides([]);
            }
        });
    }, []);

    // Upload new slide
    const handleUpload = async () => {
        if (!image) return;

        const imgRef = storageRef(storage, `slides/${image.name}`);
        await uploadBytes(imgRef, image);
        const url = await getDownloadURL(imgRef);
        await push(ref(db, "slides"), {
            url,
            caption,
            storagePath: `slides/${image.name}`,
        });

        setImage(null);
        setCaption("");
    };

    // Delete a slide
    const deleteSlide = async (id, storagePath) => {
        await remove(ref(db, `slides/${id}`));
        if (storagePath) {
            const fileRef = storageRef(storage, storagePath);
            await deleteObject(fileRef);
        }
    };

    // Update caption
    const updateCaption = (id, newCaption) => {
        update(ref(db, `slides/${id}`), { caption: newCaption });
    };

    return (
        <div className="container my-4">
            <h2>Admin Carousel Manager</h2>

            {/* Upload Form */}
            <div className="mb-3">
                <input
                    type="file"
                    className="form-control mb-2"
                    onChange={(e) => setImage(e.target.files[0])}
                />
                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Enter caption"
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                />
                <button className="btn btn-primary" onClick={handleUpload}>
                    Upload Slide
                </button>
            </div>

            {/* Current Slides */}
            <div className="row">
                {slides.map((slide) => (
                    <div key={slide.id} className="col-md-4 mb-3">
                        <div className="card">
                            <img
                                src={slide.src}
                                className="card-img-top"
                                alt="Slide"
                            />
                            <div className="card-body">
                                {/* Display caption */}
                                <p className="card-text">{slide.caption}</p>

                                {/* Edit caption */}
                                <input
                                    type="text"
                                    defaultValue={slide.caption}
                                    className="form-control mb-2"
                                    onBlur={(e) => updateCaption(slide.id, e.target.value)}
                                />

                                <button
                                    onClick={() => deleteSlide(slide.id, slide.storagePath)}
                                    className="btn btn-danger btn-sm"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
