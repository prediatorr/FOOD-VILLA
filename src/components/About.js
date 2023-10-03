import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import { Component } from "react";
import UserContext from "./utils/UserContext";
import Reusable_btn from "./Reusable_btn";




// const About2 = () => {
//   return (
//     <div>
//       <h1>About Us Page</h1>
//       <p>This is the food delivery App</p>
//       <Outlet/>
//       <Profile name={"RAJEEV"}/>
//       <ProfileClass name={"RAJEEV Class"}/>
//     </div>
//   );
// };

//first constructor( )=>render()=>componentDidMount()
// class About extends Component {
//   constructor(props) {
//     super(props);

//     console.log("parent-constructor");
//   }
//   componentDidMount() {
//     console.log("parent-componentDidMount");
//     // this.timer = setInterval(() => {
//     //   console.log("heya! rajeev");
//     // },1000);
//     //best place for class based components to make an api call
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.count != prevState.count) {
//       // upadates, if state changes
//     }
//     console.log("componentDidUpdate");
//   }

//   componentWillUnmount() {
//     console.log("component wil unmount");
//     clearInterval(this.timer);
//   }
//   render() {
//     console.log("parent-render");
//     return ( 
//       <div>
//         <h1>About Us Page</h1>
//         <p>This is the food delivery App</p>
//         {/* <UserContext.Consumer>{({user})=><h4>{user.name}</h4>}</UserContext.Consumer> */}
//         <Outlet />
//          {/* <Profile name={"RAJEEV"} /> */}
//         <ProfileClass name={"RAJEEV Class"} />
//       </div>
//     );
//   }
// }
// export default About;
