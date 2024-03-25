---
## Versiones

###### Actualizadas al 13 de Junio del 2023.

Node (nodejs): 19.3.0

React (react): 18.2.0

Typescript (typescript): 4.8.4
---

## Demo

| Home Screen | Profile Screen | Onboarding Screen | Login Screen |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------}

---

---

## Requisitos Previos

Estos son los requisitos minimos para lograr compilar y ejecutar la aplicación. Los primeros requisitos son indispensables tanto para macOS como para Windows, los requisitos adicionales son requeridos solo en el sistema especificado, ademas se agregan recomendaciones.

- Node.js v14 o superior.
- React.js v17 o superior

## Inicio Rapido

Una vez que se cumplen los requisitos previos es posible compilar y ejecutar la aplicacion usando un emulador o dispositivo fisico android con los siguientes pasos:

- Clonar repositorio -> git clone repo
- Navegar hasta la carpeta del proyecto -> ~/prueba tecnica/
- Instalar Node Modules -> npm i
- Compilar y Ejecutar aplicación -> npm run start -- npm run test

---

---

## Documentacion

Aqui se agregara la [Documentación](https://) de la aplicación.

---

## Estructura de Archivos

Al clonar el repositorio se obtendran los siguientes archivos:

```
├── .gitignore                                   <--- .gitignore de Repositorio
├── README.md
src/                                     <--- Contenido de toda la web
        ├── src/
        │   ├── assets/
        │   │   └── images/
        │   │       ├── image.svg
        │   │       └── rimac.png
        |   ├── arrow_down.svg
        |   |   ├── arrow_down.svg
        |   |   ├── arrow_left.svg
        |   |   ├── blur_asset_green.svg
        |   |   ├── blur_asset.svg
        |   |   ├── hospitalIcon.svg
        |   |   ├── house.svg
        |   |   ├── icon-for-me.svg
        |   |   ├── icon-for-other.svg
        |   |   ├── icon-summary.svg
        |   |   ├── logo-white.svg
        |   |   ├── logo.svg
        |   |   ├── telephone.svg
        |   |   ├── vector 635.svg
        │   ├── components/
        │   │   ├── Button.tsx
        │   │   ├── Card.tsx
        │   │   ├── Footer.tsx
        │   │   ├── Header.tsx
        │   │   ├── InfoMsg.tsx
        │   │   ├── Input.tsx
        │   │   ├── List.tsx
        │   │   ├── Modals.tsx
        │   │   ├── Picker.tsx
        │   │   ├── SearchBar.tsx
        │   │   ├── index.ts
        │   │   └── childrensForBigCard/
        │   │       └── MostUsedCarrier.tsx
        │   ├── constants/
        │   │   ├── colors.ts
        │   │   ├── commons.ts
        │   │   ├── countries.ts
        │   │   ├── measures.ts
        │   │   └── index.ts
        │   ├── hooks/
        │   │   ├── useApi.ts
        │   │   ├── useAuth0.ts
        │   │   └── index.ts
        │   ├── navigation/                      <--- Navegación
        │   │   └── mainStack.tsx
        │   │   └── index.ts
        │   ├── providers/
        │   │   └── ReactotronConfig.ts
        │   │   └── index.ts
        │   ├── redux/
        │   │   ├── auth.ts
        │   │   ├── rootReducer.ts
        │   │   ├── status.ts
        │   │   ├── user.ts
        │   │   └── index.ts
        │   ├── services/
        │   │   ├── otpServices.ts
        │   │   ├── paybillServices.ts
        │   │   ├── quoteServices.ts
        │   │   ├── userServices.ts
        │   │   └── index.ts
        │   ├── types/
        │   │   ├── commonTypes.d.ts
        │   │   ├── images.d.ts
        │   │   ├── screenTypes.d.ts
        │   │   ├── shippingCoTypes.d.ts
        │   │   ├── index.d.ts
        │   │   ├── components/
        │   │   │   ├── buttonTypes.d.ts
        │   │   │   ├── cardTypes.d.ts
        │   │   │   ├── footerTypes.d.ts
        │   │   │   ├── infoMsgTypes.d.ts
        │   │   │   ├── inputTypes.d.ts
        │   │   │   ├── listTypes.ts
        │   │   │   ├── modalsTypes.d.ts
        │   │   │   ├── pickerTypes.d.ts
        │   │   │   ├── searchBarTypes.d.ts
        │   │   │   └── index.d.ts
        │   │   ├── hooks/
        │   │   │   ├── apiTypes.d.ts
        │   │   │   ├── auth0Types.d.ts
        │   │   │   └── index.d.ts
        │   │   ├── services/
        │   │   │   ├── otpTypes.d.ts
        │   │   │   ├── paybillTypes.d.ts
        │   │   │   ├── userTypes.d.ts
        │   │   │   └── index.d.ts
        │   │   └── utils/
        │   │       ├── commonUtilsTypes.d.ts
        │   │       ├── currencyFormatersTypes.d.ts
        │   │       ├── maskTypes.d.ts
        │   │       └── index.d.ts
        │   └── utils/
        │       ├── commonUtils.d.ts
        │       ├── currencyFormatersTypes.d.ts
        │       ├── maskConfig.d.ts
        │       └── index.ts
        ├── screens/                             <--- Pantallas
        │   ├── index.ts
        │   ├── mainFlow                         <--- Flujo principal
        │   │   ├── Errors.tsx
        │   │   ├── Home.tsx
        │   │   ├── MainScreen.tsx
        │   │   ├── Notification.tsx
        │   │   ├── Search.tsx
        │   │   ├── User.tsx
        │   │   ├── homeFlow/
        │   │   │   └── Quote.tsx
        │   │   └── userFlow/
        │   │       ├── DownloadInvoice.tsx
        │   │       ├── Invoice.tsx
        │   │       ├── MyAccount.tsx
        │   │       ├── MyInvoices.tsx
        │   │       ├── NavegationMyAccount.tsx
        │   │       ├── PrintFormats.tsx
        │   │       └── ShippingCo.tsx
        │   └──
        └── styles/
            ├── index.ts
            ├── components/
            │   ├── ButtonBack.ts
            │   ├── Footer.ts
            │   ├── Header.ts
            │   ├── LineTime.ts
            │   ├── SummaryCard.ts
            │   ├── Target.ts
            │   ├── TextSummary.ts
            │   ├── TimeLineMobile.ts
            ├── pages/
            │   ├── App.ts
            │   ├── Container.ts
            └── sections/
               ├── CardPlan.ts
               ├── Information.ts
            ├── Button.ts
            ├── Text.ts

---

## Estructura de Redux aSyncStorage

Las variables guardadas en Redux cumple la siguiente estructura de archivos:

```

Redux aSyncStorage/
├── redux
│ ├── store.ts
│ └── userSlice.ts

```

---

## Soporte SO

Esta aplicación se puede compilar tanto para Android como para iOS debido a que se programa con React Native:

[<img src="https://raw.githubusercontent.com/creativetimofficial/ct-material-kit-pro-react-native/master/assets/android-logo.png" width="60" height="60" />](https://www.android.com)[<img src="https://raw.githubusercontent.com/creativetimofficial/ct-material-kit-pro-react-native/master/assets/apple-logo.png" width="60" height="60" />](https://www.apple.com/mx/ios/ios-16/)

---

## Scripts

Estos scripts se encuentran en package.json y nos permiten ejecutar comandos con una sintax mas sencilla.

### **Comandos para Mac**

**Limpiar cache de Watchman y Metro**

    yarn mac:reset-cache

    Es equivalente a: "watchman watch-del-all && yarn start --reset-cache"

**Borrar Derived Data de xCode**

    yarn mac:reset-deriveddata

    Es equivalente a: "rm -rf ~/Library/Developer/Xcode/DerivedData/*"

**Reset Todo (Watchman, Node_Modules, Android Build, Derived Data de xCode y Metro)**

    yarn mac:hard-reset

    Es esquivalente a: "watchman watch-del-all && rm -fr node_modules yarn.lock && yarn install && rm -fr android/build android/app/build android/app/.cxx && cd ios && pod deintegrate && pod install && cd .. && rm -rf ~/Library/Developer/Xcode/DerivedData/* && yarn start --reset-cache"

### **Comandos para Windows**

### **Comandos para Linux**

### **Comandos para Generales**

Si los comandos no funcionan favor de usar npm run

**Compilar y ejecutar app en Dev para Android**

    npm run dev


**Borrar y reinstalar Node_Modules**

    npm run reinstall-nodemodules


<!-- **Compilar y ejecutar app en Dev para iOS**

    yarn ios-dev: "react-native run-ios"

**Compilar y ejecutar app en Prod para Android**

    yarn android-prod: "react-native run-android"

**Compilar y ejecutar app en Prod para iOS**

    yarn ios-prod: "react-native run-ios" -->

---

Descripción del Proyecto
Este es un proyecto de prueba técnica llamado "prueba-tecnica".

Scripts Disponibles
start: Inicia la aplicación en modo de desarrollo en el puerto 3000.
dev: Inicia la aplicación en modo de desarrollo.
build: Compila la aplicación para producción.
lint: Ejecuta ESLint para verificar el código.
preview: Muestra una vista previa de la aplicación compilada.
test: Ejecuta las pruebas unitarias.
Dependencias
Producción
@react-spring/web: ^9.7.3
@reduxjs/toolkit: ^2.2.2
@types/react-redux: ^7.1.33
axios: ^1.6.8
react: ^18.2.0
react-dom: ^18.2.0
react-icons: ^5.0.1
react-loader-spinner: ^6.1.6
react-redux: ^9.1.0
react-router-dom: ^6.22.3
styled-components: ^6.1.8
Desarrollo
@babel/preset-env: ^7.24.3
@babel/preset-react: ^7.24.1
@babel/preset-typescript: ^7.24.1
@testing-library/jest-dom: ^6.4.2
@testing-library/react: ^14.2.2
@types/dotenv: ^8.2.0
@types/jest: ^29.5.12
@types/node: ^20.11.30
@types/react: ^18.2.69
@types/react-dom: ^18.2.21
@typescript-eslint/eslint-plugin: ^7.1.1
@typescript-eslint/parser: ^7.1.1
@vitejs/plugin-react: ^4.2.1
babel-jest: ^29.7.0
eslint: ^8.57.0
eslint-plugin-react-hooks: ^4.6.0
eslint-plugin-react-refresh: ^0.4.5
jest: ^29.7.0
ts-jest: ^29.1.2
typescript: ^5.2.2
vite: ^5.1.6
vitest: ^1.4.0
```
