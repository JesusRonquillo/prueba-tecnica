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
}
interface BackButtonProps {
  onClick: () => void;
}
