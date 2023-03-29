 import { useState } from 'react';

 const Section=({title, description, isVisible, setIsVisible})=>{
    //const [isVisible , setIsVisible]=useState(false);
    return(
        <div className="border border-black p-2 m-2">
            <h3 className="font-bold text-xl">{title}</h3>
            {
                //Accordian 
                isVisible?
                <button className="underline cursor-pointer" onClick={(e)=>{
                    setIsVisible();
                }}>Hide</button> 
                :
                <button className="underline cursor-pointer" onClick={(e)=>{
                    setIsVisible();
                }}>ShowMore</button>
            }
            {isVisible && <p>{description}</p>}
        </div>
    ) 
 }
 const Instamart=()=>{
    //Collapsiable accordian
    const [sectionConfig, setSectionConfig]=useState({
        showAbout: false,
        showTeam: false,
        showCareer: false,
        showProduct: false,
        showDetails:false
    })
    return (
        <div>
            <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
            <Section title={"AboutInstamart"} 
            description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
            isVisible={sectionConfig.showAbout}
            setIsVisible={(e)=>setSectionConfig({
                showAbout: true,
                showTeam: false,
                showCareer: false,
                showProduct: false,
                showDetails:false
            })
            }/>

            <Section title={"Team Instamart"} 
            description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
            isVisible={sectionConfig.showTeam} 
            setIsVisible={(e)=>setSectionConfig({
                showAbout: false,
                showTeam: true,
                showCareer: false,
                showProduct: false,
                showDetails:false
            })
            }/>

            <Section title={"Career Instamart"} 
            description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
            isVisible={sectionConfig.showCareer} 
            setIsVisible={(e)=>setSectionConfig({
                showAbout: false,
                showTeam: false,
                showCareer: true,
                showProduct: false,
                showDetails:false
            })
            }/>

            <Section title={"Product Instamart"} 
            description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
            isVisible={sectionConfig.showProduct} 
            setIsVisible={(e)=>setSectionConfig({
                showAbout: false,
                showTeam: false,
                showCareer: false,
                showProduct: true,
                showDetails:false
            })
            }/>

            <Section title={"Details Instamart"} 
            description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
            isVisible={sectionConfig.showDetails} 
            setIsVisible={(e)=>setSectionConfig({
                showAbout: false,
                showTeam: false,
                showCareer: false,
                showProduct: false,
                showDetails:true
            })
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