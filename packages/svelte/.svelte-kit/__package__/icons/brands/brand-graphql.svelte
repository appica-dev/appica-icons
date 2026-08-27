<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m12 4 7.5 12h-15zm0 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2M4 8l8-5 8 5v8l-8 5-8-5zm7 13a1 1 0 1 0 2 0 1 1 0 0 0-2 0M3 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0m0 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0m16 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0m0-8a1 1 0 1 0 2 0 1 1 0 0 0-2 0\"/>";
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
