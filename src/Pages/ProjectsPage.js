import ProjectItem from "./ProjectItem"
import "./ProjectsPage.css"

const ProjectsPage = () => {
    return(
        <div>
            <div className="project-container">
                    <ProjectItem
                            title="냉장고 레시피 추천 AI"
                            imageSrc=""
                            link=""
                            period="2025.6 ~ 2025.8 (Team)"
                            stack="React + SpringBoot + Python"
                            isInProgress={true}
                            description=""/>

                    <ProjectItem
                        title="우리동네 자취생활"
                        imageSrc="/image/icon.png"
                        link="http://my-react-locationboard-app.s3-website.ap-northeast-2.amazonaws.com/"
                        period="2025.7 (Single)"
                        stack="React + SpringBoot"
                        isInProgress={false}
                        description=""/>

                    <ProjectItem
                        title="약쏙(노인 약 복용 알람)"
                        imageSrc=""
                        link=""
                        period="2024.9 ~ 2024.12 (Team)"
                        stack="Android Studio"
                        isInProgress={false}
                        description=""/>

                    <ProjectItem
                        title="무단횡단 방지 시스템"
                        imageSrc="image/trafficlight_icon2.png"
                        link="/IOT보안프로그래밍(천태현).pdf"
                        period="2024.4 ~ 2024.6 (Single)"
                        stack="RaspberryPI + Python"
                        isInProgress={false}
                        description="무단횡단 사고율을 줄이기 위해 라즈베리파이와 파이썬 웹 서버를 활용하여 제작"/>

                    <ProjectItem
                        title="택시 카풀"
                        imageSrc=""
                        link=""
                        period="2023.9 ~ 2023.12 (Team)"
                        stack="Android Studio"
                        isInProgress={false}
                        description=""/>
            </div>
        </div>
    )
}

export default ProjectsPage