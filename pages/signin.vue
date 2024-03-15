<script setup lang="ts">
import { LoginValidation } from "~/schemas";

const form = ref({
  email: "",
  password: "",
  remember_me: false,
});

function signIn() {
  console.log(form.value);
}
</script>

<template>
  <div class="w-full bg-primary-bkg p-5">
    <!-- Container Start -->
    <UContainer class="grid place-items-center min-h-screen">
      <div
        class="w-full flex flex-col lg:w-2/3 max-w-[450px] p-5 md:p-8 bg-secondary-bkg shadow dark:shadow-black rounded-lg">
        <div class="w-full text-center px-5">
          <h1 class="text-xl lg:text-2xl font-bold uppercase">Sign In</h1>
          <UDivider class="my-5" />
        </div>

        <!-- Form Start -->
        <UForm :schema="LoginValidation" :state="form" @submit="signIn" class="grid gap-7">
          <UFormGroup name="email" label="Email Address">
            <UInput v-model="form.email" type="email" placeholder="Enter Email Address" />
          </UFormGroup>

          <!-- Password Start -->
          <div>
            <UFormGroup name="password" label="Password">
              <template #hint>
                <ULink class="text-sm text-primary"> Forgot Password ? </ULink>
              </template>
              <UPasswordInput v-model="form.password" />
            </UFormGroup>
            <UCheckbox v-model="form.remember_me" label="Remember Me" class="mt-2" />
          </div>
          <!-- Password End -->

          <UButton to="/app/dashboard" type="submit" label="Sign In" block />

          <div class="w-full text-center">
            Don't Have An Account
            <ULink to="/signup" class="text-sm text-primary">Sign Up</ULink>
          </div>
        </UForm>
        <!-- Form End -->
      </div>
    </UContainer>
    <!-- Container End -->
  </div>
</template>
