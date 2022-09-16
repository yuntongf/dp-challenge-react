import { useState } from "react";

const QuestionCard = ({ question, handleChoose }) => {
   let options = Object.entries(question.options);
   for (var i = 0; i < options.length; i++) {
      options[i][2] = i;
      options[i][3] = false;
   }
   let [res, setRes] = useState(options);


   const handleRes = (index) => {
      // for (var i = 0; i < temp.length; i++) {
      // for (var i = 0; i < temp.length; i++) {
      //    if (temp[i][3]) {
      //       indexOfChosen = i;
      //       console.log("index is chosen", indexOfChosen);
      //    }
      // }
      // if (indexOfChosen == -1 || indexOfChosen == index) {
      //    temp[index][3] = !temp[index][3];
      //    console.log("naive");
      // } else {
      //    console.log("complex");
      //    for (var i = 0; i < temp.length; i++) {
      //       temp[i][3] = 0;
      //    }
      //    temp[index][3] = 1;
      // }
      // console.log(temp);
      let temp = res;
      temp[index][3] = !temp[index][3];
      setRes(temp);
      let ret = [...temp];
      for (var i = 0; i < temp.length; i++) {
         ret[i] = temp[i][3];
      }
      return handleChoose(ret);

   }

   return (
      <div >
         {res.map((option) => (
            <div className="card mt-3 p-2 ps-3">
               <label className="">
                  <input defaultChecked={option[3]} onChange={() => handleRes(option[2])} class="form-check-input me-1" type="checkbox" ></input>
                  {`${option[0]} : ${option[1]}`}
               </label>
            </div>
         ))}
      </div>
   );
}

export default QuestionCard;