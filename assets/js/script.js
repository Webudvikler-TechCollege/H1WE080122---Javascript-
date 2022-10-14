// Importerer helper fil
import { fetchApi } from "./helpers.js"

/**
 * Asynkron function til kald af fetch function
 */
 (async () => {
	const goals = await fetchApi('https://api.mediehuset.net/sdg/goals')
	console.log(goals)

	const users = await fetchApi('https://gorest.co.in/public/v1/users')
	console.log(users)
})()


// DOM Button Elements
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')

/**
 * Function til tjek af alder
 */
const checkAge = () => {
	const form = document.getElementById('myForm')
	const result = (form.age.value < 18) ? 
						"Barn" : 
						(form.age.value >= 18) && (form.age.value <= 55) ? 
							"Ung" : "Gammel"

	console.log(result);
}

btn1.onclick = checkAge




