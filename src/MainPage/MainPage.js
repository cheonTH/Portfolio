const MainPage = () => {
    return(
        <div>
            <h1>포트폴리오!</h1>
            <div className="profile-container">
                <div>
                    <span>생년월일 : 0000년00월00일</span>
                    <span>이름 : 000</span>
                </div>
                <div>
                    <span>주소: 0000시 00구 00동</span>
                </div>
            </div>
            <div className="education-container">
                <div>
                    <span>2000~2000 00대학교 00과</span>
                    <span>2000~2000 00고등학교</span>
                </div>
            </div>
            <div className="coding-container">
                <span>HTML</span>
                <span>JS</span>
                <span>Java</span>
                <span>SpringBoot</span>
                <span>AndroidStudio</span>
                <span>Python</span>
                <span>RaspBerry</span>
                
            </div>
            <div className="prize-container">
                <div>
                    <span>2000.0 | 상1</span>
                    <span>2000.0 | 상2</span>
                </div>
            </div>

            <div className="project-container">
                <div>
                    <span>2000.0 ~ 2000.0 | Project_Name</span>
                    <span>link후 아이템 제작으로 프로젝트 배포 링크</span>
                    <span>2000.0 ~ 2000.0 | Project_Name</span>
                    <span>link로 pdf파일로 이동 후 보여줄 예정</span>
                </div>
            </div>
        </div>
    )
}

export default MainPage