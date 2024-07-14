// import React, { Component } from 'react';

// interface GreetingProps {
//   EmpName: string;
//   EmpAge: number;
//   EmpLocation: string;
// }

// interface GreetingState {
//   EmpCountry: string;
// }

// class Grt {
//   EmpName: string;
//   EmpAge: number;
//   EmpLocation: string;
//   EmpCountry: string;

//   constructor(name: string, age: number, loc: string) {
//     this.EmpName = name;
//     this.EmpAge = age;
//     this.EmpLocation = loc;
//     this.EmpCountry = 'India';
//   }
// }

// class Greeting extends Component<GreetingProps, GreetingState> {
//   constructor(props: GreetingProps) {
//     super(props);
//     this.state = {
//       EmpCountry: 'India',
//     };
//   }

//   render() {
//     const { EmpName, EmpAge, EmpLocation } = this.props;
//     const emp = new Grt(EmpName, EmpAge, EmpLocation);
//     const { EmpCountry } = this.state;

//     return (
//       <div>
//         <h1>Hello, {emp.EmpName}!</h1>
//         <p>Age: {emp.EmpAge}</p>
//         <p>Location: {emp.EmpLocation}</p>
//         <p>Country: {EmpCountry}</p>
//         <p>Welcome to our website.</p>
//       </div>
//     );
//   }
// }

// export default Greeting;


import React, { Component } from 'react';

interface GreetingProps {
  EmpName: string;
  EmpAge: number;
  EmpLocation: string;
}

interface GreetingState {
  EmpCountry: string;
}

class Greeting extends Component<GreetingProps, GreetingState> {
  constructor(props: GreetingProps) {
    super(props);
    this.state = {
      EmpCountry: 'India',
    };
  }

  render() {
    const { EmpName, EmpAge, EmpLocation } = this.props;
    const { EmpCountry } = this.state;

    return (
      <div>
        <h1>Hello, {EmpName}!</h1>
        <p>Age: {EmpAge}</p>
        <p>Location: {EmpLocation}</p>
        <p>Country: {EmpCountry}</p>
        <p>Welcome to our website.</p>
      </div>
    );
  }
}

export default Greeting;





// import React from 'react';

// interface GreetingProps {
//   EmpName: string;
//   EmpAge: number;
//   EmpLocation: string;
// }

// class Grt implements GreetingProps {
//   EmpName: string;
//   EmpAge: number;
//   EmpLocation: string;
//   EmpCountry: string;

//   constructor(name: string, age: number, loc: string) {
//     this.EmpName = name;
//     this.EmpAge = age;
//     this.EmpLocation = loc;
//     this.EmpCountry = 'India';
//   }
// }

// const Greeting: React.FC<GreetingProps> = ({ EmpName, EmpAge, EmpLocation }) => {
//     const emp = new Grt(EmpName, EmpAge, EmpLocation);

//   return (
//     <div>
//     <h1>Hello, {emp.EmpName}!</h1>
//     <p>Age: {emp.EmpAge}</p>
//     <p>Location: {emp.EmpLocation}</p>
//     <p>Welcome to our website.</p>
//   </div>
//   );
// };

//  export default Greeting;
