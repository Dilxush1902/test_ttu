import { Box, Container } from '@mui/material'
import CustomButton from 'components/UI/Button/CustomButton'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { useState } from 'react'
import DrawerItem from './Drawer/DrawerItem'
import styles from './style.module.scss'
import Modal from '@mui/material/Modal'
import Registration from '../Auth/Registration/Registration'
import Login from '../Auth/Login/Login'
import ForgotPasswordCode from '../Auth/ForgotPasswordCode/ForgotPasswordCode'
import RegistrationCode from '../Auth/RegistrationCode/RegistrationCode'
import ForgotPasswordPhone from '../Auth/ForgotPasswordPhone/ForgotPasswordPhone'
import ForgotPassword from '../Auth/ForgotPassword/ForgotPassword'
import { useIsMobile } from 'utils/getWindowSize'

export function Header() {
  const userId = cookies.get('userId')
  const isMobile = useIsMobile(600)
  const router = useRouter()
  const [toggle, setToggle] = useState(false)
  const { t } = useTranslation('common')

  //Modals Register
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [phone, setPhone] = useState()

  // //Modal registerCode
  const [registerCode, setRegisterCode] = useState(false)
  const openRegisterCodeModal = () => {
    setRegisterCode(true)
  }

  const closeRegisterCodeModal = () => {
    setRegisterCode(false)
  }
  //Modal Login
  const [openLogin, setOpenLogin] = useState(false)
  const handleOpenLogin = () => setOpenLogin(true)
  const handleCloseLogin = () => setOpenLogin(false)

  ///Modal Forgot password phone number
  const [telNumber, setTelNumber] = useState()
  const [phoneNumber, setPhoneNumber] = useState(false)
  const handleOpenPhoneNumber = () => setPhoneNumber(true)
  const handleClosePhoneNumber = () => setPhoneNumber(false)
  //Modal Forgot password code
  const [openCode, setOpenCode] = useState(false)
  const handleOpenCode = () => setOpenCode(true)
  const handleCloseCode = () => setOpenCode(false)

  /// Modal Forgot password
  const [passwordInp, setPasswordInp] = useState(false)
  const handleOpenForgetPass = () => setPasswordInp(true)
  const handleCloseForgetPass = () => setPasswordInp(false)

  const registerBtn = () => {
    if (!isMobile[0]) {
      handleOpen()
    } else {
      router.push('/registration')
    }
  }

  const handleChangeOpen = () => {
    setToggle(true)
  }

  const handleChangeClose = () => {
    setToggle(false)
  }
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <div className={styles.box}>
          <Link href='/'>
            <a className={styles.logo}>
              <img src='/images/bannerImage/logo.png' alt='' />
            </a>
          </Link>

          <div className={styles.icon}>
            <div
              className={styles.button}
              style={{ display: router.route === '/personal' && 'none' }}
            >
              {userId ? (
                <CustomButton
                  onClick={() => router.push('/personal')}
                  className={styles.btn}
                  fullWidth
                >
                  Shaxsiy kabinet
                </CustomButton>
              ) : (
                <CustomButton
                  onClick={registerBtn}
                  className={styles.btn}
                  fullWidth
                >Ariza qoldirish</CustomButton>
              )}
            </div>
            <img
              src='/images/bannerImage/menuIcon.png'
              // src="/images/headerImage/menuIcon.png"
              onClick={handleChangeOpen}
              alt=''
            />
          </div>
        </div>
        <Box className={styles.drawer}>
          <DrawerItem open={toggle} onClose={handleChangeClose} />
        </Box>
      </Container>

      {/*Register Modal */}
      <Modal open={open} onClose={() => handleClose()}>
        <div className={styles.register}>
          <Registration
            handleOpenLogin={handleOpenLogin}
            handleClose={handleClose}
            handleOpenRegister={handleOpen}
            openRegisterCodeModal={openRegisterCodeModal}
            setPhone={setPhone}
          />
        </div>
      </Modal>

      {/* RegsiterCode Modal */}
      <Modal open={registerCode}>
        <div className={styles.styleRegisterCode}>
          <RegistrationCode
            openRegisterCodeModal={openRegisterCodeModal}
            closeRegisterCodeModal={closeRegisterCodeModal}
            phone={phone}
          />
        </div>
      </Modal>

      {/*Login Modal */}
      <Modal open={openLogin} onClose={() => handleCloseLogin()}>
        <div className={styles.stylelogin}>
          <Login
            handleCloseLogin={handleCloseLogin}
            handleOpenPhoneNumber={handleOpenPhoneNumber}
          />
        </div>
      </Modal>

      {/* Forgot password phone number */}
      <Modal open={phoneNumber} onClose={() => handleClosePhoneNumber()}>
        <div className={styles.stylePhoneNumber}>
          <ForgotPasswordPhone
            handleOpenCode={handleOpenCode}
            handleClosePhoneNumber={handleClosePhoneNumber}
            setTelNumber={setTelNumber}
          />
        </div>
      </Modal>
      {/*Forgot paswword code Modal */}
      <Modal open={openCode} onClose={() => handleCloseCode()}>
        <div className={styles.styleCode}>
          <ForgotPasswordCode
            telNumber={telNumber}
            handleCloseCode={handleCloseCode}
            handleOpenPhoneNumber={handleOpenPhoneNumber}
            handleOpenForgetPass={handleOpenForgetPass}
          />
        </div>
      </Modal>

      {/* Forgot Password Input */}
      <Modal open={passwordInp} onClose={() => handleCloseForgetPass()}>
        <div className={styles.stylePhoneNumber}>
          <ForgotPassword
            telNumber={telNumber}
            handleOpenLogin={handleOpenLogin}
            handleCloseForgetPass={handleCloseForgetPass}
          />
        </div>
      </Modal>
    </header>
  )
}
