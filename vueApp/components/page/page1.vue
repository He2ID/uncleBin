<template>
	<div>
		<h1>{{title}}</h1>
		<h2>{{content}}</h2>
		<router-link to="/">index</router-link>
	</div>
</template>
<script>
	export default {
		name:'page1',
		data(){
			return {
				title:'Title One',
				content:'Content One'
			}
		}
	}
</script>