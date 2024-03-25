import { ChangeEvent, FC } from "react"
import { ContainerInputs, Dropdown, WrapperInput, Label, Input } from "../../styles/pages/App"
import arrowDown from "../../assets/arrow_down.svg";

interface props{
    numberPhone: string;
    documentNumber: string;
    handleDocumentNumberChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleNumberPhoneChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const FormInputs:FC<props> = ({
    numberPhone,
    documentNumber,
    handleDocumentNumberChange,
    handleNumberPhoneChange
}) =>{
    
    return( 
    <ContainerInputs>
        <div
          style={{
            display: "flex",
            borderRadius: "8px",
            border: "1px solid rgba(94, 100, 136, 1)",
          }}
        >
          <Dropdown>
            <span>DNI</span>
            <img width={20} height={20} src={arrowDown} alt="" />
          </Dropdown>
          <WrapperInput>
            <Label htmlFor="id">Nro. de documento</Label>
            <Input
              id="id"
              name="id"
              placeholder="30216147"
              style={{}}
              type="number"
              value={documentNumber}
              onChange={handleDocumentNumberChange}
              required
            />
          </WrapperInput>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            borderRadius: "8px",
            border: "1px solid rgba(94, 100, 136, 1)",
            padding: "8px 16px 8px 16px",
          }}
        >
          <Label htmlFor="phone">Celular</Label>
          <Input
            id="phone"
            name="phone"
            placeholder="5130216147"
            type="number"
            value={numberPhone}
            onChange={handleNumberPhoneChange}
            required
          />
        </div>
      </ContainerInputs>
      )
}

export default FormInputs