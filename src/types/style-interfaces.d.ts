interface TextProps {
  big?: boolean; // Prop para texto grande
  background?: string; // Prop para color de fondo
  color?: string; // Prop para color del texto
  small?: boolean; // Prop para texto pequeño
}
interface CardProps {
  backgroundImage?: string;
  icon?: React.ReactNode;
  title: string;
  paragraph: string;
  onClick?: () => void;
  isActive?: boolean;
}
interface TimelineProps {
  activeStep: 1 | 2;
  text: string;
}
interface SectionInfoProps {
  name: string;
  onCardClick?: () => void;
  dataPlans: Array<{
    name: string;
    price: number;
    description: string[];
    age: number;
  }>;
}
interface Plan {
  name: string;
  price: number;
  description: string[];
  age: number;
}

interface PlansData {
  list: Plan[];
}
interface UserData {
  name: string;
  lastName: string;
  birthDay: string;
}

interface SummaryCardProps {
  name: string;
  lastName: string;
  dni: string | number;
  phone: string | number;
  plan: string;
  price: string | number;
}
interface BackButtonProps {
  onClick: () => void;
}
// Definir tipos para los datos almacenados en el estado global
export interface UserData {
  phone: string;
  dni: string;
}

export interface SelectedPlan {
  name: string;
  price: number;
  description: string[];
  age: number;
}

// Definir tipo para el estado global
export interface UserState {
  name: string;
  userData: UserData;
  selectedPlan: SelectedPlan;
}

export interface RootState {
  user: {
    name: string;
    userData: {
      phone: string;
      dni: string;
    };
    selectedPlan: {
      name: string;
      price: number;
      description: string[];
      age: number;
    };
  };
}
