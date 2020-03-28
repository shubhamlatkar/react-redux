import React, { useReducer, useCallback, useMemo } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import ErrorModal from "../UI/ErrorModal";
import Search from "./Search";
import { url } from "../../data/data";

const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case "SET":
      return action.ingredients;
    case "ADD":
      return [...currentIngredients, action.ingredient];
    case "DELETE":
      return currentIngredients.filter(ing => ing.id !== action.id);
    default:
      throw new Error("Should not get here");
  }
};

const httpReducer = (httpState, action) => {
  switch (action.type) {
    case "SEND":
      return {
        ...httpState,
        loading: true
      };
    case "RESPONSE":
      return {
        ...httpState,
        loading: false
      };
    case "ERROR":
      return {
        loading: false,
        error: action.error
      };
    case "CLEAR":
      return {
        ...httpState,
        error: null
      };
    default:
      throw new Error("Should not get here");
  }
};

const Ingredients = React.memo(props => {
  const [userIngredients, dispatchIngredients] = useReducer(
    ingredientReducer,
    []
  );

  const [httpState, dispatchHTTPState] = useReducer(httpReducer, {
    loading: false,
    error: null
  });

  const onLoadIngerdientsHandler = useCallback(ingredients => {
    dispatchIngredients({
      type: "SET",
      ingredients: ingredients
    });
  }, []);

  const addIngredientHandler = useCallback(ingredient => {
    dispatchHTTPState({ type: "SEND" });
    fetch(url + "ingredients.json", {
      method: "POST",
      body: JSON.stringify(ingredient),
      headers: { "Content-Type": "application/json" }
    })
      .then(response => {
        dispatchHTTPState({ type: "RESPONSE" });
        return response.json();
      })
      .then(responseData => {
        dispatchIngredients({
          type: "ADD",
          ingredient: { id: responseData.name, ...ingredient }
        });
      });
  }, []);

  const onRemoveItem = useCallback(id => {
    dispatchHTTPState({ type: "SEND" });

    fetch(url + `ingredients/${id}.json`, {
      method: "DELETE"
    })
      .then(res => {
        dispatchIngredients({ type: "DELETE", id: id });
        dispatchHTTPState({ type: "RESPONSE" });
      })
      .catch(err => {
        dispatchHTTPState({
          type: "ERROR",
          error: "Something Went Wrong......."
        });
      });
  }, []);

  const clearError = useCallback(() => {
    dispatchHTTPState({ type: "CLEAR" });
  }, []);

  const ingredientList = useMemo(() => {
    return (
      <IngredientList
        ingredients={userIngredients}
        onRemoveItem={onRemoveItem}
      />
    );
  }, [userIngredients, onRemoveItem]);
  return (
    <div className="App">
      {httpState.error && (
        <ErrorModal onClose={clearError}>{httpState.error}</ErrorModal>
      )}
      <IngredientForm
        addIngredient={addIngredientHandler}
        loading={httpState.loading}
      />

      <section>
        <Search onLoadIngerdients={onLoadIngerdientsHandler} />
        {ingredientList}
      </section>
    </div>
  );
});

export default Ingredients;
