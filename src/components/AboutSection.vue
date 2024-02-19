<script lang="ts" setup>
const person = {
    profession: "MERN Stack Developer & Web Designer",
    imageUrl: "assets/img/meb&w.jpg",
    bio: "At the dawn of Open Material Education !",
    birthday: "11 Aug 2000",
    website: "https://mza-codes.github.io/",
    webText: "mza-codes.github.io",
    mobile: "+91 8138 963 581",
    altMobile: "+91 7510 633 279",
    age: 24,
    city: "Kannur, Kerala",
    email: "muzofficial90@gmail.com",
    heroText: `Being a user of Web & Internet for a long period, It's always been a dream to Master Web, Resigning from title Asst System Administrator was the first step to this achievement. Still got more to Learn though !`,
};
</script>

<template>
    <section class="about-me container">
        <div class="section-title">
            <h2>About</h2>
            <p>Learn more about me</p>
        </div>

        <div class="row">
            <div class="col-lg-4" data-aos="fade-right">
                <img :src="person.imageUrl" class="img-fluid" alt="" />
            </div>
            <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                <h3>{{ person.profession }}</h3>
                <p class="fst-italic">{{ person.bio }}</p>
                <div class="row">
                    <div class="col-lg-6">
                        <ul>
                            <li>
                                <i class="bi bi-chevron-right"></i>
                                <strong>Birthday:</strong>
                                <span>{{ person.birthday }}</span>
                            </li>
                            <li>
                                <i class="bi bi-chevron-right"></i>
                                <strong>Website:</strong>
                                <a :href="person.website" target="_blank">
                                    {{ person.webText }}
                                </a>
                            </li>
                            <li>
                                <i class="bi bi-chevron-right"></i>
                                <strong>Phone:</strong> <span>{{ person.mobile }} </span>
                            </li>
                            <li>
                                <i class="bi bi-chevron-right"></i> <strong>Alt:</strong>
                                <span>{{ person.altMobile }} </span>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-6">
                        <ul>
                            <li>
                                <i class="bi bi-chevron-right"></i> <strong>Age:</strong>
                                <span>{{ person.age }}</span>
                            </li>
                            <li>
                                <i class="bi bi-chevron-right"></i>
                                <strong>City:</strong> <span>{{ person.city }}</span>
                            </li>
                            <li>
                                <i class="bi bi-chevron-right"></i>
                                <strong>E Mail:</strong>
                                <span>{{ person.email }}</span>
                            </li>
                            <li>
                                <i class="bi bi-chevron-right"></i>
                                <strong>Freelance:</strong> <span>Available</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <p>
                    {{ person.heroText }}
                </p>
            </div>
        </div>
    </section>
</template>
