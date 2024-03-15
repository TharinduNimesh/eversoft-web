<script setup lang="ts">
import { EmailVerification } from "~/schemas";

const form = ref({
  password: "",
});

function verify() {
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
          <h1 class="text-xl lg:text-2xl font-bold uppercase">Email Verification</h1>
          <UDivider class="my-5" />
        </div>

        <!-- Form Start -->
        <UForm
          :schema="EmailVerification"
          :state="form"
          @submit="verify"
          class="grid gap-7"
        >
          <div class="p-3 bg-primary/10 border border-primary rounded-lg">
            <span class="text-sm">
              Verification email sent to
              <strong>tharindunimesh@gmail.com</strong>. Please check inbox,
              including spam folder. Contact support if any issues arise. Thank
              you.
            </span>
          </div>

          <UFormGroup name="password" label="Password">
            <UPasswordInput v-model="form.password" />
          </UFormGroup>

          <UButton to="/email-verify" label="Confirm" block />

          <div class="w-full text-center">
            Did't Receive An Email?
            <ULink class="text-sm text-primary">Resend</ULink>
          </div>
        </UForm>
        <!-- Form End -->
      </div>
    </UContainer>
    <!-- Container End -->
  </div>
</template>
