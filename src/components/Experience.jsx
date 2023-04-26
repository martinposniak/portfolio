import {  VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import remaxLogo from "../assets/company/remax-logo-no-background-2.png";
import mitreLogo from "../assets/company/grupo-mitre-logo-no-background.png";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useTranslation } from 'react-i18next';


const ExperienceCard = () => {
  const { t } = useTranslation(["experiencias"]);
  return (
    <VerticalTimeline>
    <VerticalTimelineElement
    contentStyle={{
      background: "#1d1836",
      color: "#fff",
    }}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img
          src={remaxLogo}
          alt="remax logo"
          className='iconBackground w-[100%] h-[100%] object-contain'
        />
      </div>
    }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{t("empresaDos")}</h3>
        <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>{t("puestoLaboralDos")}</p>
        <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>{t("antigüedadDos")}</p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        <li>{t("puntoUno")}</li>
        <li>{t("puntoDos")}</li>
        <li>{t("puntoTres")}</li>
        <li>{t("puntoCuatro")}</li>
      </ul>
    </VerticalTimelineElement>
    <VerticalTimelineElement
    contentStyle={{
      background: "#1d1836",
      color: "#fff",
    }}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img
          src={mitreLogo}
          alt="grupo mitre logo"
          className='iconBackground w-[100%] h-[100%] object-contain'
        />
      </div>
    }
    >
    <div>
        <h3 className='text-white text-[24px] font-bold'>{t("empresaUno")}</h3>
        <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>{t("puestoLaboral")}</p>
        <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>{t("antigüedadUno")}</p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2 text-white'>
        <li>{t("puntoCinco")}</li>
        <li>{t("puntoSeis")}</li>
        <li>{t("puntoSiete")}</li>
        <li>{t("puntoOcho")}</li>
      </ul>
    </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

const Experience = () => {
  const { t } = useTranslation(["experiencias"]);
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
        {t("hechoHastaAhora")}
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
        {t("experienciaLaboral")}
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
            <ExperienceCard />
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");