import { fetchApi } from "./helpers.js"

const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')

const checkAge = () => {
	const form = document.getElementById('myForm')
	const result = (form.age.value < 18) ? 
						"Barn" : 
						(form.age.value >= 18) && (form.age.value <= 55) ? 
							"Ung" : "Gammel"

	console.log(result);
}

const Cb = () => {
	console.log('Jeg er et callback');
}

btn1.onclick = checkAge

btn2.onclick = () => {
	Cb()
}

(async () => {
	const goals = await fetchApi('https://api.mediehuset.net/sdg/goals')
	console.log(goals)

	const users = await fetchApi('https://gorest.co.in/public/v1/users')
	console.log(users)
})()



