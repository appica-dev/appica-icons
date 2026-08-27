<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M9 18A6 6 0 1 1 9 6h11m0 0-3 3m3-3-3-3m-4 17h2a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-2v-3h3\"/>";
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
