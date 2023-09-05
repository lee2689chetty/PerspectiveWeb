import { useState } from "react";
import { styled } from '@mui/system';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/core/ButtonUnstyled';

const CustomButtonRoot = styled('button')`
  background-color: #007fff;
  padding: 5px 15px;
  border-radius: 5px;
  color: #fff;
  font-weight: 600;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  transition: all 200ms ease;
  cursor: pointer;
  box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);
  border: none;

  &:hover {
    background-color: #0059b2;
  }

  &.${buttonUnstyledClasses.active} {
    background-color: #004386;
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: 0 0 0 0 rgba(0, 127, 255, 0);
  }
`;

const CustomCancelButtonRoot = styled('button')`
  background-color: #2A2A2B;
  padding: 5px 15px;
  border-radius: 5px;
  border:1px solid #A4A4A4;
  color: #fff;
  font-weight: 600;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  transition: all 200ms ease;
  cursor: pointer;
  box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);

  &:hover {
    background-color: #0059b2;
  }

  &.${buttonUnstyledClasses.active} {
    background-color: #004386;
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: 0 0 0 0 rgba(0, 127, 255, 0);
  }
`;

export const  CustomStandardButton = (props:any) => {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
}

export const CustomCancelButton = (props:any) => {
  return <ButtonUnstyled {...props} component = {CustomCancelButtonRoot} />;
}

export const CustomButton = ({ props }: { props: any }) => {
  return (
    <div
      className={`bg-primary ${props.className} rounded-full py-2 text-white`}
    >
      {props.name}
    </div>
  );
};

interface AnswerParam {
  index:number,
  name:string,
  selected:number,
  setSelected:any,
}
export const AnswerButton = ({ props }: { props: any }) => {
  const { index, name, selected, setSelected } = props;
  const [actived, setActive] = useState(selected === index);
  return <div className={`p-3 ${actived?"bg-app-primary": "bg-app-dark"}`} onClick={()=>{setSelected(index)}}>{name}</div>;
};
