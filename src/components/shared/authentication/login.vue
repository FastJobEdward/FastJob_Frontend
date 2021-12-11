<template>
  <div>
    <login-applicants></login-applicants>
    <login-business></login-business>
  </div>
</template>

<script>
import LoginApplicants from "../../applicants/authentication/login-applicants";
import LoginBusiness from "../../business/authentication/login-business";
export default {
  name: "login",
  components: {LoginBusiness, LoginApplicants},
}
</script>

<style scoped>

</style>