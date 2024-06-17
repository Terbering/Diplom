<template>
    <MainLayout>
        <div id="Helper" class="mt-4 max-w-[1200px] mx-auto px-2 min-h-[50vh]">
            <div class="bg-white w-full p-6 min-h-[150px]">
                <div class="flex items-center text-xl">
                    <p class="text-center text-2xl font-semibold text-gray-800">Налаштування cookie</p>
                </div>
            </div>
            <div class="faq mt-6">
                <h3 class="text-lg font-semibold text-gray-800">Файли cookie що це таке?</h3>
                <p class="text-gray-600">Це невеликі текстові файли, які зберігаються на комп'ютері або мобільному пристрої користувача під час відвідування вебсайтів. Вони зазвичай використовуються для ідентифікації користувачів на сайтах.</p>
            </div>
            <div class="faq mt-6">
            <h3 class="text-lg font-semibold text-gray-800">Функції файлів cookie:</h3>
            <ul>
                <li>Збереження інформації про вхід.</li>
                <li>Відстеження ваших уподобань.</li>
                <li>Персоналізація контенту.</li>
            </ul>
            </div>
            <div class="faq mt-6">
                <h3 class="text-lg font-semibold text-gray-800">Чи є на нашому сайті файли cookie?</h3>
                <p class="text-gray-600">Так є бо якщо відключити всі файли cookie це може призвести до того, що наш вебсайт не буде працювати належним чином.</p>
            </div>
        </div>
    </MainLayout>
</template>

<style>
.faq {
    border-left: 3px solid #3182ce;
    padding-left: 10px;
}
</style>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue';
import { useUserStore } from '~/stores/user';
const userStore = useUserStore()

onMounted(() => {
    setTimeout(() => userStore.isLoading = false, 300)
})
</script>