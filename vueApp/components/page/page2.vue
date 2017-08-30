<template>
	<div>
		<h1>{{title}}</h1>
		<h2>{{content}}</h2>
		<router-link to="/">index</router-link>
	</div>
</template>
<script>
	export default {
		name:'page2',
		data(){
			return {
				title:'Title Two',
				content:'Content Two'
			}
		}
	}
</script>