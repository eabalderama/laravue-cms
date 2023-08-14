<script setup>
import { ref } from "vue";
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import Dropdown from "@/Components/Dropdown.vue";
import DropdownLink from "@/Components/DropdownLink.vue";
import NavLink from "@/Components/NavLink.vue";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink.vue";
import { Link } from "@inertiajs/vue3";

const showingNavigationDropdown = ref(false);
const focused = ref(false);
</script>

<template>
    <div>
        <div class="min-h-screen bg-gray-100 flex">
            <!-- Responsive Navigation Menu -->
            <div
                :class="
                    showingNavigationDropdown
                        ? 'translate-x-0'
                        : '-translate-x-full'
                "
                class="sm:hidden w-screen h-screen fixed transition duration-300 ease-in-out"
            >
                <div
                    class="absolute w-full h-full backdrop-blur transition delay-300"
                    :class="
                        showingNavigationDropdown
                            ? 'opacity-1'
                            : 'opacity-0 delay-0'
                    "
                    @click="
                        showingNavigationDropdown = !showingNavigationDropdown
                    "
                ></div>
                <div
                    class="w-3/5 px-3 py-6 relative h-screen bg-gray-400 border-r border-gray-300"
                >
                    <div
                        :class="focused ? 'bg-gray-100' : 'bg-gray-200'"
                        class="flex items-center flex-1 md:flex-none w-full shadow-md px-3 rounded-md transition ease-out duration-200"
                    >
                        <v-icon name="fa-search" fill="#6b7280" scale="1.2" />
                        <input
                            :class="focused ? 'bg-gray-100' : 'bg-gray-200'"
                            class="w-full outline-none border-none focus:ring-0 transition ease-out duration-200"
                            type="text"
                            placeholder="Search"
                            @focus="focused = true"
                            @blur="focused = false"
                        />
                    </div>
                    <div class="mt-8 gap-3 flex flex-col">
                        <Link
                            :href="route('dashboard')"
                            class="inline-flex gap-5 items-center px-1 pt-1 text-xl"
                            :class="
                                route().current('dashboard')
                                    ? 'text-gray-900'
                                    : 'text-gray-500'
                            "
                        >
                            <v-icon name="fa-home" scale="1.5" />
                            <span>Dashboard</span>
                        </Link>
                        <div>
                            <NavLink
                                :href="route('spots')"
                                :active="route().current('spots')"
                                :icon="'fa-map-marked-alt'"
                            >
                                Tourist Spots
                            </NavLink>
                        </div>
                        <div>
                            <NavLink
                                :href="route('events')"
                                :active="route().current('events')"
                                :icon="'fa-calendar-alt'"
                            >
                                Events
                            </NavLink>
                        </div>
                        <div>
                            <NavLink
                                :href="route('organizations')"
                                :active="route().current('organizations')"
                                :icon="'fa-network-wired'"
                            >
                                Organizations
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <div
                class="hidden max-w-[250px] md:flex flex-col px-4 pt-6 pb-12 w-full"
            >
                <!-- LOGO -->
                <div class="flex items-center gap-2">
                    <Link :href="route('dashboard')">
                        <ApplicationLogo
                            class="block h-9 w-auto text-gray-800"
                        />
                    </Link>
                    SomethingCRM
                </div>

                <div class="flex flex-col mt-5 gap-3">
                    <div>
                        <NavLink
                            :href="route('dashboard')"
                            :active="route().current('dashboard')"
                            :icon="'fa-home'"
                        >
                            Dashboard
                        </NavLink>
                    </div>
                    <div>
                        <NavLink
                            :href="route('spots')"
                            :active="route().current('spots')"
                            :icon="'fa-map-marked-alt'"
                        >
                            Tourist Spots
                        </NavLink>
                    </div>
                    <div>
                        <NavLink
                            :href="route('events')"
                            :active="route().current('events')"
                            :icon="'fa-calendar-alt'"
                        >
                            Events
                        </NavLink>
                    </div>
                    <div>
                        <NavLink
                            :href="route('organizations')"
                            :active="route().current('organizations')"
                            :icon="'fa-network-wired'"
                        >
                            Organizations
                        </NavLink>
                    </div>
                </div>
            </div>

            <div class="flex-1 flex flex-col pt-6">
                <!-- Top Nav -->
                <div class="flex px-2 sm:px-8 justify-between gap-5 md:gap-0">
                    <!-- Hamburger -->
                    <div class="md:hidden flex items-center">
                        <button
                            @click="
                                showingNavigationDropdown =
                                    !showingNavigationDropdown
                            "
                            class="inline-flex bg-gray-200 items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-300 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                        >
                            <svg
                                class="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    :class="{
                                        hidden: showingNavigationDropdown,
                                        'inline-flex':
                                            !showingNavigationDropdown,
                                    }"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                                <path
                                    :class="{
                                        hidden: !showingNavigationDropdown,
                                        'inline-flex':
                                            showingNavigationDropdown,
                                    }"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    <!-- LOGO -->
                    <div class="sm:hidden flex items-center gap-2">
                        <Link :href="route('dashboard')">
                            <ApplicationLogo
                                class="block h-9 w-auto text-gray-800"
                            />
                        </Link>
                        SomethingCRM
                    </div>

                    <div
                        :class="focused ? 'bg-gray-100' : 'bg-gray-200'"
                        class="hidden sm:flex items-center flex-1 md:flex-none w-1/2 shadow-md px-3 rounded-md transition ease-out duration-200"
                    >
                        <v-icon name="fa-search" fill="#6b7280" scale="1.2" />
                        <input
                            :class="focused ? 'bg-gray-100' : 'bg-gray-200'"
                            class="w-full outline-none border-none focus:ring-0 transition ease-out duration-200"
                            type="text"
                            placeholder="Search"
                            @focus="focused = true"
                            @blur="focused = false"
                        />
                    </div>

                    <div class="hidden sm:block sm:items-center">
                        <!-- Settings Dropdown -->
                        <div class="ml-3 relative">
                            <Dropdown align="right" width="48">
                                <template #trigger>
                                    <span
                                        class="inline-flex rounded-md shadow-md"
                                    >
                                        <button
                                            type="button"
                                            class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                        >
                                            <v-icon
                                                name="fa-user-circle"
                                                scale="1.5"
                                            />
                                            <svg
                                                class="ml-2 -mr-0.5 h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </span>
                                </template>

                                <template #content>
                                    <DropdownLink :href="route('profile.edit')">
                                        Profile
                                    </DropdownLink>
                                    <DropdownLink
                                        :href="route('logout')"
                                        method="post"
                                        as="button"
                                    >
                                        Log Out
                                    </DropdownLink>
                                </template>
                            </Dropdown>
                        </div>
                    </div>
                </div>
                <!-- Page Content -->
                <main class="flex-1 px-2 sm:px-0">
                    <slot />
                </main>
            </div>
        </div>
    </div>
</template>
