import * as React from "react";

const CommandList = (props) => {
  const { items, editor, range, command } = props;
  const [selected, setSelected] = React.useState(0);

  const selectItem = (index) => {
    console.log("click", index);
    // const item = items[index];
    // if (item) {
    //   console.log(item);
    // }
  };

  return (
    <div>
      {items.map((item, index) => (
        <button key={index} onClick={selectItem(index)}>
          {item.title}
        </button>
      ))}
      <button onClick={() => console.log("???????")}>test</button>
    </div>
  );
};

export default CommandList;

// export default {
//   props: {
//     items: {
//       type: Array,
//       required: true,
//     },

//     command: {
//       type: Function,
//       required: true,
//     },
//   },

//   data() {
//     return {
//       selectedIndex: 0,
//     };
//   },

//   watch: {
//     items() {
//       this.selectedIndex = 0;
//     },
//   },

//   methods: {
//     onKeyDown({ event }) {
//       if (event.key === "ArrowUp") {
//         this.upHandler();
//         return true;
//       }

//       if (event.key === "ArrowDown") {
//         this.downHandler();
//         return true;
//       }

//       if (event.key === "Enter") {
//         this.enterHandler();
//         return true;
//       }

//       return false;
//     },

//     upHandler() {
//       this.selectedIndex = (this.selectedIndex + this.items.length - 1) % this.items.length;
//     },

//     downHandler() {
//       this.selectedIndex = (this.selectedIndex + 1) % this.items.length;
//     },

//     enterHandler() {
//       this.selectItem(this.selectedIndex);
//     },

//     selectItem(index) {
//       const item = this.items[index];

//       if (item) {
//         this.command(item);
//       }
//     },
//   },
// };
