<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M17 16a2 2 0 1 1 4 0 2 2 0 0 1-4 0m0 0v-4a2 2 0 0 1 4 0M4 6v12m8-12v12m-1 0h2M3 18h2m-1-6h8M3 6h2m6 0h2\"/>";
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
