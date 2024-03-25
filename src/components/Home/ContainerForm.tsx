import {
    FormContainer,
    TitleContainer,
    Badge,
    Title,
    Text
} from "../../styles/pages/App"
import { ChangeEvent, FC } from "react";
import FormInputs from "./FormInputs";
import FormChecks from "./FormChecks";

interface props {
    documentNumber: string;
    numberPhone: string;
    privacyPolicy: number;
    tradePolicy: number;
    isQuoteDisabled: boolean;
    handleDocumentNumberChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleNumberPhoneChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handlePrivacyPolicyChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleTradePolicyChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleCotizarClick: () => void;
}

const ContainerForm: FC<props> = ({
    documentNumber,
    numberPhone,
    privacyPolicy,
    tradePolicy,
    isQuoteDisabled,
    handleDocumentNumberChange,
    handleNumberPhoneChange,
    handlePrivacyPolicyChange,
    handleTradePolicyChange,
    handleCotizarClick
}) => {
    return (
        <FormContainer>
            <TitleContainer>
                <Badge>Seguro Salud Flexible</Badge>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                    }}
                >
                    <Title>Creado para ti y tu familia</Title>
                    <Text>
                        Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe
                        nuestra asesoría. 100% online.
                    </Text>
                </div>
            </TitleContainer>
            <FormInputs
                numberPhone={numberPhone}
                documentNumber={documentNumber}
                handleDocumentNumberChange={handleDocumentNumberChange}
                handleNumberPhoneChange={handleNumberPhoneChange}
            />
            <FormChecks
                privacyPolicy={privacyPolicy}
                tradePolicy={tradePolicy}
                handleCotizarClick={handleCotizarClick}
                isQuoteDisabled={isQuoteDisabled}
                handlePrivacyPolicyChange={handlePrivacyPolicyChange}
                handleTradePolicyChange={handleTradePolicyChange}
            />
        </FormContainer>
    )
}

export default ContainerForm