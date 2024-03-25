import { Badge, HeroMobile, Title, TitleContainer } from "../../styles/pages/App"
import homeImage from "../../assets/images/image.svg";

const HeaderForm = () => {
    return (
        <HeroMobile>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                }}
            >
                <Badge>Seguro Salud Flexible</Badge>
                <TitleContainer>
                    <Title>Creado para ti y tu familia</Title>
                </TitleContainer>
            </div>
            <img
                style={{
                    zIndex: 999,
                }}
                width={"132px"}
                src={homeImage}
                alt="Home Image"
            />
        </HeroMobile>
    )
}
export default HeaderForm