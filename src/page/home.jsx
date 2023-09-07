import React from "react";
import "./home.css";
import { Navbar } from "../components/navbar/navbar";
// import Slider from "react-slick";

import home_image from "../assets/images/Group 211.svg";
import teacher1 from "../assets/images/trener1.jpg";
import teacher2 from "../assets/images/trener2.jpg";
import teacher3 from "../assets/images/trener3.jpg";
import teacher4 from "../assets/images/trener4.jpg";
import teacher5 from "../assets/images/trener5.jpg";

export const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="home_container">
      <Navbar />

      {/* ================ home section ============ */}
      <div className="home_page">
        <div className="info_box">
          <h1>ROBO SCHOOL</h1>
          <p>
            Курсы повышения квалификации по робототехнике для педагогов
            начальной школы
          </p>
          <button>Записаться на курс</button>
        </div>
        <figure className="main_img">
          <img src={home_image} alt="foto" />
        </figure>
      </div>

      {/* ================ home section ============ */}
      <div className="about_school">
        <p>
          <span>Robo School</span> – учреждение для формирования кадрового
          педагогического резерва в сфере робототехникии программирования
        </p>
        <div className="school_grade">
          {grade.map((item) => {
            return (
              <div className="grade_item" key={item.id}>
                <span>{item.grade}</span>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================ about course section ============ */}
      <div className="about_school about_school_course">
        <h1>Что вы получите после курса</h1>
        <div className="school_grade">
          {curs.map((item) => {
            return (
              <div className="grade_item" key={item.id}>
                <b title="При наличии свободных мест">{item.title}</b>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================ teacher info ================ */}
      <div className="teacher_info">
        <h1>Профессиональные тренеры</h1>
        {/* <Slider {...settings} className="teacher_box">
          {teachers.map((item) => {
            <figure className="teacher_info_item" key={item.id}>
              <img src={item.img} alt="techaer_photo" />
              <figcaption className="item_info">
                <p>{item.fullname}</p>
                <p>{item.description}</p>
                <button>Подробнее</button>
              </figcaption>
            </figure>;
          })}
        </Slider> */}
        {/* <Slider {...settings}>
          {teachers.map((item) => {
            <figure className="teacher_info_item" key={item.id}>
              <img src={item.img} alt="techaer_photo" />
              <figcaption className="item_info">
                <p>{item.fullname}</p>
                <p>{item.description}</p>
                <button>Подробнее</button>
              </figcaption>
            </figure>;
          })}
        </Slider> */}
        {teachers.map((item) => {
          <figure className="teacher_info_item" key={item.id}>
            <img src={item.img} alt="techaer_photo" />
            <figcaption className="item_info">
              <p>{item.fullname}</p>
              <p>{item.description}</p>
              <button>Подробнее</button>
            </figcaption>
          </figure>;
        })}
      </div>
    </div>
  );
};

const grade = [
  {
    id: "2345678",
    grade: "10",
    description: "Обученных детей на базе собственных центров",
  },
  {
    id: "2343458",
    grade: "20",
    description: "Обученных детей на базе собственных центров",
  },
  {
    id: "232458",
    grade: "100",
    description: "Обученных детей на базе собственных центров",
  },
  {
    id: "23245678",
    grade: "10 000",
    description: "Обученных детей на базе собственных центров",
  },
];

const curs = [
  {
    id: "123",
    title: "Удостоверение",
    description:
      "Дающее право преподавать робототехнику для детей 6-12 лет в образовательных учреждениях",
  },
  {
    id: "478",
    title: "Знания",
    description:
      "По основам разработки учебно-методических комплекспо робототехнике и программированию",
  },
  {
    id: "458",
    title: "Практику",
    description:
      "Возможность пройти практику по преподаванию робототехники на базе RED LAB (в оффлайн или онлайн формате)",
  },
];

const teachers = [
  {
    id: "dsfgh",
    fullname: "Ирина Лайм",
    description: "преподаватель по робототехнике",
    img: teacher1,
  },
  {
    id: "tgbfh",
    fullname: "Ирина Лайм",
    description: "преподаватель по робототехнике",
    img: teacher2,
  },
  {
    id: "jhgf",
    fullname: "Ирина Лайм",
    description: "преподаватель по робототехнике",
    img: teacher3,
  },
  {
    id: "mnbv",
    fullname: "Ирина Лайм",
    description: "преподаватель по робототехнике",
    img: teacher4,
  },
  {
    id: "okjh",
    fullname: "Ирина Лайм",
    description: "преподаватель по робототехнике",
    img: teacher5,
  },
];
