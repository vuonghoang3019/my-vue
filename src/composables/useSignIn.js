import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";

const error = ref(null);
const isPending = ref(false)

async function signIn(email, password) {
    error.value = null
    isPending.value = true
    try {
        const response = await projectAuth.signInWithEmailAndPassword(email, password)
        console.log(response);
        return response;
    } catch (err) {
        error.value = err.message 
    }
    finally {
        error.value = null
        isPending.value = false
    }
}

export function useSignIn() {
    return { error, isPending, signIn }
}