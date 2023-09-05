import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Chart } from "react-google-charts";
import {
  AnswerButton,
  CustomCancelButton,
  CustomStandardButton,
} from "../../components/customButtonComponent";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { memo, useEffect, useState } from "react";
import { Button } from "@mui/material";
import { questionData } from "../../data/staticdata";
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
 
interface AnswerParam {
  index: number;
  name: string;
  selected: number;
  setSelected: any;
}
interface Message{
  type:number,
  message:string
}

const QuestionPage = () => {
  const [index, setIndex] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const total = 15;
  const answers = ["1", "2", "3", "4", "5"];
  const [selected, setSelected] = useState(-1);
  const [isLast, setIsLast] = useState(false)
  const [answerList, setAnswerList] = useState([])
  const [show, setShow] = useState(false)
  const [msg, setMsg] = useState("")
  const router = useRouter();
  const handleNext = () => {
    if (index < 14) {
      
      if(selected === -1){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please select answer!',
        })
        return
      }
      setSelected(-1)
      setIndex(index + 1);
    }
  };
  const handlePrevious = () => {
    if (index < 1) {
      return;
    } else {
      setIndex(index - 1);
      setIsLast(false);
    }
  };
  const handleAnswer = (answer: number) => {
    setSelected(answer);
    setPercentage(((index+1)/ total) * 100);
  };


  useEffect(() => {
    if(percentage === 100){
      setIsLast(true)
    }
  }, [percentage]);
  const handleComplete = () => {
    console.log("completed");
    router.push('/home')
  };
  return (
    <div className="bg-dark-primary w-full h-screen flex justify-center relative">
      <div className="absolute left-0 bottom-0 flex">
        <div className="bg-app-blue100 rounded-t-full w-32 h-32"></div>
        <div className="bg-app-blue300 rounded-full w-32 h-32"></div>
      </div>
      <div className="absolute right-0 top-0 flex">
        <div className="bg-app-blue400 rounded-t-full rounded-bl-full w-32 h-32"></div>
        <div>
          <div className="bg-app-blue300 rounded-tl-5xl rounded-br-5xl w-32 h-32"></div>
          <div className="bg-app-blue100 rounded-bl-5xl w-32 h-32"></div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col gap-5">
        <div className="text-lg text-gray-600 flex items-end font-semibold gap-1">
          <h3 className="text-3xl text-primary">{index + 1}</h3>/ 15
        </div>
        <div className="capitalize text-white m-3 h-20 text-center w-3/4 text-2xl">{questionData[index].question}</div>
        <div className="flex gap-3">
          {answers.map((data, idx) => (
            <Button
              key={idx}
              variant={idx === selected ? "contained" : "outlined"}
              onClick={() => {
                handleAnswer(idx);
              }}
            >
              {data}
            </Button>
          ))}
        </div>
        <div className="w-screen flex justify-center items-center gap-10">
          <CustomCancelButton
            variant="contained"
            className="bg-gradient-to-t from-blue-800 to-blue flex items-center"
            onClick={handlePrevious}
          >
            <KeyboardArrowLeftIcon />
            Prev
          </CustomCancelButton>
          <div className="w-1/2 h-1 border-b-2 border-gray-700"></div>
          <CustomStandardButton
            variant="contained"
            className="bg-gradient-to-t from-blue-800 to-blue-200 flex items-center "
            onClick={isLast?handleComplete:handleNext}
          >
            <h4 className="capitallize">{isLast?"Complete":"Next"}</h4>

            <KeyboardArrowRightIcon />
          </CustomStandardButton>
        </div>
        <div className="flex items-center gap-10">
          <div className="w-40">
            <CircularProgressbar
              value={percentage}
              styles={buildStyles({
                rotation: 0.25,
                strokeLinecap: "butt",
                textSize: "16px",
                pathTransitionDuration: 0.5,
                textColor: `#DAC1DE`,
                pathColor: "#445DC9",
                trailColor: "#1D2D6E",
                backgroundColor: "#DAC1DE",
              })}
            />
          </div>
          <div className="text-5xl text-app-blue100 font-semibold">
            {Number.parseFloat(percentage).toFixed(0)}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(QuestionPage);
