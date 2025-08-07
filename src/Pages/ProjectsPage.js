import ProjectItem from "./ProjectItem"
import "./ProjectsPage.css"

const ProjectsPage = () => {
    return(
        <div className="projects-page">
            <h1 className="projects-title">My Projects</h1>
            <div className="project-container">
                    <ProjectItem
                            title="냉장고 레시피 추천 AI"
                            imageSrc="/image/ai_recipe_icon.png"
                            link=""
                            period="2025.6 ~ 2025.8 (Team)"
                            stack="React + SpringBoot + Python"
                            isInProgress={true}
                            description="냉장고에 있는 재료를 활용해 최적의 레시피를 추천하는 AI 기반 웹 서비스입니다. 머신러닝을 활용하여 사용자의 취향과 식재료를 분석해 맞춤형 요리법을 제안합니다."/>

                    <ProjectItem
                        title="우리동네 자취생활"
                        imageSrc="/image/icon.png"
                        link="http://my-react-locationboard-app.s3-website.ap-northeast-2.amazonaws.com/"
                        period="2025.7 (Single)"
                        stack="React + SpringBoot"
                        isInProgress={false}
                        description="혼자사는 자취생들을 위한 위치 찾기와 커뮤니티 웹 서비스입니다. 주변 상권 정보, 원룸 찾기, 자취 노하우 공유 등 자취생활에 필요한 모든 정보를 한 곳에서 제공합니다."/>

                    <ProjectItem
                        title="약쏙(노인 약 복용 알람)"
                        imageSrc="/image/medicine_icon.png"
                        link=""
                        period="2024.9 ~ 2024.12 (Team)"
                        stack="Android Studio"
                        isInProgress={false}
                        description="노인분들을 위한 약 복용시간 알람 어플리케이션입니다. 사용자가 나이가 있는 시니어 분들이기 때문에 직접 입력보다는 선택식으로 입력을 받아 사용성을 높였습니다."/>

                    <ProjectItem
                        title="무단횡단 방지 시스템"
                        imageSrc="/image/trafficlight_icon2.png"
                        link="/IOT보안프로그래밍(천태현).pdf"
                        period="2024.4 ~ 2024.6 (Single)"
                        stack="RaspberryPI + Python"
                        isInProgress={false}
                        description="무단횡단 사고율을 줄이기 위해 라즈베리파이와 파이썬 웹 서버를 활용하여 제작한 IoT 시스템입니다. 센서를 통해 무단횡단을 감지하고 실시간으로 경고 메시지를 전송합니다."/>

                    <ProjectItem
                        title="택시 카풀"
                        imageSrc="/image/taxi_icon.png"
                        link=""
                        period="2023.9 ~ 2023.12 (Team)"
                        stack="Android Studio"
                        isInProgress={false}
                        description="택시를 혼자 타기가 금액적으로 부담스러울때 택시를 같이 타고 갈 인원을 모으는 커뮤니티 어플리케이션입니다. 실시간 매칭 시스템으로 효율적인 카풀 서비스를 제공합니다."/>
            </div>
        </div>
    )
}

export default ProjectsPage