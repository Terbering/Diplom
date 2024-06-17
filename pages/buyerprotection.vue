<template>
    <MainLayout>
        <div id="Helper" class="mt-4 max-w-[1200px] mx-auto px-2 min-h-[50vh]">
            <div class="bg-white w-full p-6 min-h-[150px]">
                <div class="flex items-center text-xl">
                    <p class="text-center text-2xl font-semibold text-gray-800">Захист клієнтів</p>
                    <p class="mt-4 text-lg text-gray-600">Звертайтеся сюди, щоб отримати відповіді на ваші запитання та дізнатися більше про програму захисту клієнтів.</p>
                </div>
            </div>
            <div class="faq mt-6">
                <h3 class="text-lg font-semibold text-gray-800">Що таке захист клієнтів?</h3>
                <p class="text-gray-600">Захист клієнтів — це програма, яка гарантує, що ви отримаєте саме те, що замовили, або повернете свої гроші.</p>
            </div>
            <div class="faq mt-6">
            <h3 class="text-lg font-semibold text-gray-800">Які випадки покриваються?</h3>
            <ul>
                <li>Ви отримали не той товар, який замовляли.</li>
                <li>Товар пошкоджений або дефектний.</li>
                <li>Ви не отримали товар взагалі.</li>
            </ul>
            </div>
            <div class="faq mt-6">
                <h3 class="text-lg font-semibold text-gray-800">Як скористатися програмою захисту покупців?</h3>
                <p class="text-gray-600">Якщо у вас виникла проблема з вашим замовленням, зв'яжіться з нашою службою підтримки протягом 30 днів після покупки. Ми допоможемо вирішити проблему або повернемо вам гроші.</p>
            </div>
            <div class="faq mt-6">
                <h3 class="text-lg font-semibold text-gray-800">Контактна інформація</h3>
                <p class="text-gray-600">Якщо у вас є питання або вам потрібна допомога, ви можете зв'язатися з нашою службою підтримки: radygalanlove@gmail.com</p>
            </div>
            <div class="faq mt-6">
                <h3 class="text-lg font-semibold text-gray-800">Право власності</h3>
                <p class="text-gray-600">Робота належить Ceo компанії Avtopoint MMA.</p>
            </div>
        </div>
    </MainLayout>
</template>

<style>
#Helper {
    background-color: #f7f7f7;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.faq {
    border-left: 3px solid #3182ce;
    padding-left: 10px;
    margin-top: 20px; 
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