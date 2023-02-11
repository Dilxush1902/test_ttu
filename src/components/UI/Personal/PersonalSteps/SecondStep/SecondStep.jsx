import React, { useEffect, useState, useMemo } from "react";
import cls from "./SecondStep.module.scss";
import PersonalBanner from "../../PersonalBanner/PersonalBanner";
import InputMaskPassport from "components/UI/FormElement/InputMask/InputMaskPassport";
import InputMaskSeria from "components/UI/FormElement/InputMask/InputMaskSeria";
import { Container, InputAdornment, Typography } from "@mui/material";
import CustomButton from "components/UI/Button/CustomButton";
import { ChevronLeft } from "@mui/icons-material";
import FTextfield from "components/UI/FormElement/Input/FTextField";
import { useRouter } from "next/router";
import cookies from "js-cookie";
import FSelect from "components/UI/FormElement/Select/FSelect";
import { useIsMobile } from "utils/getWindowSize";
import ModalPage from "./Modal/Modal";
import { useForm } from "react-hook-form";
import { getFacultySpeciality } from "services/facultyCost";
import UploadFile from "./UploadFile";
import { useOrder } from "services/order";
import { HintIcon } from "/public/icons/icons";
import HintModal from "./HintModal/Modal";

const blockInvalidChar = (e) =>
  ["e", "E", "+", "-", "*", "/"].includes(e.key) && e.preventDefault();

