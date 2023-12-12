<script lang="ts">
	import { BlockTitle } from "@gradio/atoms";
	import { Block } from "@gradio/atoms";

	import type { Gradio } from "@gradio/utils";

	export let value: string | null = null;
	export let value_is_output = false;
	export let label: string;
	export let visible = true;
	export let elem_classes;
	export let elem_id;
	export let scale;
	export let info;
	export let min_width;
	export let show_label = true;
	export let container = true;
	export let interactive = true;
	export let gradio: Gradio<{
		change: never;
		input: never;
		submit: never;
	}>;

	$: if (value === null) value = new Date().toISOString().split('T')[0];

	let el: HTMLInputElement

	function handle_change(): void {
		gradio.dispatch("change");
		if (!value_is_output) {
			gradio.dispatch("submit");
			gradio.dispatch("input");
		}
	}
 
	$: value, handle_change();


</script>


<Block
	{visible}
	{elem_id}
	{elem_classes}
	{scale}
	{min_width}
	allow_overflow={false}
	padding={true}
>
	<label class:container>
		<BlockTitle {show_label} {info}>{label}</BlockTitle>
		<input type="date" bind:this={el} bind:value={value} on:change={handle_change} disabled={!interactive}/>
	</label>
</Block>

<style>
	label {
		display: block;
		width: 100%;
	}

	input {
		display: block;
		position: relative;
		outline: none !important;
		box-shadow: var(--input-shadow);
		background: var(--input-background-fill);
		padding: var(--input-padding);
		width: 100%;
		color: var(--body-text-color);
		font-weight: var(--input-text-weight);
		font-size: var(--input-text-size);
		line-height: var(--line-sm);
		border: none;
	}

	input[type="date"]::-webkit-calendar-picker-indicator {
		cursor: pointer;
	}

	label:not(.container),
	label:not(.container) > input {
		height: 100%;
	}
	.container > input{
		border: var(--input-border-width) solid var(--input-border-color);
		border-radius: var(--input-radius);
	}
	input:disabled {
		-webkit-text-fill-color: var(--body-text-color);
		-webkit-opacity: 1;
		opacity: 1;
	}

	input:focus {
		box-shadow: var(--input-shadow-focus);
		border-color: var(--input-border-color-focus);
	}

	input::placeholder {
		color: var(--input-placeholder-color);
	}

</style>