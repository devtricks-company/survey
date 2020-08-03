import React from "react";
import PropTypes from "prop-types";
import { Progress, Button } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import StyledRadio from "../StyledRadio";

import { withStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  icon: {
    borderRadius: "50%",
    width: 16,
    height: 16,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#f5f8fa",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
  },
  checkedIcon: {
    backgroundColor: "#137cbd",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "#106ba3",
    },
  },
});

const Question = (props) => {
  const classes = useStyles();
  const { questionNumber, question, questionType, answers } = props;
  const [percent, setPercent] = useState(0);

  const increase = () => {
    let precentNumber = percent + 10;
    if (precentNumber > 100) {
      precentNumber = 100;
    }

    setPercent(precentNumber);
  };

  const decrese = () => {
    let precentNumber = percent - 10;
    if (precentNumber < 0) {
      precentNumber = 0;
    }
    setPercent(precentNumber);
  };

  return (
    <div>
      <p>
        {" "}
        <span>{questionNumber}</span> <span>{question}</span>{" "}
      </p>
      {questionType === "progress" ? (
        <>
          <Progress
            percent={percent}
            format={(percent) => percent / 10 + ""}
            steps={10}
          />
          <Button.Group>
            <Button onClick={decrese} icon={<MinusOutlined />} />
            <Button onClick={increase} icon={<PlusOutlined />} />
          </Button.Group>
        </>
      ) : null}
      {questionType === "radio" ? (
        <FormControl component="fieldset">
          <RadioGroup aria-label="gender" name="customized-radios">
            {answers.map((answer) => (
              <FormControlLabel
                value={answer}
                control={<StyledRadio />}
                label={answer}
              />
            ))}
          </RadioGroup>
        </FormControl>
      ) : null}
      {questionType === "checkbox" ? <>{answers.map(answer => 
         <FormControlLabel
         control={
           <Checkbox
           
            
             color="primary"
           />
         }
         label={answer}
       />
        
        )}</> : null}
    </div>
  );
};

Question.propTypes = {
  questionNumber: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  questionType: PropTypes.string.isRequired,
  answers: PropTypes.array.isRequired,
};

export default Question;
