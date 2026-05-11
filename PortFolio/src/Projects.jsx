// import { useEffect, useState } from "react";
// import axios from "axios";

// function Projects() {
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     console.log("useEffect is running");

//     axios.get("http://localhost:5000/api/message")
//       .then(res => {
//         console.log("response:", res.data);
//         setMessage(res.data.message);
//       })
//       .catch(err => console.log("error:", err));
//   }, []);

//   return (
//     <div>
 
//     </div>
//   );
// }

// export default Projects;