import { render } from "@testing-library/react" 
import Header from "../Header"
import { Provider } from "react-redux";
import  store  from "../../utils/store";
import {StaticRouter} from "react-router-dom/server";

 
test("Logo should load on rendering header",()=>{
     //Load Header 
     //rendering our header in test enviornment(jsdom) kind of container where our test will run given by react testing library (we do not have any root here)
     const header=render(
     <StaticRouter>
          <Provider store={store}>
               <Header/>
          </Provider>
     </StaticRouter>
     );

     //it will print virtual DOM object 
     console.log(header);

     //Check if logo is loaded
     const logo=header.getAllByTestId("logo");
     console.log(logo); //it is an array

     expect(logo[0].src).toBe("http://localhost/dummy.jpg");
    

     /******************************* */
})

test("Online status should be green on rendering header",()=>{

     const header=render(
          <StaticRouter>
               <Provider store={store}>
                    <Header/>
               </Provider>
          </StaticRouter>
          );

     const onlineStatus= header.getByTestId("online-status"); //it will just give us one
     expect(onlineStatus.innerHTML).toBe("🟢");
});

test("Cart should have 0 items on rendering header",()=>{

     const header=render(
          <StaticRouter>
               <Provider store={store}>
                    <Header/>
               </Provider>
          </StaticRouter>
          );

     const cartItem= header.getByTestId("cart"); //it will just give us one
     expect(cartItem.innerHTML).toBe("<a href=\"/cart\">Cart- 0 items</a>");
});