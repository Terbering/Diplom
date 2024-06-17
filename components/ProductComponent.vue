<template>
    <div 
        :id="`ProductComponent${product.id}`"
        class="
            bg-white 
            inline-block 
            rounded 
            hover:shadow-[0_0_10px_3px_rgba(0,0,0,0.15)] 
            cursor-pointer
        "
    >
        <NuxtLink :to="`/item/${product.id}`">
            <img 
                class="rounded-t "
                :src="product.url"
            >

            <div id="ProductDetails">
            
                <span class="flex items-center justify-start gap-3 px-1 pt-1">
                    <span class="text-[#FF6674] font-semibold">${{ priceComputed }}</span>
                    <span class="text-gray-500 text-sm text-light line-through">${{ oldPriceComputed }}</span>
                </span>


                <p class="flex items-center px-1 pt-0.5 text-xs text-[#252525]">
                    5,000 <Icon name="material-symbols:star-rate" color="#757575" class="ml-1.5"/> 4.1
                </p>

                <p class="px-1 pt-0.5 text-xs text-[#252525]">
                    {{ product.title.substring(0,60) }}
                </p>
                <p class="px-1 pt-0.5 text-xs text-[#252525]">
                    Категорія: {{ product.category }}
                </p>
                <p class="px-1 pb-1">
                    <span class="text-[#009A66] text-xs font-semibold">Безкоштовна доставка</span>
                </p>

            </div>
        </NuxtLink>
    </div>
</template>

<script setup>
    const props = defineProps(['product'])
    const { product } = toRefs(props)

    const priceComputed = computed(() => {
        return product.value.price / 100
    })

</script>
