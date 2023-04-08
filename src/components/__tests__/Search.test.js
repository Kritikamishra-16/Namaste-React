//INTEGRATION TESTING FOR SEARCH FUNCTIONALITY
import "@testing-library/jest-dom";
import Body from "../Body";
import { render,waitFor, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA } from "../../mocks/data";


//we need to mock fetch() API data as JEST dont recognise Fetch
global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{ 
            return Promise.resolve(RESTAURANT_DATA)
        }
    })
})

test("Shimmer should load on Home Page",()=>{
    const body=render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    );
    //console.log(body);

    const shimmer= body.getByTestId("shimmer");
    //expect(shimmer).toBeInTheDocument();

    expect(shimmer.children.length).toBe(10);



})

test("Restaurant should on Home Page",async ()=>{
    const body=render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    );

    //as here we want to wait for our restaurant data after shimmer
    await waitFor(()=>expect(body.getByTestId("search-btn")));

    const resList=body.getByTestId("res-List");
    expect(resList.children.length).toBe(15);
  
})

test("Search for string(Sa) on Home Page",async ()=>{
    const body=render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    );

    //as here we want to wait for our restaurant data after shimmer
    await waitFor(()=>expect(body.getByTestId("search-btn")));

    const input=body.getByTestId("search-input");
    //mocking synthetic event and onChange event on search bar
    fireEvent.change(input, {target : {
        value: "sa",
    }});

    //on click of search btn we sholud get 3 restaurants in filterRestaurant
    const searchBtn=body.getByTestId("search-btn");
    fireEvent.click(searchBtn);

    const resList=body.getByTestId("res-List");
    expect(resList.children).toBe(2);

  
})