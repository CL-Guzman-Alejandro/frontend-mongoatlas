<template>
	<div id="products">
		<div v-for="product of states.products" :key="`product-${ product.id }`" id="product-card">
			<label>{{ product.name }}</label>
		</div>
	</div>
</template>

<script src="@/views/Products/component.ts" lang="ts"></script>
<style src="@/views/Products/style.scss" lang="scss" scoped></style>