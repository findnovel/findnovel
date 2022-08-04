<template>
    <div>
        <main class="mt-12 mb-28 min-h-screen"><slot /></main>
        <footer
            class="fixed inset-x-0 bottom-0 h-16 border-t-[1px] border-primary-500/10 bg-primary-900"
        >
            <nav class="h-full">
                <ul class="flex h-full items-stretch justify-around">
                    <li>
                        <NuxtLink
                            title="Explore"
                            :to="{ name: 'index' }"
                            v-slot="{ isActive }"
                        >
                            <NavItem :is-active="isActive"
                                ><IconsBookIcon class="h-8 text-primary-50"
                            /></NavItem>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink
                            title="Favorites"
                            :to="{ name: 'favorites' }"
                            v-slot="{ isActive }"
                        >
                            <NavItem :is-active="isActive"
                                ><IconsHeartIconStroked
                                    class="h-8 text-primary-50"
                            /></NavItem>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink
                            title="Settings"
                            :to="{ name: 'settings' }"
                            v-slot="{ isActive }"
                        >
                            <NavItem :is-active="isActive"
                                ><IconsProfiIcon class="h-8 text-primary-50"
                            /></NavItem>
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
        </footer>
    </div>
</template>
