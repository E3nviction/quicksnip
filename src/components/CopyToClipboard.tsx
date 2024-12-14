import { useState } from "react";
import Button from "./Button";
import { CopyIcon } from "./Icons";

type Props = {
  text: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const CopyToClipboard = ({ text, ...props }: Props) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyText = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((err) => alert("Error occured: " + err));
  };

  return (
    <Button isIcon={true} onClick={copyText} {...props}>
      {isCopied ? "Copied!" : <CopyIcon />}
    </Button>
  );
};

export default CopyToClipboard;