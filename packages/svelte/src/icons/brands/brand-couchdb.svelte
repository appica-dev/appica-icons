<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M6 15h12M6 18h12m3-7v7M3 11v7m3-6h12v-2a2 2 0 0 1 2-2 2 2 0 0 0-2-2H6a2 2 0 0 0-2 2 2 2 0 0 1 2 2z\"/>";
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
