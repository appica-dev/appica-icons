<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M6 21v-2a4 4 0 0 1 4-4h2.5m6.501 6a2 2 0 0 1 0-4m0 4a2 2 0 0 0 0-4m0 4v1.5m0-5.5v-1.5m3.031 1.75-1.299.75m-3.463 2-1.3.75m0-3.5 1.3.75m3.463 2 1.3.75M8 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0\"/>";
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
