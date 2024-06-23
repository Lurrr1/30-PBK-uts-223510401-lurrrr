<template>
  <q-page-container class="q-pa-md">
    <!-- Home Section -->
    <section class="home" id="home">
      <div class="home-content">
        <h3>Halo! Saya,</h3>
        <h1>Fadhlur Rohman</h1>
        <h3>Seorang Iot Developer<span class="multiple-text"></span></h3>
        <p>
          Seorang mahasiswa Teknik Informatika yang berambisi dan kompetitif,
          serta selalu sedia mempelajari hal-hal baru!
        </p>
        <q-btn color="primary" :href="cvLink" target="_blank" class="q-mt-md">
          Download CV
        </q-btn>
      </div>
      <div class="home-img">
        <img src="../assets/img/profile.png" alt="Profile Picture" />
      </div>
    </section>

    <!-- About Section -->
    <section class="about q-my-xl">
      <q-card class="about-card">
        <q-card-section>
          <h2 class="heading">ABOUT <span>ME</span></h2>
          <h3>Junior IoT Developer</h3>
          <p>
            Saya, Fadhlur Rohman, adalah seorang mahasiswa yang aktif di
            Universitas Islam Riau, menjalani studi di Jurusan Teknik
            Informatika. Saya sangat tertarik dalam bidang Internet of Things
            (IoT) dan robotika. Memiliki keinginan yang mendalam terhadap
            implementasi robot dalam industri pertambangan, saya juga memiliki
            minat yang kuat terhadap dinamika dunia kerja. Saya yakin bahwa
            dedikasi serta ketertarikan saya dalam bidang ini akan menjadi
            kontribusi yang berarti dalam lingkungan professional.
          </p>
        </q-card-section>
      </q-card>
    </section>

    <!-- Projects Section -->
    <section class="projects" id="projects">
      <h2 class="heading">Latest<span> Projects</span></h2>
      <div class="q-pa-md row items-start q-gutter-md">
        <q-card
          v-for="project in projects"
          :key="project.title"
          class="my-card"
          flat
          bordered
        >
          <q-img :src="project.img" :alt="project.title" class="project-img" />
          <q-card-section>
            <div class="text-overline text-orange-9">{{ project.title }}</div>
            <div class="text-h5 q-mt-sm q-mb-xs">{{ project.title }}</div>
            <div class="text-caption text-grey">{{ project.description }}</div>
          </q-card-section>
          <q-card-actions>
            <q-btn
              flat
              color="primary"
              :label="project.title"
              :href="project.link"
              target="_blank"
              icon="open_in_new"
            />
            <q-space />
            <q-btn
              color="grey"
              round
              flat
              dense
              :icon="
                project.expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'
              "
              @click="project.expanded = !project.expanded"
            />
          </q-card-actions>
          <q-slide-transition>
            <div v-show="project.expanded">
              <q-separator />
              <q-card-section class="text-subtitle2">
                {{ project.longDescription }}
              </q-card-section>
            </div>
          </q-slide-transition>
        </q-card>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact" id="contact">
      <h2 class="heading">Contact<span> Me</span></h2>
      <div class="container">
        <q-btn
          v-for="contact in contacts"
          :key="contact.name"
          :href="contact.link"
          target="_blank"
          class="icon-box q-ma-sm"
          no-caps
        >
          <q-icon :name="contact.icon" size="30px" />
          <span class="text">{{ contact.text }}</span>
        </q-btn>
      </div>
      <h1 class="text-center email">
        You can contact me with:
        <a href="mailto:fadlurrohman1204@gmail.com"
          >fadlurrohman1204@gmail.com</a
        >
      </h1>
    </section>
  </q-page-container>
</template>

