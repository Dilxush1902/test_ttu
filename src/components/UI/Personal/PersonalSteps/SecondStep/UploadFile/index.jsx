import { Typography } from '@mui/material'
import { useRef } from 'react'
import { uploadImage } from 'services/privateCabine'
import cls from './style.module.scss'
import { saveAs } from 'file-saver'

export default function UploadFile({
  label,
  value,
  onChange,
  placeholderImg = '/images/cabineImage/imageUpload.png',
  title,
  name,
  disabled,
  required = false
}) {
  const fileInputRef = useRef()

  const imgUpload = () => {
    if (disabled) {
      const url = process.env.NEXT_PUBLIC_BASE_CDN_URL + value
      saveAs(url)
    } else fileInputRef.current.click()
  }

  const inputFile = (e) => {
    const file = e.target.files[0]
    if (file && file.type.substr(0, 5) === 'image') {
      const formData = new FormData()
      formData.append('file', file)
      uploadImage(formData).then((res) => {
        onChange(name, res?.data?.filename)
      })
    }
  }

  return (
    <div className={cls.uploadImage}>
      <Typography className={cls.diplomImage}>{label}</Typography>
      <div className={cls.download}>
        <div className={cls.icon} onClick={imgUpload}>
          <img
            src={
              value
                ? process.env.NEXT_PUBLIC_BASE_CDN_URL + value
                : placeholderImg
            }
            className={cls.newImage}
          />
          <input
            type='file'
            accept='image/*'
            ref={fileInputRef}
            name={name}
            onChange={inputFile}
          />
          <input value={value} required={required} />
        </div>
        <div className={cls.sizeInfo}>
          <Typography className={cls.content1}>
            {title} rasmini yuklash
            <img
              src='/images/cabineImage/upload.svg'
              className={cls.newImage}
              alt=''
            />
          </Typography>
          {value ? (
            <Typography className={cls.content2}>10 mb</Typography>
          ) : (
            <Typography className={cls.content2}>Maximum 10 mb</Typography>
          )}
        </div>
      </div>
    </div>
  )
}
