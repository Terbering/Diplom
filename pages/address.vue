<template>
    <MainLayout>
        <div 
            id="AddressPage" 
            class="mt-4 max-w-[500px] mx-auto px-2"
        >
            <div class="mx-auto bg-white rounded-lg p-3">
                <div class="text-xl text-bold mb-2">Деталі адреси</div>
                <form @submit.prevent="submit()">
                    <TextInput 
                        class="w-full"
                        placeholder="Контактна особа"
                        v-model:input="contactName"
                        inputType="text"
                        :error="error && error.type == 'Контактна особа' ? error.message : ''"
                    />

                    <TextInput 
                        class="w-full mt-2"
                        placeholder="Адреса"
                        v-model:input="address"
                        inputType="text"
                        :error="error && error.type == 'адреса' ? error.message : ''"
                    />

                    <TextInput 
                        class="w-full mt-2"
                        placeholder="Поштовий індекс"
                        v-model:input="zipCode"
                        inputType="text"
                        :error="error && error.type == 'поштовий індекс' ? error.message : ''"
                    />

                    <TextInput 
                        class="w-full mt-2"
                        placeholder="Місто"
                        v-model:input="city"
                        inputType="text"
                        :error="error && error.type == 'місто' ? error.message : ''"
                    />

                    <TextInput 
                        class="w-full mt-2"
                        placeholder="Країна"
                        v-model:input="country"
                        inputType="text"
                        :error="error && error.type == 'країна' ? error.message : ''"
                    />

                    <button 
                        :disabled="isWorking"
                        type="submit"
                        class="
                            mt-6
                            bg-gradient-to-r 
                            from-[#FE630C] 
                            to-[#FF3200]
                            w-full 
                            text-white 
                            text-[21px] 
                            font-semibold 
                            p-1.5 
                            rounded-full
                        "
                    >
                        <div v-if="!isWorking">Оновити адресу</div>
                        <Icon 
                            v-else
                            name="eos-icons:loading" 
                            size="25" 
                            class="mr-2"
                        />
                    </button>
                </form>
            </div>
        </div>
    </MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue';
import { useUserStore } from '~/stores/user';
const userStore = useUserStore()
const user = useSupabaseUser()

let contactName = ref(null)
let address = ref(null)
let zipCode = ref(null)
let city = ref(null)
let country = ref(null)

let currentAddress = ref(null)
let isUpdate = ref(false)
let isWorking = ref(false)
let error = ref(null)

watchEffect(async () => {
    currentAddress.value = await useFetch(`/api/prisma/get-address-by-user/${user.value.id}`)

    if (currentAddress.value.data) {
        contactName.value = currentAddress.value.data.name
        address.value = currentAddress.value.data.address
        zipCode.value = currentAddress.value.data.zipcode
        city.value = currentAddress.value.data.city
        country.value = currentAddress.value.data.country

        isUpdate.value = true
    }

    userStore.isLoading = false
})

const submit = async () => {
    isWorking.value = true
    error.value = null

    if (!contactName.value) {
        error.value = {
            type: 'contactName',
            message: 'Потрібно вказати ім’я контактної особи'
        }
    } else if (!address.value) {
        error.value = {
            type: 'address',
            message: 'Потрібна адреса'
        }
    } else if (!zipCode.value) {
        error.value = {
            type: 'zipCode',
            message: 'Потрібно вказати поштовий індекс'
        }
    } else if (!city.value) {
        error.value = {
            type: 'city',
            message: 'Потрібне місто'
        }
    } else if (!country.value) {
        error.value = {
            type: 'country',
            message: 'Потрібно вказати країну'
        }
    }

    if (error.value) {
        isWorking.value = false
        return
    }

    if (isUpdate.value) {
        await useFetch(`/api/prisma/update-address/${currentAddress.value.data.id}`, {
            method: 'PATCH',
            body: {
                userId: user.value.id,
                name: contactName.value,
                address: address.value,
                zipCode: zipCode.value,
                city: city.value,
                country: country.value,
            }
        })

        isWorking.value = false

        return navigateTo('/checkout')
    }
    
    await useFetch(`/api/prisma/add-address/`, {
        method: 'POST',
        body: {
            userId: user.value.id,
            name: contactName.value,
            address: address.value,
            zipCode: zipCode.value,
            city: city.value,
            country: country.value,
        }
    })

    isWorking.value = false

    return navigateTo('/checkout')
}
</script>