<script setup>
import AGRO from "../assets/img/AGRO.png";
import IOT from "../assets/img/IOT.png";
import ROBOT from "../assets/img/ROBOTIC.png";
import cvLink from "../assets/Fadhlur_RohmanCV2.pdf";
const projects = [
  {
    title: "AgroSmart",
    img: AGRO,
    description:
      "Memudahkan perkebunan dalam melaksanakan kegiatan perkebunan...",
    longDescription:
      "AgroSmart is a comprehensive solution for managing agricultural activities, making it easier for plantations to carry out their operations efficiently and effectively...",
    link: "https://github.com/wagi1922/AgroSmart",
    expanded: false,
  },
  {
    title: "Fingerprint IoT",
    img: IOT,
    description:
      "Ini adalah project IoT yang mana project ini berfungsi sebagai alat keamanan...",
    longDescription:
      "The Fingerprint IoT project serves as a security tool that utilizes biometric authentication to ensure the safety and security of the environment...",
    link: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTc1MTcyMDM1MjA5MTA1?story_media_id=3187039436734799853_7934330832&igsh=ODc1ZDFneTc3NXpu",
    expanded: false,
  },
  {
    title: "Robot Control",
    img: ROBOT,
    description:
      "Ini adalah salah satu project Robotic saya yang mana ini adalah...",
    longDescription:
      "The Robot Control project showcases the implementation of robotic systems for various applications, demonstrating advanced control techniques and automation...",
    link: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTc1MTcyMDM1MjA5MTA1?story_media_id=3094449353562225891_7934330832&igsh=ODc1ZDFneTc3NXpu",
    expanded: false,
  },
];
const contacts = [
  {
    name: "instagram",
    link: "https://www.instagram.com/lurrr.1",
    icon: "fab fa-instagram",
    text: "lurrr.1",
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/fadhlur-rohman-d1012/",
    icon: "fab fa-linkedin",
    text: "Fadhlur Rohman",
  },
  {
    name: "github",
    link: "https://github.com/Lurrr1",
    icon: "fab fa-github",
    text: "Lurrr1",
  },
];
</script>

<style scoped>
.home {
  padding: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  color: white;
}

.home-content {
  max-width: 500px;
  text-align: left;
  padding: 20px;
}

.home-content h3 {
  font-size: 2.5rem;
  font-weight: 700;
}

.home-content h1 {
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.3;
}

.home-content p {
  font-size: 1.4rem;
  margin-top: 1rem;
}

.home-img img {
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
  border-radius: 50%;
}

@media (max-width: 768px) {
  .home-content h3 {
    font-size: 2rem;
  }

  .home-content h1 {
    font-size: 3rem;
  }

  .home-content p {
    font-size: 1.2rem;
  }

  .home-img img {
    max-width: 300px;
  }
}

.about {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background: var(--snd-bf-color);
  padding: 2rem;
}

.about-card {
  max-width: 900px;
  width: 100%;
}

.about-content h2 {
  text-align: left;
  line-height: 1.2;
}

.about-content h3 {
  font-size: 2.6rem;
}

.about-content p {
  font-size: 1.6rem;
  margin: 2rem 0 3rem;
}

.projects {
  background: var(--bg-color);
}

.projects h2 {
  margin-bottom: 4rem;
  text-align: center;
  color: white;
}

.my-card {
  transition: transform 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.my-card:hover {
  transform: scale(1.05);
}

.project-img {
  height: 200px;
  object-fit: cover;
}

.container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.icon-box {
  margin: 0 10px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  padding: 10px;
  background-color: black;
  color: white;
  text-decoration: none;
  transition: background-color 0.3s;
}

.icon-box:hover {
  background-color: darkgrey;
}

.icon-box i {
  font-size: 30px;
  margin-right: 10px;
}

.icon-box .text {
  font-size: 1rem;
}
.contact h2 {
  text-align: center;
  color: white;
}
.contact h1 {
  color: var(--main-color);
  text-align: center;
}

.contact h1.email {
  font-size: 1.2rem;
  margin-top: 1rem;
  color: white;
}

.contact h1.email a {
  color: white;
  text-decoration: none;
}

.contact h1.email a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .contact .icon-box {
    width: 180px;
    padding: 8px;
  }

  .contact .icon-box i {
    font-size: 24px;
  }

  .contact .icon-box .text {
    font-size: 0.9rem;
  }

  .contact h1.email {
    font-size: 1rem;
  }
}
</style>
