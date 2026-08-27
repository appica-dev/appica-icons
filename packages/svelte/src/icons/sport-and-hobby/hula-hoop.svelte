<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4 6l2 1.5 6 .5m0 0l6-.5L20 6m-8 2v5m4 8l-4-8m0 0l-4 8m1.007-10.001C6.637 11.319 5 12.2 5 13c0 1.105 3.134 2 7 2s7-.895 7-2c0-.798-1.636-1.679-4-2m-5-6a2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0-2-2 2 2 0 0 0-2 2z\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  fill={"none"}
  stroke={"currentColor"}
  stroke-width={"1.5"}
  stroke-linecap={"round"}
  stroke-linejoin={"round"}
  {...props}
/>
