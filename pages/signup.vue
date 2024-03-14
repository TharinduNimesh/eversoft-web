<script setup lang="ts">
import { RegisterValidation } from "~/schemas";

const form = ref({
  name: "",
  email: "",
  password: "",
});

function signUp() {
  console.log(form.value);
}
</script>

<template>
  <div class="w-full bg-primary-bkg p-5">
    <!-- Container Start -->
    <UContainer class="grid place-items-center min-h-screen">
      <div
        class="w-full flex flex-col lg:w-2/3 max-w-[450px] p-5 md:p-8 bg-secondary-bkg shadow dark:shadow-black rounded-lg"
      >
        <div class="w-full text-center px-5">
          <h1 class="text-xl lg:text-2xl font-bold uppercase">Sign Up</h1>
          <UDivider class="my-5" />
        </div>

        <!-- Form Start -->
        <UForm
          :schema="RegisterValidation"
          :state="form"
          @submit="signUp"
          class="grid gap-7"
        >
          <UFormGroup name="name" label="Name">
            <UInput v-model="form.name" placeholder="Enter Email Address" />
          </UFormGroup>

          <UFormGroup name="email" label="Email Address">
            <UInput
              v-model="form.email"
              type="email"
              placeholder="Enter Email Address"
            />
          </UFormGroup>

          <UFormGroup name="password" label="Password">
            <UPasswordInput v-model="form.password" />
          </UFormGroup>

          <UButton type="submit" label="Sign Up" block />

          <div class="w-full text-center">
            Already Have An Account
            <ULink to="/signin" class="text-sm text-primary">Sign In</ULink>
          </div>
        </UForm>
        <!-- Form End -->
      </div>
    </UContainer>
    <!-- Container End -->
  </div>
</template>
