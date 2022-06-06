import { ref } from "vue"
import { projectAuth } from "@/configs/firebase"
const error = ref(null)
const isPending = ref(false)

async function signUp(email, password, fullName) {
	error.value = null;
	try {
		const response =   await projectAuth.createUserWithEmailAndPassword(email, password);
		if (!response) throw new Error("Could not create a new user");
	
		return response;
	}
	catch (err) {
		
	}
}

export function useSignUp() {
  return { error, signUp, isPending }
}