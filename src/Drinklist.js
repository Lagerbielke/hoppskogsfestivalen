
import './App.css';

const drinks = [
  {
    drinkname:  'Tequila Sunrise',
    ingredients: 'Tequila, Apelsinjuice, Grenadin',
  }, 
  {
    drinkname:  'Frangi Fever',
    ingredients: 'Rom, Apelsinjuice, Ginger Ale, Angostura bitter',
  }, 
  {
    drinkname:  'Margarita',
    ingredients: 'Tequila, Limejuice, Cointreau',
  },
  {
    drinkname:  'Piña Colada',
    ingredients: 'Rom, Kokosmjölk, Ananasjuice',
  },  
  {
    drinkname:  'Fidel Castro',
    ingredients: 'Rom, Limejuice, Ginger Ale',
  },
  {
    drinkname:  'Tom Collins',
    ingredients: 'Gin, Citronjuice, Sockerlag, Äggvita, Sodavatten',
  },
  {
    drinkname:  'Gimlet',
    ingredients: 'Gin, Limejuice, Limeklyfta',
  },
  {
    drinkname:  'White Lady',
    ingredients: 'Cointreau, Gin, Citronjuice, Äggvita',
  },
  {
    drinkname:  'Gin Fizz',
    ingredients: 'Gin, Citronjuice, Sockerlag, Äggvita',
  },    
]
function Drinklist() {
  return (
    <div>
      <h2>Drinklistan</h2>
      
      {drinks.map((drink) => (
      <div>
        <h3>{drink.drinkname}</h3>
        <p>{drink.ingredients}</p>
      </div>
      ))}

    </div>
    
  );
}

export default Drinklist;
