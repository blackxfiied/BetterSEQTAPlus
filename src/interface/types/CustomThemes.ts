type CustomTheme = {
  name: string;
  description: string;
  defaultColour: string;
  CanChangeColour: boolean;
  CustomCSS: string;
  CustomImages: CustomImage[];
}

type CustomImage = {
  id: string;
  url: string;
  variableName: string;
}