import { Member } from "./components/member/Member";
import "./App.css";
import AboutUs from "./components/aboutus/AboutUs";
//jsx javascript xml
function App() {
  const appStyle = { backgroundColor: "blue", textAlign: "center" };

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

  return (
    <div>
      {/* <h1 style="background-color: blue">First batch is best batch</h1> */}

      <h1 style={appStyle}>First batch is best batch</h1>
      <AboutUs />
      <div className="members-container">
        {people.map(function (member) {
          return <Member name={member.name} city={member.city} />;
        })}

        {/* <Member name="Charan" city="Hyderabad" className="memberCard" />
        <Member name="Maruthi" city="Guntur" />
        <Member name="Valli" city="Banglore" /> */}
      </div>
    </div>
  );
}

export default App;
