import {sum} from '../sum'

//First arg-> name of the test
//second arg->the code it executes
test("Check sum of 2 positive numbers",()=>{
    //assertion
    expect(sum(2,5)).toBe(7);
})