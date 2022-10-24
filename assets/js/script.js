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

/**
 * Function til tjek af alder
 */

// DOM Button Elements
const btn1 = document.getElementById('btn1')


const checkAge = () => {
	const form = document.getElementById('myForm')
	const result = (form.age.value < 18) ? 
						"Barn" : 
						(form.age.value >= 18) && (form.age.value <= 55) ? 
							"Ung" : "Gammel"

	console.log(result);
}

/**
 * Check Age Funktionskald 
 */
btn1.onclick = checkAge




