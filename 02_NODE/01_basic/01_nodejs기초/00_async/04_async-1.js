const displayA = () => {
    console.log(`A`);
};
const displayB = () => setTimeout(() => console.log(`B`), 2000);

const displayC = () => console.log(`C`);

displayA();
displayB();
displayC();
