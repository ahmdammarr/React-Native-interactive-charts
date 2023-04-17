type TruncStringParams = {
  text: string;
  maxLength: number;
  replacingText?: string;
};

export const truncString = ({
  text,
  maxLength,
  replacingText = '...',
}: TruncStringParams) => {
  return text.slice(0, maxLength) + replacingText;
};
