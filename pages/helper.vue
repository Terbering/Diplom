<template>
    <MainLayout>
        <div id="Helper" class="mt-4 max-w-[1200px] mx-auto px-2 min-h-[50vh]">
            <div class="bg-white w-full p-6 min-h-[150px]">
                <div class="flex items-center text-xl">
                    <p class="text-center text-2xl font-semibold text-gray-800">Ласкаво просимо до розділу Довідки</p>
                    <p class="mt-4 text-lg text-gray-600">Тут ви знайдете відповіді на поширені запитання та корисну інформацію про наш сервіс.</p>
                </div>
            </div>
            <div class="faq mt-6">
                <h3 class="text-lg font-semibold text-gray-800">Як зареєструватися на сайті?</h3>
                <p class="text-gray-600">Щоб зареєструватися, натисніть на кнопку "Вхід / Зареєструватися" у верхньому меню та заповніть необхідні поля.</p>
            </div>
            <div class="faq mt-6">
                <h3 class="text-lg font-semibold text-gray-800">Як здійснити покупку?</h3>
                <p class="text-gray-600">Виберіть товар, який вас цікавить, додайте його до кошика та перейдіть до оформлення замовлення.</p>
            </div>
            <div class="faq mt-6">
                <h3 class="text-lg font-semibold text-gray-800">Як зв'язатися з підтримкою?</h3>
                <p class="text-gray-600">Ви можете зв'язатися з нашою службою підтримки через пошту: radygalanlove@gmail.com</p>
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