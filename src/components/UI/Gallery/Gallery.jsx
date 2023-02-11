import cls from "./style.module.scss";
import { useState, useRef, useMemo } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import cookies from "js-cookie";
import { privateCabine, uploadImage } from "services/privateCabine";
import { CircularProgress } from "@mui/material";

const Gallery = ({
  gallery = [],
  setGallery,
  notEditable,
  multiple = true,
  width = 140,
  height = 90,
  aspectRatio,
  rounded = false,
  style,
  accept = "",
  maxSizeText = "max.size.4mb",
}) => {
  const userId = cookies.get("userId");

  const inputRef = useRef(null);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  // const dispatch = useDispatch();
  // const { t } = useTranslation();

  const isShow = useMemo(
    () => multiple || !gallery.length,
    [gallery, multiple]
  );
  const imageLinks = useMemo(() => {
    return gallery?.map(
      (image) => `${process.env.NEXT_PUBLIC_BASE_CDN_URL}/${image}`
    );
  }, [gallery]);

  const [loading, setLoading] = useState(false);

  const addNewImage = (image) => {
    setGallery([...gallery, image]);
  };

  const imageClickHandler = (index) => {
    setSelectedImageIndex(index);
    setPreviewVisible(true);
  };

  const inputChangeHandler = (e) => {
    // const SIZE_4_MB = 4194304;
    const SIZE_1_MB = 1194304;
    setLoading(true);
    var input = e.target;
    const file = input.files[0];
    if (!file) return setLoading(false);

    if (file.size > SIZE_1_MB) {
      dispatch(showAlert(t("File size must be less than 1MB"), "warning"));
      setLoading(false);
      return;
    }

    const data = new FormData();
    data.append("file", file);
    uploadImage()
      .then((res) => {
        privateCabine(userId, {
          data: {
            certificate_url: res?.data?.filename,
          },
        });
      })
      .catch((e) => console.error(e));
  };


  return (
    <div className={cls.Gallery} style={style}>
      {!notEditable && isShow && (
        <div className="mr-2">
          <div
            className="add-block block"
            style={
              aspectRatio
                ? { width, aspectRatio, borderRadius: rounded ? "50%" : 8 }
                : { width, height, borderRadius: rounded ? "50%" : 8 }
            }
            onClick={() => inputRef.current.click()}
          >
            <div className="add-icon">
              {!loading ? (
                <>
                  <AddCircleOutlineIcon style={{ fontSize: "35px" }} />
                  <p className="text-sm text-center px-3">MaxSize</p>
                </>
              ) : (
                <CircularProgress />
              )}
            </div>

            <input
              type="file"
              className="hidden"
              ref={inputRef}
              onChange={() => {
                inputChangeHandler;
              }}
              accept={accept}
              // multiple={multiple}
            />
          </div>

          <span
            className="mt-2 text-primary text-base"
            onClick={() => inputRef.current.click()}
            style={{ cursor: "pointer" }}
          >
            add.photo
          </span>
        </div>
      )}
      {imageLinks?.map((link, index) => (
        <div
          className="block mr-2"
          style={
            aspectRatio
              ? { width, aspectRatio, borderRadius: rounded ? "50%" : 8 }
              : { width, height, borderRadius: rounded ? "50%" : 8 }
          }
          onClick={() => imageClickHandler(index)}
          key={link}
        >
          <img src={link} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
