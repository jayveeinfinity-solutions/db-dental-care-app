<script setup>
  import { useAuthStore } from './../../stores/auth';
  import { router, useForm } from "@inertiajs/vue3";
  import { useModalStore } from "./../../stores/modal";

  const authStore = useAuthStore();
  const modalStore = useModalStore();

  const loginRef = ref(null);
  let loginInstance = null;

  // Reactive login form
  const loginForm = useForm({
    email: "",
    password: "",
    remember: false,
  })

  const error = ref(null)
  const isLoading = ref(false)

  // Handle login using Inertia post
  const handleLogin = async () => {
    isLoading.value = true
    error.value = null

    loginForm.post("/login", {
      onSuccess: (page) => {
        // server should return token & user in props
        const { token, user } = page.props

        if (!token || !user) {
          error.value = "Invalid login response"
          return
        }

        authStore.login({ token, user })
        close();
      },
      onError: (errors) => {
        error.value = errors.email || "Login failed"
      },
      onFinish: () => {
        isLoading.value = false
      },
    })
  }

  const loginWithGoogle = () => {
    window.location.href = route('google.redirect')
  }

  const open = () => loginInstance.show();
  const close = () => loginInstance.hide();

  onMounted(() => {
      loginInstance = new bootstrap.Modal(loginRef.value);
      modalStore.register("loginModal", { open, close })
  });
</script>

<template>
  <div class="modal fade" id="loginModal" ref="loginRef" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen-md-down modal-md modal-dialog-centered" role="document">
      <div class="modal-content p-4">
        <div class="modal-header mx-auto border-0">
          <h2 class="modal-title fs-3 fw-normal">Login</h2>
        </div>
        <div class="modal-body">
          <div class="login-detail">
            <div class="login-form p-0">
              <div class="col-lg-12 mx-auto">
                <form id="login-form">
                  <input type="email" name="email" placeholder="Email Address*" class="mb-3 ps-3 text-input" v-model="loginForm.email">
                  <input type="password" name="password" placeholder="Password" class="ps-3 text-input" v-model="loginForm.password">
                  <div class="checkbox d-flex justify-content-between mt-4">
                    <p class="checkbox-form">
                      <label class="">
                        <input name="rememberme" type="checkbox" id="remember-me" v-model="loginForm.remember"> Remember me
                      </label>
                    </p>
                    <p class="lost-password">
                      <a href="#">Forgot your password?</a>
                    </p>
                  </div>
                </form>
                <button class="btn btn-google" @click="loginWithGoogle">
                  Sign in with Google
                </button>
                <p v-if="error" class="text-danger mt-3">{{ error }}</p>
              </div>
            </div>
            <div class="modal-footer mt-5 d-flex justify-content-center">
              <button type="button" class="btn btn-red hvr-sweep-to-right dark-sweep" :disabled="isLoading" @click="handleLogin">Login</button>
              <button type="button" class="btn btn-outline-gray hvr-sweep-to-right dark-sweep">Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>