import { ChangeEvent, FC } from "react";
import { ContainerInputs, WrapperCheckbox, Checkbox, LabelCheckbox, Button } from "../../styles/pages/App"
import { Link } from "react-router-dom";

interface props {
    privacyPolicy: number;
    tradePolicy: number;
    handleCotizarClick: () => void;
    isQuoteDisabled: boolean;
    handlePrivacyPolicyChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleTradePolicyChange: (event: ChangeEvent<HTMLInputElement>) => void;
}


const FormChecks: FC<props> = ({
    privacyPolicy,
    tradePolicy,
    handleCotizarClick,
    isQuoteDisabled,
    handlePrivacyPolicyChange,
    handleTradePolicyChange,
}) => {

    return (
        <ContainerInputs>
            <WrapperCheckbox>
                <Checkbox
                    type="checkbox"
                    name="exampleCheckbox"
                    id="exampleCheckbox"
                    value={privacyPolicy}
                    onChange={(e) => handlePrivacyPolicyChange(e)}
                    required
                />
                <LabelCheckbox>
                    Acepto lo Política de Privacidad
                </LabelCheckbox>
            </WrapperCheckbox>
            <WrapperCheckbox>
                <Checkbox
                    type="checkbox"
                    name="exampleCheckbox"
                    id="exampleCheckbox"
                    value={tradePolicy}
                    onChange={(e) => handleTradePolicyChange(e)}
                    required
                />
                <LabelCheckbox>
                    Acepto la Política Comunicaciones Comerciales
                </LabelCheckbox>
            </WrapperCheckbox>
            <Link to="/">Aplican Términos y Condiciones.</Link>
            <Link to="/oferts-user">
                <Button 
                    $disabledColor="rgba(150, 150, 150, 0.5)"
                    onClick={handleCotizarClick}
                    disabled={isQuoteDisabled}
                    type="submit"
                >
                    Cotiza aquí
                </Button>
            </Link>
        </ContainerInputs>
    )
}

export default FormChecks