import postRecipe from "@services/implementation/recipe/post";
import { useState } from "react";

const FetchComponent = () => {
  const [result, setResult] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const dataRecipe = {
    lang: "es",
    response_tone: "cercano, jugueton, motivador y creativo",
    category: "desayuno",
    must_have: "pan, queso, tocino, carne",
    not_includes: "vegetales",
    country: "Colombia",
    name: "",
    age: "30",
    natal_sex: "Femenino",
    goal: "bajar de peso",
    calories: "1800",
    bmi: "30",
    cooking_time: "35",
    intolerances: "",
    diet_preferences: "",
  };

  const fetchData = async () => {
    setLoading(true);
    await postRecipe(dataRecipe)
      .then((res: any) => {
        console.log(res);
        setLoading(false);
        setResult(res);
      })
      .catch((error: any) => {
        console.error(error);
      });
  };

  return (
    <>
      {loading ? (
        <div className="container">
          <h1>Cargando receta...</h1>
        </div>
      ) : (
        <div className="container">
          <button onClick={() => fetchData()} className="button">
            Obtener receta
          </button>
          <div>
            {result ? (
              <div>
                <h1>{result?.greeting}</h1>
                {result?.ingredients?.map((item, index) => (
                  <h1 key={index}>{item}</h1>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
};
export default FetchComponent;
