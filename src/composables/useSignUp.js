import { ref } from "vue"
import { projectAuth, createUserWithEmailAndPassword  } from "@/configs/firebase"

const error = ref(null)
const isPending = ref(false)

async function signUp(email, password, fullName) {
  	isPending.value = true
	error.value = null
	try {
		createUserWithEmailAndPassword(projectAuth, email, password)
		.then((userCredential) => {
			const user = userCredential.user;
		})
		.catch((err) => {
			const error = err.message;
		});
	}
	catch (err) {
		console.log(err)
    	error.value = err.message
	}
	finally {
		isPending.value = false
		error.value = null
	}
}

export function useSignUp() {
  return { error, signUp, isPending }
}