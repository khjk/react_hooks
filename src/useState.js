import React, { useState } from "react";
//import "./styles.css";

const contents = [
  {
    tab: "Section 1",
    content: "1's content",
  },
  {
    tab: "Section 2",
    content: "2's content",
  },
];

const useTabs = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

const App = () => {
  const { currentItem, changeItem } = useTabs(1, contents);
  return (
    <div className="App">
      {contents.map((content, index) => (
        <button onClick={() => changeItem(index)}>{content.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

export default App;
