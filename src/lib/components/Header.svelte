<script>
	import { isMenuOpen } from '../assets/js/store';
	import NavItems from './NavItems.svelte';
</script>

<header class="flex flex-col">
	<div class=" flex items-center py-4 gap-4 justify-between">
		<div class="flex items-center">
			<a href="/" class=" flex items-center mx-8 gap-4">
				<img src="/images/logo.png" alt="sathirak logo" class=" size-10" />
				<h1 class="text-xl font-semibold tracking-wide">Sathira's Grotto</h1>
			</a>

			<nav class="hidden md:flex" class:open={$isMenuOpen}>
				<NavItems />
			</nav>
		</div>

		<div class="md:flex hidden items-center">
			<a href="https://github.com/sathirak" class="mr-8">
				<img src="/images/github.png" alt="Github Logo" class=" size-8" />
			</a>

			<a href="https://linkedin.com/in/sathirak" class="mr-8">
				<img src="/images/linkedin.png" alt="LinkedIn Logo" class=" size-8" />
			</a>
		</div>
	</div>
	<nav class="md:hidden flex w-full justify-center pb-4" class:open={$isMenuOpen}>
		<NavItems />

		<a href="https://github.com/sathirak" class="mx-8">
			<img src="/images/github.png" alt="Github Logo" class=" size-8" />
		</a>

		<a href="https://linkedin.com/in/sathirak" class="mr-8">
			<img src="/images/linkedin.png" alt="LinkedIn Logo" class=" size-8" />
		</a>
	</nav>
</header>