const SecondStep = ({ handleChangeNextStep, user, setActiveStep }) => {
  const isMobile = useIsMobile(850);
  const router = useRouter();
  const [inputDisable, setInputDisable] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const userId = cookies.get("userId");
  const [hintOpen, setHintOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const [isLoading, setIsLoading] = useState(false);
  const [faculties, setFaculties] = useState();
  const { control, handleSubmit, register, setValue, watch, reset } = useForm();
  const { orderMutation } = useOrder({
    userId,
    orderMutationOptions: {
      onSuccess: (res) => {
        setIsLoading(false);
        handleOpen();
        setInputDisable(res.data.count >= 2);
        handleChangeNextStep(res.data.count === 2 ? 2 : 1);
      },
    },
  });

  const onChangeFile = (key, value) => {
    setValue(key, value);
  };

  const submitSecondStep = (data) => {
    setIsLoading(true);
    
    orderMutation.mutate({
      data: {
        passport_series: data?.passport_series
          .toUpperCase()
          .replaceAll(" ", ""),
        passport_number: data?.passport_number.replaceAll(" ", ""),
        passport_pinfl: data?.passport_pinfl.replaceAll(" ", ""),
        faculty: data?.faculty.label,
        speciality: data?.speciality?.label,
        education_type: data?.education_type?.label,
        count: 2,
        diplom_url: data?.diplom_url,
        certificate_url: data?.certificate_url,
        certificate_url: data?.certificate_url,
      },
    });
  };

  useEffect(() => {
    getFacultySpeciality().then((res) => {
      setFaculties(
        res?.data?.facultyWithSpecialities.map((item) => ({
          value: item.id,
          label: item.name_uz,
          ...item,
        }))
      );
    });
  }, []);

  useEffect(() => {
    if (user && faculties && faculties.length > 0) {
      const faculty = faculties.find((item) => item.name_uz === user?.faculty);

      const speciality = faculty?.specialities?.find(
        (item) => item.name_uz === user?.speciality
      );

      reset({
        passport_series: user.passport_series.toUpperCase(),
        passport_number: user.passport_number,
        passport_pinfl: user.passport_pinfl,
        faculty: faculty
          ? {
              value: faculty?.id,
              label: faculty?.name_uz,
              ...faculty,
            }
          : null,

        diplom_url: user.diplom_url,
        certificate_url: user.certificate_url,
        certificate_url: user.certificate_url,
        speciality: speciality
          ? {
              value: speciality?.id,
              label: speciality?.name_uz,
              ...speciality,
            }
          : null,
        education_type: user?.education_type
          ? {
              value: user?.education_type,
              label: user?.education_type,
            }
          : null,
      });
      setValue();
      setInputDisable(user.count >= 2);
    }
  }, [user, faculties]);

  useEffect(() => {
    if (user && user.count === 1) {
      setValue("speciality", null);
      setValue("education_type", null);
    }
  }, [watch("faculty"), user]);

  const specs = useMemo(
    () =>
      watch("faculty")
        ? watch("faculty")?.specialities?.map((item) => ({
            value: item.id,
            label: item.name_uz,
            ...item,
          }))
        : [],
    [watch("faculty")]
  );

  const eduType = useMemo(
    () =>
      watch("speciality")
        ? watch("speciality")?.education_type?.map((item) => ({
            value: item.name_uz,
            label: item.name_uz,
          }))
        : [],
    [watch("speciality")]
  );

  

  return (
    <div className={cls.root}>
      {isMobile[0] && <PersonalBanner />}
      <Container className={cls.container}>
        <div className={cls.header}>
          <ChevronLeft
            onClick={() => router.push("/personal")}
            className={cls.chevronIcon}
          />
          <Typography
            className={cls.title}
            onClick={() => isMobile[0] && router.push("/personal")}
          >
            O’qishga ariza yuborish{" "}
          </Typography>
        </div>
        <form onSubmit={handleSubmit(submitSecondStep)} className={cls.form}>
          <div className={cls.inputMask}>
            <InputMaskSeria
              control={control}
              name="passport_series"
              label="Pasport seriya"
              disabled={inputDisable}
              className={cls.seria}
              mask="aa"
              required
              typeForTextfield={"text"}
            />
            <InputMaskSeria
              control={control}
              name="passport_number"
              fullWidth
              label="Pasport nomer"
              typeForTextfield={"tel"}
              disabled={inputDisable}
              className={cls.passportNumber}
              mask="9999999"
              required
            />
          </div>
          <div className={cls.pinfl}>
            <InputMaskSeria
              control={control}
              name="passport_pinfl"
              fullWidth
              label="PINFL"
              disabled={inputDisable}
              mask="99999999999999"
              typeForTextfield={"tel"}
              required
              error={
                watch("passport_pinfl")?.length >= 1 &&
                watch("passport_pinfl")?.length !== 14
              }
              helperText={
                watch("passport_pinfl")?.length !== 14 &&
                watch("passport_pinfl")?.length >= 1
                  ? "PINFL(14 raqamdan iborat)"
                  : ""
              }
            />

            <span className={cls.hintIcon} onClick={() => setHintOpen(true)}>
              <HintIcon className={cls.hintSVG} />
            </span>
          </div>
          <div className={cls.upload}>
            <UploadFile
              name="diplom_url"
              placeholderImg="/images/cabineImage/imageUpload.png"
              value={watch("diplom_url")}
              onChange={onChangeFile}
              title="Diplom"
              label="Diplom (majburiy)"
              disabled={inputDisable}
              required
            />
            <UploadFile
              name="certificate_url"
              placeholderImg="/images/cabineImage/imageUpload.png"
              value={watch("certificate_url")}
              onChange={onChangeFile}
              title="DTM Sertifikati"
              label="Sertfifikat (ixitiyoriy)"
              disabled={inputDisable}
              // required
            />
          </div>
          <div className={cls.select}>
            <FSelect
              control={control}
              name="faculty"
              options={faculties}
              disabled={inputDisable}
              label="Fakultet"
              required
            />
          </div>
          <div className={cls.select}>
            <FSelect
              control={control}
              name="speciality"
              options={specs}
              disabled={inputDisable}
              label="Yo'nalish"
              required
            />
          </div>
          <div className={cls.select}>
            <FSelect
              control={control}
              name="education_type"
              options={eduType}
              disabled={inputDisable}
              label="Ta'lim shakli"
              required
            />
          </div>
          <div
            className={cls.button}
            style={{
              display: inputDisable && "none",
            }}
          >
            <CustomButton type="submit" fullWidth className={cls.btn}>
              Kiyingi bosqichga o'tish
            </CustomButton>
          </div>
          <ModalPage
            setInputDisable={setInputDisable}
            setActiveStep={setActiveStep}
            handleClose={handleClose}
            open={open}
          />
          <HintModal open={hintOpen} handleClose={() => setHintOpen(false)} />
        </form>
      </Container>
    </div>
  );
};

export default SecondStep;
