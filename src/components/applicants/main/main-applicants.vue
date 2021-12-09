<template>
  <v-app>
    <nav class="nav-bar">
      <img src="../../../assets/FastJobLogo.png" alt="FastJob Logo">
      <div class="nav-links">
        <ul>
          <li>
            <a @click="goToJobPortal">Job Portal</a>
          </li>

          <li>
            <a @click="goToYourApplications">Your Applications</a>
          </li>

          <li class="v-size--small">
            <v-btn icon :to="{name:'ProfileApplicant', params:{applicantId:currentUser.id}}">
              <img class="profile" v-bind:src="currentUser.profilePhoto" alt="Applicant profile photo">
            </v-btn>
          </li>

          <li>
            <v-btn icon class="white--text transparent" @click="logoutDialog = true">
              <v-icon>fas fa-sign-out-alt</v-icon>
            </v-btn>
          </li>
        </ul>
      </div>
    </nav>

    <v-main class="main">
      <v-container class="container" fluid>
        <router-view/>

        <!-- Error Dialog -->
        <template>
          <div class="text-center">
            <v-dialog
                v-model="errorDialog"
                width="500"
            >
              <v-card>
                <v-card-title>
                  We are sorry
                </v-card-title>

                <v-card-text>
                  An error occurred while loading user information.
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <div class="text-center mt-3">
                    <v-btn @click="goToLogin" rounded color="#002C3E" dark >Ok</v-btn>
                  </div>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
        </template>

        <!-- Logout Dialog -->
        <template>
          <div class="text-center">
            <v-dialog
                v-model="logoutDialog"
                width="500"
            >
              <v-card>
                <v-card-title>
                  Are you sure you want to logout?
                </v-card-title>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                    <div class="text-center mt-3 button">
                      <v-btn @click="Logout" rounded color="#002C3E" dark >Logout</v-btn>
                    </div>
                    <div class="text-center mt-3 button">
                      <v-btn @click="logoutDialog = false" rounded outlined color="#002C3E" dark >Go back</v-btn>
                    </div>

                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
        </template>

      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import ApplicantsService from "../services/applicants.service"

export default {
  name: "main-applicants",
  data(){
    return {
      currentUser: {},
      errorDialog: false,
      logoutDialog: false
    }
  },
  mounted() {
    this.retrieveCurrentUser();
  },
  methods: {
    retrieveCurrentUser(){
      ApplicantsService.getById(this.$route.params.applicantId)
      .then(response => {
        console.log(response.data);
        this.currentUser = response.data;
      })
      .catch(error => {
        this.errorDialog = true;
        console.log(error);
      })
    },

    goToJobPortal(){
      this.$router.push({name:'JobPortal',params:{applicantId:this.currentUser.id}});
    },
    goToYourApplications(){
      this.$router.push({name:'Applications',params:{applicantId:this.currentUser.id}});
    },
    goToLogin(){
      this.errorDialog = false;
      this.$router.push({name:'Login'});
    },

    Logout(){
      this.$router.push('/');
    }
  }
}
</script>

<style lang="css">
/* General */
.main {
  background-color: #F7F8F3;
  margin-top: 50px;
}
body {
  background-color: #F7F8F3;
}
.container{
  width: 100%;
  margin: 20px;
}


/* Navbar */
nav{
  max-height: 9vh;
  display: flex;
  padding: 0 2%;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background: #002C3E;

}
nav img{
  width: 12%;
  margin: 1%;
}
.nav-links{
  flex: 1;
  text-align: right;
}
.nav-links ul li{
  list-style: none;
  display: inline-block;
  padding: 8px 12px;
  position: relative;
}
.nav-links ul li a {
  color: #fff;
  text-decoration: none;
  font-size: 100%;
}
.nav-links ul li::after {
  content: '';
  width: 0;
  height: 2px;
  background: #78BCC4;
  display: block;
  margin: auto;
  transition: 0.5s;
}
.nav-links ul li:hover::after{
  width: 100%;
}
.profile{
  height: 30px;
  width: 30px;
  border-radius: 100%;
  object-fit: cover;
  object-position: center;
}
.nav-bar{
  position: fixed;
  width: 100%;
  z-index: 100;
  box-shadow:  0 10px 10px  rgba(0, 0, 0, 0.2);
}


.button{
  margin: 10px;
}
</style>