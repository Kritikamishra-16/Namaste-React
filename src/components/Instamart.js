 import { useState } from 'react';

 const Section=({title, description, isVisible, setIsVisible})=>{
    //const [isVisible , setIsVisible]=useState(false);
    return(
        <div className="border border-black p-2 m-2">
            <h3 className="font-bold text-xl">{title}</h3>
            {
                //Accordian 
                isVisible?
                (
                    <div>
                        <button className="underline cursor-pointer" onClick={(e)=>{
                        setIsVisible(false);
                        }}>Hide</button> 
                        <p>{description}</p>
                    </div>
                )
                :
                <button className="underline cursor-pointer" onClick={(e)=>{
                    setIsVisible(true);
                }}>ShowMore</button>
            }
        </div>
    ) 
 }
 const Instamart=()=>{
    //Collapsiable accordian
    const [sectionConfig, setSectionConfig]=useState("")
    return (
        <div>
            {/**Giving the control of state sectionConfig to the parent (Instamart) .Now Child (Section) can modify the state only through the callback function setIsVisible passed by the Parent , in turn parent updates the state through setSectionConfig. This way the sibling components can be shown/hidden based on this state maintained by the parent. Initially description of all Section component is hidden. For this, " " is set as visibleSection. **/}
            <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
            <Section title={"AboutInstamart"} 
            description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
            isVisible={sectionConfig=="about"}
            setIsVisible={(x)=>{ 
                if(x)
                setSectionConfig("about");
                else
                setSectionConfig("");
            }}
             />

            <Section title={"Team Instamart"} 
            description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
            isVisible={sectionConfig=="team"} 
            setIsVisible={(x)=>{
                if(x)
                setSectionConfig("team");
                else
                setSectionConfig("");
            }
            }/>

            <Section title={"Career Instamart"} 
            description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
            isVisible={sectionConfig=="career"} 
            setIsVisible={(x)=>{
                if(x)
                setSectionConfig("career");
                else
                setSectionConfig("");
            }
            }/>

            <Section title={"Product Instamart"} 
            description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
            isVisible={sectionConfig=="product"} 
            setIsVisible={(x)=>{
                if(x)
                setSectionConfig("product");
                else
                setSectionConfig("");
            }
            }/>

            <Section title={"Details Instamart"} 
            description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
            isVisible={sectionConfig=="deatils"} 
            setIsVisible={(x)=>{
                if(x)
                setSectionConfig("details");
                else
                setSectionConfig("");
            }
            }/>
            {/*<AboutInstamart/>
            <DetailsOfInstamart/>
            <TeamOfInstamart/>
            <ProductOfInstamart/>
    <CareersOfInstamart/>*/}
        </div>
    )
}


export default Instamart;