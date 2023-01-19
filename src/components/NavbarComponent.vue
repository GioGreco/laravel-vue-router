<template>
    <nav class="container ">
        <ul class="d-flex justify-content-center align-items-center p-0 m-0">
            <li class="mx-5" v-for="(navItem, index) in navItems" :key="index">
                <RouterLink active-class="is-active" class="navLink" :to="navItem.path">{{ navItem.name }}</RouterLink>
            </li>
        </ul>
    </nav>
</template>
<script setup>
const navItems = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Projects',
        path: '/projects'
    },
    {
        name: 'Contacts',
        path: '/contacts'
    }
]
</script>

<style lang="scss" scoped>
nav{
    padding: 20px 0;
    ul{
        padding: 50px;
        list-style: none;
        li{
            width: 100px;
            height: 40px;
            border: 1px solid black;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 0;
            transition: .8s;

            &::before, &::after {
                position: absolute;
                background: beige;
                z-index: -1;
                transition: .8s;
                content: '';
            }

            &::before {
                height: 105%;
                width: 70%;
            }

            &::after {
                width: 105%;
                height: 70%;
            }


            &:hover::before {
                width: 0px;
                background: #fff;
            }

            &:hover::after {
                height: 0px;
                background: #fff;
            }

            &:hover {
                background: #fff;
            }

            .navLink{
                text-decoration: none;
                color: black;
                width: 100%;
                text-align: center;
                height: 100%;
                line-height: 40px;

                &.is-active{
                background-color: #ffffff;
                &::before {
                    width: 0px;
                    background: #fff;
                }

                &::after {
                    height: 0px;
                    background: #fff;
                }
            }
            }
        }
    }
}
</style>