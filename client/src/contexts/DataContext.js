import React, { Component, createContext } from "react";
export const DataContext = createContext();

class DataContextProvider extends Component {
  state = {
    fullName: "Steve Jobs",
    intro: "I like apples",
    contact: [{"email": "steve.jobs@apple.com"}, {"skype": "steve.jobs"}, {"address": "Kingston, Jamaica"},],
    experience: [{"position": "frontend developer", "company": "Burger King", "startMonth": "02", "startYear": "2005", "endMonth": "02", "endYear": "2012", "place": "Berlin, Germany", ['I did craaazy stuff'], ['planted a tree']}],
    education: [{"study program": "Full Stack MERN", "institution": "DCI", "startMonth": "02", "startYear": "2005", "endMonth": "02", "endYear": "2012", "place": "Berlin, Germany"}],
    skills: ['JavaScript', 'React', 'MongoDB', 'Express', 'Node.js'],
    projects: [{'todo app - a todo list with react', 'piano-player - pure javascript'}],
    languages: [{'language': 'English', 'level': 'Terrible'}, {'language': 'German', 'level': 'none'}, {'language': 'Japanese', 'level': 'for lunch?'}],
    certifications: [{"Best dog - who let the dog's out award" }],
    courses: [{"Spit fire in 3 ways - hemorrhoids academy"}]
  };


  render() {
    return (
      <DataContext.Provider value={{...this.state}}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

export default DataContextProvider;
