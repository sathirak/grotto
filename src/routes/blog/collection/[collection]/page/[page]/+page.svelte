<!-- Renders posts listed by category -->
<script>
	import PostsList from '$lib/components/BlogList.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	import { siteDescription, postsPerPage } from '$lib/config';

	export let data;
	const { page, collection, totalPosts, posts } = data;

	$: lowerBound = page * postsPerPage - (postsPerPage - 1) || 1;
	$: upperBound = Math.min(page * postsPerPage, totalPosts);
</script>

<svelte:head>
	<title>Sathira's Blog Collections | {collection.toLocaleUpperCase()} | Page {page}}</title>
	<meta data-key="description" name={siteDescription} />
</svelte:head>

<section class="flex flex-col gap-8 mx-10 md:mx-24 my-16">
	{#if posts && posts.length}
		<Pagination currentPage={page} {totalPosts} path="/blog/collection/{collection}/page" />

		<PostsList {posts} />

		<Pagination currentPage={page} {totalPosts} path="/blog/collection/{collection}/page" />
	{:else}
		<h1>Oops!</h1>

		<p>Sorry, no posts to show here.</p>

		<a href="/blog">Back to blog</a>
	{/if}
</section>
