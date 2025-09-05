import React, { useState } from "react";
import ProjectItem from "./ProjectItem";
import "./ProjectsPage.css";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
  const [modalData, setModalData] = useState(null); // 선택한 프로젝트 데이터

  const projects = [
    {
      title: "요리왕 쿡이(Mobile)",
      imageSrc: "/image/refrAI_icon_circle.png",
      link: "/국비발표(김민성^J오시헌^J전지후^J천태현).pdf",
      video: "https://youtube.com/shorts/rjOEYD6PggI?feature=share",
      period: "2025.8 ~  (Team)",
      stack: "React-Native + SpringBoot + Python",
      isInProgress: true,
      description: "냉장고에 있는 재료를 활용해 최적의 레시피를 추천하는 AI 기반 앱 서비스입니다. 머신러닝을 활용하여 사용자의 취향과 식재료를 분석해 맞춤형 요리법을 제안합니다.(현재 AI기능 구현중) 웹 서비스와 데이터 연동이 가능합니다."
    },
    {
      title: "요리왕 쿡이",
      imageSrc: "/image/refrAI_icon_circle.png",
      link: "",
      video: "",
      period: "2025.6 ~ 2025.8 (Team)",
      stack: "React + SpringBoot + Python",
      isInProgress: false,
      description: "냉장고에 있는 재료를 활용해 최적의 레시피를 추천하는 AI 기반 웹 서비스입니다. 머신러닝을 활용하여 사용자의 취향과 식재료를 분석해 맞춤형 요리법을 제안합니다."
    },
    {
      title: "우리동네 자취생활",
      imageSrc: "/image/icon.png",
      link: "http://my-react-locationboard-app.s3-website.ap-northeast-2.amazonaws.com/",
      video: "",
      period: "2025.7 (Single)",
      stack: "React + SpringBoot",
      isInProgress: false,
      description: "혼자사는 자취생들을 위한 위치 찾기와 커뮤니티 웹 서비스입니다. 주변 상권 정보, 원룸 찾기, 자취 노하우 공유 등 자취생활에 필요한 모든 정보를 한 곳에서 제공합니다."
    },
    {
      title: "약쏙(노인 약 복용 알람)",
      imageSrc: "/image/medi_icon.png",
      link: "/캡스톤디자인(약쏙).pdf",
      video: "https://youtube.com/shorts/HZQ0I_r3aq0?feature=share",
      period: "2024.9 ~ 2024.12 (Team)",
      stack: "Android Studio",
      isInProgress: false,
      description: "노인분들을 위한 약 복용시간 알람 어플리케이션입니다. 사용자가 나이가 있는 시니어 분들이기 때문에 직접 입력보다는 선택식으로 입력을 받아 사용성을 높였습니다."
    },
    {
      title: "무단횡단 방지 시스템",
      imageSrc: "/image/trafficlight_icon2.png",
      link: "/IOT보안프로그래밍(천태현).pdf",
      video: "https://youtube.com/shorts/GhdlKTsx4bY?feature=share",
      period: "2024.4 ~ 2024.6 (Single)",
      stack: "RaspberryPI + Python",
      isInProgress: false,
      description: "무단횡단 사고율을 줄이기 위해 라즈베리파이와 파이썬 웹 서버를 활용하여 제작한 IoT 시스템입니다. 센서를 통해 무단횡단을 감지하고 실시간으로 경고 메시지를 전송합니다."
    },
    {
      title: "TAXIPOOL",
      imageSrc: "/image/TAXIPOOL_icon.png",
      link: "/소프트웨어공학 8조 (택시카풀).pdf",
      video: "https://youtube.com/shorts/DDLU24gK8hA?feature=share",
      period: "2023.9 ~ 2023.12 (Team)",
      stack: "Android Studio",
      isInProgress: false,
      description: "택시를 혼자 타기가 금액적으로 부담스러울때 택시를 같이 타고 갈 인원을 모으는 커뮤니티 어플리케이션입니다. 실시간 매칭 시스템으로 효율적인 카풀 서비스를 제공합니다."
    },
    // ... 나머지 프로젝트
  ];

  const handleOpenModal = (project) => {
    setModalData(project);
  };

  const handleCloseModal = () => {
    setModalData(null);
  };

  return (
    <div className="projects-page">
      <div className="project-container">
        {projects.map((project, index) => (
          <ProjectItem
            title={project.title}
            imageSrc={project.imageSrc}
            link={project.link}
            period={project.period}
            stack={project.stack}
            isInProgress={project.isInProgress}
            description={project.description}
            onOpenModal={() => handleOpenModal(project)}
          />
        ))}
      </div>

      {/* 모달 */}
      {modalData && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{modalData.title}</h2>
            <div className="project-period"><strong>{modalData.period}</strong></div>
            <div className="project-stack">개발 언어: {modalData.stack}</div>
            <p>{modalData.description}</p>
            {modalData.video !== "" && (
                <div>
                    <Link to={modalData.video}>
                    <div className="modal-video">
                        비디오 보기
                    </div>
                    </Link>
                </div>
            )}
            <button onClick={handleCloseModal}>닫기</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
