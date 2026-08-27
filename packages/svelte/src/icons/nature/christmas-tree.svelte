<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M14 17v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3m2-14 4 4-2 1 4 4-3 1 4 4H5l4-4-3-1 4-4-2-1z\"/>";
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
