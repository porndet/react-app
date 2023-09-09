
import React from 'react';
import './App.css';
import ComponentC from './components/ComponentC';
// import DataFeching1 from './components/DataFeching1';
// import DataFeching2 from './components/DataFeching2';
// import DataFetching from './components/DataFetching';
// import IntervalHookCounter from './components/IntervalHookCounter';
// import IntervalClassCounter from './components/IntervalClassCounter';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={"Porndet ComponentC"}>
        <ChannelContext.Provider value={"Channel ComponentC"}>
          <ComponentC></ComponentC>
        </ChannelContext.Provider>
      </UserContext.Provider>
      {/* <DataFeching2></DataFeching2> */}
      {/* <DataFeching1></DataFeching1> */}
      {/* <DataFetching></DataFetching> */}
      {/* <IntervalClassCounter></IntervalClassCounter> */}
      {/* <IntervalHookCounter></IntervalHookCounter> */}
    </div>
  );
}

export default App;
