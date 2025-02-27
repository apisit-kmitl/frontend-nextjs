import React, { useState } from "react";
import Link from "next/link";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Loader from "../../components/loader/Loader";
import { useForm } from "react-hook-form";
import ErrorMsg from "../error/errorMsg";
import InCurrect from "../error/error_validate";
import { GET_COMMENTS } from "../subject_review/commentsList";
import { GET_SUBJECT_DETAIL } from "../../pages/reviewsubjects/[subjectId]";
const CREATE_SUBJECTREVIEW = gql`
  mutation CREATE_SUBJECTREVIEW(
    $subjectId: ID!
    $comment: String!
    $grade: String!
    $year: String!
    $section: String!
    $homework_rate: Int!
    $content_rate: Int!
    $lecturer_rate: Int!
  ) {
    addSubjectComment(
      subjectId: $subjectId
      comment: $comment
      grade: $grade
      year: $year
      section: $section
      homework_rate: $homework_rate
      content_rate: $content_rate
      lecturer_rate: $lecturer_rate
    ) {
      id
      subjectId {
        id
        course_id
        eng_name
      }
      comment
      grade
      year
      section
      owner {
        id
        name
      }
      createdAt
      homework_rate
      content_rate
      lecturer_rate
    }
  }
`;

export default function CreateReview({ subject }) {
  const yearNow = new Date().getFullYear();
  let currentYearThai = yearNow + 543;
  let emoji = [
    {
      value: 30,
      emoji: <VerrySadIcon className="w-5 md:w-8 md:h-8"></VerrySadIcon>,
    },
    {
      value: 40,
      emoji: <SadIcon className="w-5 md:w-8 md:h-8"></SadIcon>,
    },
    {
      value: 50,
      emoji: <NormalIcon className="w-5 md:w-8 md:h-8"></NormalIcon>,
    },
    {
      value: 75,
      emoji: <GoodIcon className="w-5 md:w-8 md:h-8"></GoodIcon>,
    },
    {
      value: 90,
      emoji: <VeryGoodIcon className="w-5 md:w-8 md:h-8"></VeryGoodIcon>,
    },
  ];
  const [lecturer_rate, setLecturer_rate] = useState(emoji[2].value);
  const [content_rate, setContent_rate] = useState(emoji[2].value);
  const [homework_rate, setHomework_rate] = useState(emoji[2].value);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const { id, course_id, thai_name, eng_name } = subject;
  const [comment_info, setComment_info] = useState({
    // add rating later,
    lecturer_rate: lecturer_rate,
    content_rate: content_rate,
    homework_rate: homework_rate,
    subjectId: id,
    section: "1",
    grade: "C",
    year: currentYearThai.toString(),
  });

  let yearList = [{ value: currentYearThai.toString() }];
  for (let index = 0; index < 5; index++) {
    currentYearThai -= 1;
    currentYearThai = currentYearThai.toString();
    yearList.push({
      value: currentYearThai.toString(),
    });
  }
  const handleChange = (e) => {
    setComment_info({
      ...comment_info,
      [e.target.name]: e.target.value,
    });
  };
  const changeLecturer_rate = (feel) => {
    setLecturer_rate(feel.value);
    setComment_info({
      ...comment_info,
      lecturer_rate: feel.value,
    });
  };
  const changeHomework_rate = (feel) => {
    setHomework_rate(feel.value);
    setComment_info({
      ...comment_info,
      homework_rate: feel.value,
    });
  };
  const changeContent_rate = (feel) => {
    setContent_rate(feel.value);
    setComment_info({
      ...comment_info,
      content_rate: feel.value,
    });
  };
  const [addSubjectComment, { data, loading, error }] = useMutation(
    CREATE_SUBJECTREVIEW,
    {
      refetchQueries: [
        { query: GET_COMMENTS }
       
      ],
      onCompleted: (data) => {
        if (data) {
          setComment_info({
            lecturer_rate: 60,
            content_rate: 60,
            homework_rate: 60,
            subjectId: id,
            comment: "",
            section: "1",
            grade: "C",
            year: currentYearThai,
          });
        }
      },
    }
  );
  const [textAreacount, setTextAreacount] = useState(0);

  const onSubmit = async (validateInfo) => {
    try {
      const finalInfo = { ...comment_info, ...validateInfo };
      await addSubjectComment({ variables: finalInfo });
      reset();
    } catch (error) {
      console.log(error);
    }
  };
  if (loading) return <Loader></Loader>;
  if (error) return <p>{error.message}</p>;
  console.log(errors);
  return (
    <div>
      <div className=" flex flex-col bg-gray-200   items-center p-6 ">
        <form
          type="form"
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className="bg-gray-50 w-full lg:w-3/6  max-h-full rounded-xl flex flex-col  p-6 px-2  shadow-lg my-10 space-y-3 "
        >
          <div className="min-w-full w-4/6 inline-flex items-center px-2 xl:px-6  ">
            <h1 className="font-display font-bold text-lg pl-4 py-2 bg-purple-400  rounded-3xl">
              {course_id}
            </h1>
            <h1 className="font-display font-bold text-sm lg:text-lg mx-3 py-2   rounded-3xl">
              {eng_name}{" "}
              <span className="font-display font-light text-sm lg:text-lg">
                ({thai_name})
              </span>
            </h1>
          </div>
          <div className="min-w-full w-4/6 inline-flex items-center px-2 xl:px-6 my-6  justify-between">
            <h1 className="font-display font-normal text-sm md:text-lg pl-4 py-2rounded-3xl ">
              ภาพรวม
            </h1>

            <div className="flex justify-between w-1/2 items-center">
              <h1 className="font-display font-normal text-sm lg:text-lg mx-3 py-2 text-gray-500  rounded-3xl">
                ไม่พอใจ
              </h1>
              <h1 className="font-display font-normal text-sm lg:text-lg mx-3 py-2 text-gray-500  rounded-3xl">
                พอใจ
              </h1>
            </div>
          </div>
          <div className="min-w-full w-4/6 inline-flex items-center px-2 xl:pl-6 my-6  text-gray-500  justify-between">
            <div className="flex flex-row">
              <h1 className="font-display font-light text-sm lg:text-lg pl-4 py-2rounded-3xl ">
                ภาระงาน/การบ้าน
              </h1>
              <div className="w-2 h-2 bg-red-300 rounded-full ml-2 self-start place-self-start "></div>
            </div>

            <div className="flex justify-between w-1/2 items-center px-1 md:px-5">
              {emoji.map((feel, i) => (
                <>
                  <h1
                    onClick={() => changeHomework_rate(feel)}
                    className={
                      "text-sm md:text-2xl  rounded-full cursor-pointer " +
                      (homework_rate === feel.value
                        ? " ring-4 ring-green-300"
                        : " ")
                    }
                    key={i}
                  >
                    {feel.emoji}
                  </h1>
                </>
              ))}
            </div>
          </div>
          <div className="min-w-full w-4/6 inline-flex items-center px-2 xl:pl-6 my-6  text-gray-500 justify-between">
            <div className="flex flex-row">
              <h1 className="font-display font-light text-sm lg:text-lg pl-4 py-2rounded-3xl ">
                เนื้อหาที่สอน
              </h1>
              <div className="w-2 h-2 bg-red-300 rounded-full ml-2 self-start place-self-start "></div>
            </div>
            <div className="flex justify-between w-1/2 items-center px-1 md:px-5">
              {emoji.map((feel, i) => (
                <>
                  <h1
                    onClick={() => changeContent_rate(feel)}
                    className={
                      "text-sm md:text-2xl  rounded-full cursor-pointer " +
                      (content_rate === feel.value
                        ? "ring-4 ring-green-300"
                        : " ")
                    }
                    key={i}
                  >
                    {feel.emoji}
                  </h1>
                </>
              ))}
            </div>
          </div>
          <div className="min-w-full w-4/6 inline-flex items-center px-2 xl:pl-6 my-6  text-gray-500 justify-between">
            <div className="flex flex-row">
              <h1 className="font-display font-light text-sm lg:text-lg pl-4 py-2rounded-3xl ">
                การสอน
              </h1>
              <div className="w-2 h-2 bg-red-300 rounded-full ml-2 self-start place-self-start "></div>
            </div>
            <div className="flex justify-between w-1/2 items-center  px-1 md:px-5">
              {emoji.map((feel, i) => (
                <>
                  <h1
                    onClick={() => changeLecturer_rate(feel)}
                    className={
                      "text-sm md:text-2xl  rounded-full cursor-pointer " +
                      (lecturer_rate === feel.value
                        ? " ring-4 ring-green-300"
                        : " ")
                    }
                    key={i}
                  >
                    {feel.emoji}
                  </h1>
                </>
              ))}
            </div>
          </div>
          {/* ---------------------------------text area------------------------------ */}
          <div className=" w-full lg:w-full  max-h-full rounded-xl flex flex-col  p-6  px-5 xl:px-10 my-10 space-y-3  ">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row ">
                <h1 className="font-display self-start font-semibold text-lg md:text-xl text-gray-800">
                  เขียนรีวิววิชานี้
                </h1>
                <div className="w-2 h-2 bg-red-300 rounded-full ml-2 self-start place-self-start "></div>
              </div>
              <div>
                <p
                  className={`font-display ${
                    errors.comment ? "text-red-400 " : "text-gray-400"
                  } text-sm  `}
                >
                  ({textAreacount}/500) ตัวอักษร
                </p>
              </div>
            </div>
            <textarea
              {...register("comment", {
                required: true,
                minLength: 10,
                maxLength: 500,
                onChange: (e) => setTextAreacount(e.target.value.length),
              })}
              type="text"
              placeholder="เขียนรีวิว .....  (โปรดหลีกเลี่ยงถ้อยคำหยาบ คายและพาดพิงผู้อื่น)"
              className={`border-0 px-3 h-2/3 max-h-80 min-h-full  py-3 placeholder-blueGray-300 text-gray-800 bg-white ${
                errors.comment && " ring-red-400 "
              } rounded text-sm md:text-lg font-display  shadow focus:outline-none focus:ring w-full `}
              rows="4"
            ></textarea>
            {errors.comment?.type === "required" && (
              <InCurrect args="จำเป็นต้องกรอกฟิลด์นี้"></InCurrect>
            )}
            {errors.comment?.type === "minLength" && (
              <InCurrect args="ต้องรีวิวตั้งแต่ 10 ตัวอักษรขี้นไป"></InCurrect>
            )}
            {errors.comment?.type === "maxLength" && (
              <InCurrect args="รีวิวต้องน้อยกว่า 500 ตัวอักษร"></InCurrect>
            )}
          </div>
          <div className="w-full lg:w-full max-h-full rounded-xl flex flex-row items-center p-6 px-5 xl:px-10    space-x-1 ">
            <h1 className="font-display self-start font-semibold text-lg md:text-xl text-gray-800 ">
              เกรดที่ได้
            </h1>
            <div className="w-2 h-2 bg-red-300 rounded-full ml-2 self-start place-self-start "></div>
            <select
              onChange={handleChange}
              className="px-2 w-24 font-display text-lg border-2 border-gray-300 rounded-md"
              name="grade"
              id="grade"
              value={comment_info.grade}
              required
              defaultValue="C"
            >
              <option value="A">A</option>
              <option value="B+">B+</option>
              <option value="B">B</option>
              <option value="C+">C+</option>
              <option value="C">C</option>
              <option value="D+">D+</option>
              <option value="D">D</option>
              <option value="F">F</option>
            </select>
          </div>
          {/* setion */}
          <div className="w-full lg:w-full max-h-full rounded-xl flex flex-row items-center p-6 px-5 xl:px-10  space-x-1 ">
            <h1 className="font-display self-start font-semibold text-lg md:text-xl text-gray-800 ">
              ปีที่เรียน
            </h1>
            <div className="w-2 h-2 bg-red-300 rounded-full ml-2 self-start place-self-start "></div>

            <select
              required
              onChange={handleChange}
              className="px-2 w-24 font-display text-lg border-2 border-gray-300 rounded-md"
              name="year"
              id="year"
              value={comment_info.year}
            >
              {yearList.map((year, i) => (
                <option key={i} value={year.value.toString()}>
                  {year.value}
                </option>
              ))}
            </select>
          </div>
          {/* setion */}
          <div className="w-full lg:w-full max-h-full rounded-xl flex flex-row items-center p-6 px-5 xl:px-10   space-x-1 ">
            <h1 className="font-display self-start font-semibold text-lg md:text-xl text-gray-800 ">
              section
            </h1>
            <div className="w-2 h-2 bg-red-300 rounded-full ml-2 self-start place-self-start "></div>
            <select
              onChange={handleChange}
              className="px-2 w-24 font-display text-lg border-2 border-gray-300 rounded-md"
              name="section"
              id="section"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="อื่น ๆ">อื่น ๆ</option>
            </select>
          </div>
          {/* setion */}
          <div className=" inline-flex flex-row min-w-full xl:min-w-2/3 justify-end items-end font-display space-x-4 px-10">
            <Link href={"/reviewsubjects/" + id} passHref>
              <p className=" px-2 md:px-10 py-3 rounded-xl cursor-pointer font-display  bg-gray-300 hover:shadow-sm ">
                {" "}
                ย้อนกลับ{" "}
              </p>
            </Link>

            <button
              type="submit"
              className="px-2 md:px-10  py-3 text-gray-50 rounded-xl bg-green-500 shadow-sm hover:shadow-sm   "
            >
              {" "}
              รีวิววิชานี{" "}
            </button>
          </div>
        </form>
        <div className="w-1/2">
          {error && (
            <ErrorMsg args={error.message.split("GraphQL error:")}></ErrorMsg>
          )}
          {data && <ThankMsg></ThankMsg>}
        </div>
      </div>
    </div>
  );
}

function VerrySadIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      fill="none"
      viewBox="0 0 30 30"
    >
      <path fill="#fff" d="M8 9H22V11H8z"></path>
      <circle cx="15" cy="15" r="14" stroke="#000" strokeWidth="2"></circle>
      <circle cx="9" cy="10" r="1" fill="#000"></circle>
      <circle cx="21" cy="10" r="1" fill="#000"></circle>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth="2"
        d="M9.255 21.036c0-7.95 11.49-7.95 11.49 0"
      ></path>
    </svg>
  );
}

function SadIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      fill="none"
      viewBox="0 0 30 30"
    >
      <circle cx="15" cy="15" r="14" stroke="#000" strokeWidth="2"></circle>
      <path fill="#fff" d="M8 9H22V11H8z"></path>
      <circle cx="9" cy="10" r="1" fill="#000"></circle>
      <circle cx="21" cy="10" r="1" fill="#000"></circle>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth="2"
        d="M9.255 21.036c1.596-4.6 9.894-4.76 11.49 0"
      ></path>
    </svg>
  );
}

function NormalIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      fill="none"
      viewBox="0 0 30 30"
    >
      <circle cx="15" cy="15" r="14" stroke="#000" strokeWidth="2"></circle>
      <path fill="#fff" d="M8 9H22V11H8z"></path>
      <circle cx="9" cy="10" r="1" fill="#000"></circle>
      <circle cx="21" cy="10" r="1" fill="#000"></circle>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth="2"
        d="M9.255 21.064h11.49"
      ></path>
    </svg>
  );
}

function GoodIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      fill="none"
      viewBox="0 0 30 30"
    >
      <circle cx="15" cy="15" r="14" stroke="#000" strokeWidth="2"></circle>
      <path fill="#fff" d="M8 9H22V11H8z"></path>
      <circle cx="9" cy="10" r="1" fill="#000"></circle>
      <circle cx="21" cy="10" r="1" fill="#000"></circle>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth="2"
        d="M9.255 17.526c1.596 4.6 9.894 4.76 11.49 0"
      ></path>
    </svg>
  );
}

function VeryGoodIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      fill="none"
      viewBox="0 0 30 30"
    >
      <circle cx="15" cy="15" r="14" stroke="#000" strokeWidth="2"></circle>
      <path fill="#fff" d="M8 9H22V11H8z"></path>
      <circle cx="9" cy="10" r="1" fill="#000"></circle>
      <circle cx="21" cy="10" r="1" fill="#000"></circle>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth="2"
        d="M9.255 15.073c0 7.95 11.49 7.95 11.49 0"
      ></path>
    </svg>
  );
}

function ThankMsg() {
  return (
    <div className="flex animate-pulse cursor-pointer mb-6 mx-5 items-center justify-center space-x-3 flex-row w-full h-11  rounded-lg bg-green-500">
      <Icon></Icon>
      <h1 className="text-sm font-light font-display text-gray-100 ">
        ขอบคุณสำหรับการรีวิว
      </h1>
    </div>
  );
}
function Icon(args) {
  return (
    <div>
      <svg
        {...args}
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="white"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}
