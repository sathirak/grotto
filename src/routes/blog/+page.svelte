<script>
	import PostsList from '$lib/components/BlogList.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	import { siteDescription } from '$lib/config';

	export let data;
</script>

<svelte:head>
	<title>Sathira's Blogs</title>
	<meta data-key="description" name="description" content={siteDescription} />
</svelte:head>

<section class="flex flex-col gap-8 mx-10 md:mx-24 my-16">
	<h1 class="uppercase">Recent Blogs</h1>

	<PostsList posts={data.posts} />

	<Pagination currentPage={1} totalPosts={data.total} />
</section>
