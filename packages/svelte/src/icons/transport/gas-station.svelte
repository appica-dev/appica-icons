<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M20 9v7a1.5 1.5 0 1 1-3 0v-3a2 2 0 0 0-2-2H4m16-2-3-3m3 3h-1a1 1 0 0 1-1-1V7M4 20V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14M3 20h12\"/>";
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
