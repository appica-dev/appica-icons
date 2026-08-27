<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8 20h2a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H8v-3h3m4 4a6 6 0 1 0 0-12H4m0 0 3 3M4 6l3-3M5 14v6\"/>";
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
