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
}
