import React, { useRef, useState } from 'react'
import styles from './UploadImage.module.scss';

const UploadImage = ({ prevImg, setPrevImg, files, setFiles }) => {
    const fileRef = useRef();
    const dragRef = useRef(null);

    const handleFileBtnClick = () => {
        fileRef.current.click();
    };

    const process = (file) => {
        if (!file) return;
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = function (event) {
            const imgElement = document.createElement("img");
            imgElement.src = event.target.result;

            imgElement.onload = function (e) {
                const canvas = document.createElement("canvas");
                const MAX_WIDTH = 600;

                const scaleSize = MAX_WIDTH / e.target.width;
                canvas.width = MAX_WIDTH;
                canvas.height = e.target.height * scaleSize;

                const ctx = canvas.getContext("2d");

                ctx.drawImage(e.target, 0, 0, canvas.width, canvas.height);

                const srcEncoded = ctx.canvas.toDataURL(e.target, "image/jpeg");
                setPrevImg(srcEncoded);
            };
        };
    };

    const handleFile = async (e) => {
        e.preventDefault();
        for (let i = 0; i < e.target.files.length; i++) {
            setFiles((prevFiles) => {
                return [...prevFiles, e.target.files[i]];
            });
        }
        await process(e.target.files[0]);
    };

    const handleDrag = (e, type) => {
        e.preventDefault();
        e.stopPropagation();
        if (type === "dragOver") dragRef.current.classList.add("active");
        else if (type === "dragLeave") dragRef.current.classList.remove("active");
    };

    const handleDrop = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        dragRef.current.classList.remove("active");
        const uploadedFiles = e.dataTransfer.files;
        dragRef.current.classList.add("uploading");
        for (let i = 0; i < uploadedFiles.length; i++) {
            setFiles((prevFiles) => {
                return [...prevFiles, uploadedFiles[i]];
            });
        }
        await process(uploadedFiles[0]);
        dragRef.current?.classList.remove("uploading");
    };

    return (
        <div>
            <div className={styles.File_upload}>
                {files.length === 0 ? (
                    <div className={styles.upload_img}>
                        <div
                            ref={dragRef}
                            className={styles.drop_area}
                            onDragOver={(e) => handleDrag(e, "dragOver")}
                            onDragLeave={(e) => handleDrag(e, "dragLeave")}
                            onDrop={handleDrop}
                        >
                            <h2>Drag & Drop your profile photo here</h2>
                            <span>OR</span>
                            <div className={styles.browse_btn} onClick={handleFileBtnClick}>
                                Browse Files
                            </div>
                            <input
                                ref={fileRef}
                                type="file"
                                onChange={handleFile}
                                multiple
                                hidden
                                id="myFile"
                                name="filename"
                            />
                        </div>
                    </div>
                ) : (
                    <div className={styles.image_preview}>
                        <img id="prev-img" src={prevImg} alt="" />
                    </div>
                )}
            </div>
        </div >
    )
}

export default UploadImage