import { useState } from "react";
import { Member } from "../member/Member";
import StyledButton from "../styledbutton/StyledButton";
import "./MembersList.css";
import Confetti from "react-confetti";
const people = [
  { name: "Naga Lakshmi", city: "Chennai" },
  { name: "kota srikanth reddy", city: "Chennai" },
  { name: "Manikanta Kolusu", city: "Texas" },
  { name: "Someswararao M", city: "Anakapalle" },
  { name: "Jaya Surya Mallela", city: "Anantapur" },
  { name: "Sripathi Mamillapalli", city: "Tadikonda, guntur" },
  { name: "gajula venkateswaramma", city: "Bengaluru" },
  { name: "srinivasa batta", city: "Toronto" },
  { name: "Vamsi Kuncham", city: "Visakhapatnam" },
  { name: "praveen achari", city: "Kurnool" },
  { name: "mallikarjun thagili", city: "Telangana" },
  { name: "Maruthi Rao", city: "hyderabad" },
  { name: "Siva  Kumar", city: "Bengaluru" },
  { name: "Satyasai  Kandivalasa", city: "Kakinada" },
  { name: "RAMESHBABU K", city: "Palakollu" },
  { name: "Kothakandriga Surya", city: "tirupati" },
  { name: "Parvathina  Venkata sri Satya sai", city: "Yeditha" },
  { name: "John Abhishek", city: "Hyderabad" },
  { name: "SAI KIRAN KASUKURTHI", city: "ongole" },
  { name: "Durga Prasad  Kasa", city: "Palakollu" },
  { name: "punnarao kancherla", city: "Vijayawada" },
  { name: "Rajasekhar T", city: "Tirupati" },
  { name: "Karthik  Koppera", city: "Jagtial" },
  { name: "Ratnavalli D", city: "Rajamahendravaram" },
  { name: "K sai Charan  Charan", city: "Bengaluru" },
  { name: "Sonia Dondapati", city: "Hyderabad" },
  { name: "Naveen kumar  Mannam", city: "Hyderabad" },
  { name: "Kavuru  Prabhakar Rao", city: "Akividu" },
  { name: "Satyasai Pamarthi", city: "Kakinada, AP" },
  { name: "Mani Kanta", city: "Mudapaka" },
  { name: "Raju Thrilok", city: "Hyderabad" },
  { name: "UMA MAHESWARI RAYALA", city: "VIJAYAWADA" },
  { name: "Aravind Maricherla", city: "Parvipuram" },
  { name: "Srujana Velpula", city: "California" },
];

function MembersList() {
  const [luckyPerson, setLuckyPerson] = useState("");
  const [showCelebration, setShowCelebration] = useState(false);
  const [isLoading, setLoading] = useState(false); //
  function pickPerson() {
    setLoading(true);
    const randonNumber = Math.floor(Math.random() * people.length);
    const person = people[randonNumber];
    const luckyMessage = `${person.name} from ${person.city}`;

    //1000 - 1s
    //5000 - 5s
    setTimeout(function () {
      setLuckyPerson(luckyMessage);
      setLoading(false);
      setShowCelebration(true);
    }, 5000);
  }

  return (
    <>
      {showCelebration && <Confetti numberOfPieces={1000} wind={0.1} />}

      <div className="members-container">
        {people.map(function (member) {
          return <Member name={member.name} city={member.city} />;
        })}
      </div>
      <div className="flex-center">
        {isLoading && <h3>Loading...</h3>}

        <h2>{luckyPerson}</h2>
        <StyledButton text="Lucky Draw" onClick={pickPerson} />
      </div>
    </>
  );
}

export default MembersList;
